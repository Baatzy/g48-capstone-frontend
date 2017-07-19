import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { NavContainer } from '../navbar/navbar'
import { Button } from 'react-bootstrap'
import { dateStringFixer } from '../../Utilities/utilities'
const apiUrl = 'https://basement-windows.herokuapp.com'
const userId = 1 // Eventually needs to be obtained from session token


class TrainNowButton extends Component {
  render () {
    return (
      <Link to='/train'>
        <Button bsStyle="danger" bsSize="large">
          Train Now 🔥
        </Button>
      </Link>
    )
  }
}

class ViewCalendarButton extends Component {
  render () {
    return (
      <Link to='/calendar'>
        <Button bsStyle="info" bsSize="large">
          Calendar 🐸
        </Button>
      </Link>
    )
  }
}

class ViewProtocolsButton extends Component {
  render () {
    return (
      <Link to='/protocols'>
        <Button bsStyle="warning" bsSize="large">
          Protocols 😎
        </Button>
      </Link>
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
        <div>
          <h3>Loading 😐💦</h3>
        </div>
      )
    } else {
      log = logs[logs.length-2]
      let protocolIds = log.protocols
      console.log(protocols);
      console.log('protocolIds', protocolIds);
      let protocolsArr = protocols.filter(protocol => {
        return protocolIds.includes(protocol.id)
      })
      protocolsArr.reverse()

      console.log('Final protocol arr', protocolsArr);

      return (
        <div>
          <h4>Next training day on <span>{dateStringFixer(log.date)}</span></h4>
          <h4>Training protocols: HERE</h4>
        </div>
      )
    }

  }
}

class DashboardPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logbook: {}
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
        <NavContainer />
        <h1>Dashboard</h1>
        <p>Mesocycle focus: {this.state.logbook.mainFocus}</p>
        <TrainNowButton />
        <ViewCalendarButton />
        <ViewProtocolsButton />
        <SnapshotContainer logbook={this.state.logbook} protocols={this.state.protocols}/>
      </div>
    )
  }
}

export { DashboardPage }

// if (!logbook) {
//   return (
//     <div>
//       <h4>Next training day on <span>{dateStringFixer()}</span></h4>
//       <h4>Upcomming workouts and dashboard stats go here</h4>
//       <h4>Upcomming workouts and dashboard stats go here</h4>
//     </div>
//   )
// } else {
//   log = logbook.schedule.pop()
//   console.log(log);
//   return (
//     <div>
//       <h4>Next training day on <span>{dateStringFixer(log.date)}</span></h4>
//       <h4>Upcomming workouts and dashboard stats go here</h4>
//       <h4>Upcomming workouts and dashboard stats go here</h4>
//     </div>
//   )
// }
