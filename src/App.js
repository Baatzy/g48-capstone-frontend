import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from './components/login/login'
import { DashboardPage } from './components/dashboard/dashboard'
import { ProtocolsPage } from './components/protocols/protocols'
import { TrainPage } from './components/train/train'
import { CalendarPage } from './components/calendar/calendar'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/train' component={TrainPage} />
          <Route path='/protocols' component={ProtocolsPage} />
          <Route path='/calendar' component={CalendarPage} />
        </Switch>
      </div>
    );
  }
}

export default App
