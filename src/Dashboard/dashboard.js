import React, { Component } from 'react'


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
        <button>See Protocols</button>
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

class Dashboard extends Component {
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

export default Dashboard
