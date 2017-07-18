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
          See Protocols 😎
        </Button>
      </Link>
    )
  }
}

class SnapshotContainer extends Component {
  render () {
    return (
      <div>
        <h4>Next training day on <span>{dateStringFixer(this.props.nextSession.date)}</span></h4>
        <h4>Upcomming workouts and dashboard stats go here</h4>
        <h4>Upcomming workouts and dashboard stats go here</h4>
      </div>
    )
  }
}

class DashboardPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nextSession: {}
    }
  }

  async componentDidMount () {
    let logbooks = await axios.get(`${apiUrl}/logbooks`)
    logbooks = logbooks.data
    const userLogbook = logbooks.filter(logbook => {
      return logbook['user_id'] === userId
    })
    const nextSession = userLogbook[0]['json_logbook'].schedule.pop()
    this.setState({ nextSession })
  }

  render () {
    return (
      <div>
        <NavContainer />
        <h1>Dashboard</h1>
        <TrainNowButton />
        <ViewCalendarButton />
        <ViewProtocolsButton />
        <SnapshotContainer nextSession={this.state.nextSession} />
      </div>
    )
  }
}

export { DashboardPage }
