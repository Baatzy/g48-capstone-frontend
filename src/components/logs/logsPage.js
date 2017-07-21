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
    let logbook = this.props.logbook
    let protocols = this.props.protocols

    if (!logbook.length || !protocols.length) {
      return (
        HTMLLoading()
      )
    } else {
      return (
        <div>
          {displayLogCards(logbook, protocols)}
        </div>
      )
    }
  }
}

class LogsPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageTitle: 'My Logbook',
      logbook: [],
      protocols: [],
    }
  }

  async componentDidMount () {
    let protocols = await axios.get(`${apiUrl}/protocols`)
    protocols = protocols.data
    let logbooks = await axios.get(`${apiUrl}/logbooks`)
    logbooks = logbooks.data
    let logbook = logbooks.filter(logbook => {
      return logbook['user_id'] === userId
    })
    logbook = logbook[0]['json_logbook'].schedule.reverse()
    this.setState({ logbook, protocols })
  }

  render () {

    return (
      <div>
        <NavContainer pageTitle={this.state.pageTitle}/>
        <LogsContainer logbook={this.state.logbook} protocols={this.state.protocols}/>
      </div>
    )
  }
}

export { LogsPage }
