import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Glyphicon } from 'react-bootstrap'
import { Navbar, Nav, NavItem }  from 'react-bootstrap'
import { headerStyle, navIcon, navbarGrad } from './navbar-style'


class NavContainer extends Component {
  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand >
            <Link to='/dashboard'><Glyphicon glyph="home" style={navIcon} /></Link>
          </Navbar.Brand>
          <Navbar.Brand style={headerStyle}>
            {this.props.navTitle}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to='/dashboard'>Dashboard</Link></NavItem>
            <NavItem eventKey={2}><Link to='/logbook'>My Logbook</Link></NavItem>
            <NavItem eventKey={3}><Link to='/protocols'>Protocols</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1}><Link to='/'>Login Page</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export { NavContainer }
