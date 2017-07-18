import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavContainer } from '../navbar/navbar'
import { Button } from 'react-bootstrap'


class TrainNowButton extends Component {
  render () {
    return (
      <Link to='/train'>
        <Button bsStyle="danger" bsSize="large">
          Train Now
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
          Calendar
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
          See Protocols
        </Button>
      </Link>
    )
  }
}

class SnapshotContainer extends Component {
  render () {
    return (
      <div>
        <h4>Upcomming workouts and dashboard stats go here</h4>
        <h4>Upcomming workouts and dashboard stats go here</h4>
        <h4>Upcomming workouts and dashboard stats go here</h4>
      </div>
    )
  }
}

class DashboardPage extends Component {
  render () {
    return (
      <div>
        <NavContainer />
        <h1>Dashboard</h1>
        <TrainNowButton />
        <ViewCalendarButton />
        <ViewProtocolsButton />
        <SnapshotContainer />
      </div>
    )
  }
}

export { DashboardPage }
