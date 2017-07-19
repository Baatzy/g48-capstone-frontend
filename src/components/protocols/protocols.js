import React, { Component } from 'react'
import axios from 'axios'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button, Panel, Grid, Col } from 'react-bootstrap'
const apiUrl = 'https://basement-windows.herokuapp.com'
const userId = 1 // Eventually needs to be obtained from session token


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
    const protocolCards = this.state.protocols.map(protocol =>
      <Grid>
        <Col xs={12} md={12}>
          <div key={protocol.id}>
            <Link to='/protocols'>
              <Panel header={protocol['json_protocol'].name}>
                <p>{protocol['json_protocol'].muscleGroup}</p>
                <p>System: {protocol['json_protocol'].category}</p>
              </Panel>
            </Link>
          </div>
        </Col>
      </Grid>
    )

    return (
      <div>
        <NavContainer />
        <div bsClass="container">
          <h1>Protocols</h1>
            HERE IS WHERE ALL THE SORTING DROPDOWNS GO!
            {protocolCards}
        </div>
      </div>
    )
  }
}

export { ProtocolsPage }
