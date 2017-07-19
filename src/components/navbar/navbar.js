import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem }  from 'react-bootstrap'


class Sidebar extends Component {
  render () {
    return (null)
  }
}

class NavContainer extends Component {
  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/dashboard'>✨ The Boardroom ✨</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to='/dashboard'>Dashboard</Link></NavItem>
            <NavItem eventKey={2}><Link to='/protocols'>Protocols</Link></NavItem>
            <NavItem eventKey={3}><Link to='/calendar'>Calendar</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1}><Link to='/'>Login</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export { NavContainer }
