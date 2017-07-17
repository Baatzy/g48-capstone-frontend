import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NavContainer extends Component {
  render () {
    return (
      <div className="App-header">
        <h2>✨ The Boardroom ✨</h2>
        <p>This is the NavContainer Component</p>
      </div>
    )
  }
}

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

class Snapshot extends Component {
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

class BodyContainer extends Component {
  render () {
    return (
      <div>
        <TrainNowButton />
        <ViewCalendarButton />
        <ViewProtocolsButton />
        <Snapshot />
      </div>
    )
  }
}

class Dashboard extends Component {
  render () {
    return (
      <div>
        <NavContainer />
        <BodyContainer />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
