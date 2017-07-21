import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { NavContainer } from '../navbar/navbar'
import { Button, Grid, Glyphicon } from 'react-bootstrap'
import { dateStringFixer, displayProtocolCards } from '../../Utilities/functions'
import { HTMLLoading } from '../../Utilities/htmlSnips'
const apiUrl = 'https://basement-windows.herokuapp.com'
const userId = 1 // Eventually needs to be obtained from session token


function MesocycleContainer(props) {
  return (
    <div>
      <p>Mesocycle focus: {props.logbook.mainFocus}</p>
    </div>
  ) 
}

class TrainNowButtons extends Component {
  render () {
    return (
      <div>
        <Link to='/logs/new'>
          <Button bsStyle="danger" bsSize="large">
            Train Now 🔥
          </Button>
        </Link>
      </div>
    )
  }
}

class ViewCalendarButtons extends Component {
  render () {
    return (
      <div>
        <Link to='/logbook'>
          <Button bsStyle="info" bsSize="large">
            My Logbook 📓
          </Button>
        </Link>
      </div>
    )
  }
}

class ViewProtocolsButtons extends Component {
  render () {
    return (
      <div>
        <Link to='/protocols'>
          <Button bsStyle="warning" bsSize="large">
            Protocols ⭐️
          </Button>
        </Link>
        <Link to='/protocols/new'>
          <Button bsStyle="warning" bsSize="large">
            <Glyphicon glyph="plus" />
          </Button>
        </Link>
      </div>
    )
  }
}

class SnapshotContainer extends Component {
  render () {
    let log
    let logs = this.props.logbook.schedule
    let protocols = this.props.protocols

    if (!logs || !protocols) {
      return (
        HTMLLoading()
      )
    } else {
      log = logs[logs.length-1]
      let protocolIds = log.protocols
      let protocolsArr = protocols.filter(protocol => {
        return protocolIds.includes(protocol.id)
      })
      protocolsArr.reverse()

      return (
        <div>
          <h4>Next training day on {dateStringFixer(log.date)}</h4>
          <h4>Training protocols:</h4>
          {displayProtocolCards(protocolsArr)}
        </div>
      )
    }
  }
}

class DashboardPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navTitle: 'Dashboard',
      logbook: {},
      protocols: [],
    }
  }

  async componentDidMount () {
    let protocols = await axios.get(`${apiUrl}/protocols`)
    protocols = protocols.data
    let logbooks = await axios.get(`${apiUrl}/logbooks`)
    logbooks = logbooks.data
    let logbook = logbooks.filter(el => {
      return el['user_id'] === userId
    })
    logbook = logbook[0]['json_logbook']
    this.setState({ logbook, protocols })
  }

  render () {
    return (
      <div>
        <NavContainer navTitle={this.state.navTitle}/>
        <MesocycleContainer logbook={this.state.logbook}/>
        <TrainNowButtons />
        <ViewCalendarButtons />
        <ViewProtocolsButtons />
        <SnapshotContainer logbook={this.state.logbook} protocols={this.state.protocols}/>
      </div>
    )
  }
}

export { DashboardPage }
