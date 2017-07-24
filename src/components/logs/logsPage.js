import React, { Component } from 'react'
import axios from 'axios'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button, Col, Panel, Glyphicon } from 'react-bootstrap'
import { HTMLLoading } from '../../Utilities/htmlSnips'
const apiUrl = 'https://basement-windows.herokuapp.com'
const userId = 1 // Eventually needs to be obtained from session token


class LogsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logbook: [],
      protocols: [],
      mainFocus: '',
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
    let mainFocus = logbook[0].json_logbook.mainFocus
    logbook = logbook[0].json_logbook.schedule.reverse()

    this.setState({ logbook, protocols, mainFocus })
  }

  async handleDeleteLog (index, e) {
    e.preventDefault()

    this.state.logbook.splice(index,1)

    const updatedLogbook = {
      id: userId,
      user_id: userId,
      json_logbook: {
        schedule: this.state.logbook,
        mainFocus: this.state.mainFocus,
      }
    }

    this.state.logbook.reverse()

    try {
      let updated = await axios.put(`${apiUrl}/logbooks/${userId}`, updatedLogbook)
      let logbooks = await axios.get(`${apiUrl}/logbooks`)
      logbooks = logbooks.data
      let logbook = logbooks.filter(logbook => {
        return logbook['user_id'] === userId
      })
      logbook = logbook[0].json_logbook.schedule
      logbook.reverse()

      this.setState({ logbook })
    } catch (err) {
      console.error(err)
    }
  }

  async handleCycleCompletedLog (index, e) {
    e.preventDefault()

    if (this.state.logbook[index].completed === null) {
      this.state.logbook[index].completed = true
    } else if (this.state.logbook[index].completed) {
      this.state.logbook[index].completed = false
    } else (
      this.state.logbook[index].completed = null
    )

    let updatedLogbook = {
      id: userId,
      user_id: userId,
      json_logbook: {
        schedule: this.state.logbook,
        mainFocus: this.state.mainFocus,
      }
    }

    this.state.logbook.reverse()

    try {
      let updated = await axios.put(`${apiUrl}/logbooks/${userId}`, updatedLogbook)
      let logbooks = await axios.get(`${apiUrl}/logbooks`)
      logbooks = logbooks.data
      let logbook = logbooks.filter(logbook => {
        return logbook['user_id'] === userId
      })
      logbook = logbook[0].json_logbook.schedule
      logbook.reverse()

      this.setState({ logbook })
    } catch (err) {
      console.error(err)
    }
  }

  dateStringFixer (dateStr) {
    if (!dateStr) return '...not sure actually.'

    let month = ''
    let day = ''
    let year = ''

    year = dateStr.slice(0, 4)
    month = dateStr.slice(5, 7)
    day = dateStr.slice(8, 10)

    if (month[0] === '0') month = month[1]
    if (day[0] === '0') day = day[1]

    return month + '-' + day + '-' + year
  }

  logCardStyle (bool) {
    if (bool) {
      return "success"
    } else if (bool === false) {
      return "danger"
    } else if (bool === null) {
      return "warning"
    }
  }

  protocolLister (protocolIdArr, protocols) {
    let protocolNameArr = []
    let protocolsStr = ''

    protocolIdArr.forEach(protocolId => {
      protocols.forEach(protocol => {
        if (protocol.id === protocolId) {
          protocolNameArr.push(protocol['json_protocol'].name)
        }
      })
    })

    protocolNameArr.forEach((protocolName, index) => {
      if (index === protocolNameArr.length-1) {
        protocolsStr = protocolsStr.concat(protocolName)
      } else {
        protocolsStr = protocolsStr.concat(protocolName + ', ')
      }
    })

    return protocolsStr
  }

  displayLogCards (logsArr, protocols) {
    if (!logsArr || !protocols) {
      return HTMLLoading()
    }

    let protocolIdArr = logsArr.map(log => {
      return log.protocols
    })

    return logsArr.map((log, index) =>
      <div key={index}>
        <Col xs={12} md={12}>
          <Panel header={this.dateStringFixer(log.date)} bsStyle={this.logCardStyle(log.completed)}>
            <p>Protocols: {this.protocolLister(protocolIdArr[index], protocols)}</p>
            <p>Warmup: {log.warmupNotes}</p>
            <p>Session: {log.sessionNotes}</p>
            <div>
              <Button onClick={this.handleCycleCompletedLog.bind(this, index)} bsStyle="info"><Glyphicon glyph="refresh" /></Button>
              <Button onClick={false} bsStyle="warning"><Glyphicon glyph="edit" /></Button>
              <Button onClick={this.handleDeleteLog.bind(this, index)} bsStyle="danger"><Glyphicon glyph="trash" /></Button>
            </div>
            Index is: {index}
          </Panel>
        </Col>
      </div>
    )
  }

  render () {
    let logbook = this.state.logbook
    let protocols = this.state.protocols

    if (!logbook.length || !protocols.length) {
      return (
        HTMLLoading()
      )
    } else {
      return (
        <div>
          {this.displayLogCards(logbook, protocols)}
        </div>
      )
    }
  }
}

class LogsPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navTitle: 'My Logbook',
    }
  }

  render () {

    return (
      <div>
        <NavContainer navTitle={this.state.navTitle}/>
        <LogsContainer />
      </div>
    )
  }
}

export { LogsPage }
