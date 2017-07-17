import React, { Component } from 'react';
import Dashboard from './Dashboard/dashboard'
import NavContainer from './Navbar/navbar'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer />
        <Dashboard />
      </div>
    );
  }
}

export default App;
