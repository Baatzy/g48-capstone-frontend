import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavContainer from '../navbar/navbar'


class TrainNowButton extends Component {
  render () {
    return (
      <div className="Dash-button">
        <button>Train Now</button>
      </div>
    )
  }
}

class ViewCalendarButton extends Component {
  render () {
    return (
      <div className="Dash-button">
        <button>View Calendar</button>
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
        <p>Upcomming workouts and dashboard stats go here</p>
        <p>Upcomming workouts and dashboard stats go here</p>
        <p>Upcomming workouts and dashboard stats go here</p>
        <p>Upcomming workouts and dashboard stats go here</p>
      </div>
    )
  }
}

class DashboardContainer extends Component {
  render () {
    return (
      <div>
        <TrainNowButton />
        <ViewCalendarButton />
        <ViewProtocolsButton />
        <SnapshotContainer />
      </div>
    )
  }
}

export default DashboardContainer
