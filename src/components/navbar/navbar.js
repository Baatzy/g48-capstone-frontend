import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


class Sidebar extends Component {
  render () {
    return (null)
  }
}

class NavContainer extends Component {
  render () {
    return (
      <div className="App-header">
        <Sidebar />
        <Link to='/'><h2>✨ The Boardroom ✨</h2></Link>
      </div>
    )
  }
}

export { NavContainer }
