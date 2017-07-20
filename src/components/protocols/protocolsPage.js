import React, { Component } from 'react'
import axios from 'axios'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button, Panel, Grid, Col } from 'react-bootstrap'
import { displayProtocolCards } from '../../Utilities/functions'
import { HTMLLoading } from '../../Utilities/htmlSnips'
const apiUrl = 'https://basement-windows.herokuapp.com'
const userId = 1 // Eventually needs to be obtained from session token


class ProtocolFilters extends Component {
  render () {
    return (
      <div>
        <h3>FILTERS GO HERE</h3>
      </div>
    )
  }
}

class ProtocolsContainer extends Component {
  render () {
    let protocols = this.props.protocols

    if (!protocols) {
      return (
        HTMLLoading()
      )
    } else {
      return (
        <div>
          {displayProtocolCards(protocols)}
        </div>
      )
    }

  }
}

class ProtocolsPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      protocols: []
    }
  }

  async componentDidMount () {
    let protocols = await axios.get(`${apiUrl}/protocols`)
    protocols = protocols.data
    this.setState({ protocols })
  }

  render () {
    return (
      <div>
        <NavContainer />
        <h1>Protocols</h1>
        <ProtocolFilters />
        <ProtocolsContainer protocols={this.state.protocols}/>
      </div>
    )
  }
}

export { ProtocolsPage }
