import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from './components/login/loginPage'
import { DashboardPage } from './components/dashboard/dashboardPage'
import { ProtocolsPage } from './components/protocols/protocolsPage'
import { NewProtocolPage } from './components/protocols/newProtocolPage'
import { LogsPage } from './components/logs/logsPage'
import { NewLogPage } from './components/logs/newLogPage'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/dashboard' component={DashboardPage} />
          <Route exact path='/logbook' component={LogsPage} />
          <Route exact path='/logbook/new' component={NewLogPage} />
          <Route exact path='/protocols' component={ProtocolsPage} />
          <Route exact path='/protocols/new' component={NewProtocolPage} />
        </Switch>
      </div>
    )
  }
}

export default App
