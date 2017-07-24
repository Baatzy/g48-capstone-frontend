import React, { Component } from 'react'
import axios from 'axios'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button, Panel, Col, Glyphicon } from 'react-bootstrap'
// import { displayProtocolCards } from '../../Utilities/functions'
import { HTMLLoading } from '../../Utilities/htmlSnips'
const apiUrl = 'https://basement-windows.herokuapp.com'
// const apiUrl = 'http://localhost:4000'
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
  constructor(props) {
    super(props)

    this.modifyProtocolButtons = this.modifyProtocolButtons.bind(this)
    this.displayProtocolCards = this.displayProtocolCards.bind(this)
  }

  displayProtocolCards () {
    if (!this.props.protocols) {
      <HTMLLoading />
    }

    return this.props.protocols.map(protocol =>
      <div key={protocol.id}>
        <Col xs={12} md={12}>
          <div>
            <Panel header={protocol['json_protocol'].name}>
              <p>Author: {protocol['author_username']}</p>
              <p>Target: {protocol['json_protocol'].muscleGroup}</p>
              <p>Category: {protocol['json_protocol'].category}</p>
              <p>{protocol['json_protocol'].description}</p>
              {this.modifyProtocolButtons(protocol['author_user_id'], userId, protocol.id)}
            </Panel>

          </div>
        </Col>
      </div>
    )
  }

  modifyProtocolButtons (authorId, userId, protocolId) {
    if (userId === authorId) {
      return (
        <div>
          <Button bsStyle="warning"><Glyphicon glyph="edit" /></Button>
          <Button onClick={() => this.props.handleDelete(protocolId)}  bsStyle="danger"><Glyphicon glyph="trash" /></Button>
        </div>
      )
    } else {
      return <div></div>
    }

  }

  render () {
    let protocols = this.props.protocols

    if (!protocols.length) {
      return (
        HTMLLoading()
      )
    } else {
      return (
        <div>
          {this.displayProtocolCards()}
        </div>
      )
    }
  }
}

class ProtocolsPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navTitle: 'Protocols',
      protocols: [],
    }

    this.deleteProtocol = this.deleteProtocol.bind(this)
  }

  async componentDidMount () {
    let protocols = await axios.get(`${apiUrl}/protocols`)
    protocols = protocols.data

    this.setState({ protocols })
  }

  async deleteProtocol(id) {
    let deleted = await axios.delete(`${apiUrl}/protocols/${id}`)

    let protocols = await axios.get(`${apiUrl}/protocols`)
    protocols = protocols.data

    this.setState({ protocols })
  }

  render () {
    return (
      <div>
        <NavContainer navTitle={this.state.navTitle}/>
        <ProtocolFilters />
        <ProtocolsContainer handleDelete={this.deleteProtocol} protocols={this.state.protocols}/>
      </div>
    )
  }
}

export { ProtocolsPage }
