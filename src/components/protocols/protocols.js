import React, { Component } from 'react'
import axios from 'axios'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
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
    console.log('In componentDidMount', protocols);
  }

  render () {
    const protocolCards = this.state.protocols.map(protocol =>
        <div key={protocol.id}>
          Hi
        </div>
    )

    return (
      <div>
        <NavContainer />
        <h1>Protocols</h1>
        <div>
          HERE IS WHERE ALL THE SORTING DROPDOWNS GO!
        </div>
        <div>
          {protocolCards}
        </div>
      </div>
    )
  }
}

export { ProtocolsPage }
