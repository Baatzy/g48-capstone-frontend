import React, { Component } from 'react'
import axios from 'axios'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { dateStringFixer, displayLogCards } from '../../Utilities/functions'
import { HTMLLoading } from '../../Utilities/htmlSnips'
const apiUrl = 'https://basement-windows.herokuapp.com'
const userId = 1 // Eventually needs to be obtained from session token


class LogsContainer extends Component {
  render () {
    let logs = this.props.logbook.schedule
    let protocols = this.props.protocols
    console.log('In logs, this is logs', logs);
    console.log('In logs, this is protocols', protocols);
    if (!logs || !protocols) {
      return (
        HTMLLoading()
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

class LogsPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logbook: {},
      protocols: []
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
        <h1>Your Logbook</h1>
        <LogsContainer logbook={this.state.logbook} protocols={this.state.protocols}/>
      </div>
    )
  }
}

export { LogsPage }
