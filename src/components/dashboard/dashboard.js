import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavContainer } from '../navbar/navbar'


class TrainNowButton extends Component {
  render () {
    return (
      <div className="Dash-button">
        <Link to='/train'><button>Train Now</button></Link>
      </div>
    )
  }
}

class ViewCalendarButton extends Component {
  render () {
    return (
      <div className="Dash-button">
        <Link to='/calendar'><button>View Calendar</button></Link>
      </div>
    )
  }
}

class ViewProtocolsButton extends Component {
  render () {
    return (
      <div className="Dash-button">
        <Link to='/protocols'><button>See Protocols</button></Link>
      </div>
    )
  }
}

class SnapshotContainer extends Component {
  render () {
    return (
      <div>
        <p>Upcomming workouts and dashboard stats go here</p>
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
