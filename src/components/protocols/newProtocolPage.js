import React, { Component } from 'react'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


class NewProtocolForm extends Component {
  render () {
    return (
      <div>
        This is the new protocol form.
      </div>
    )
  }
}

class NewProtocolPage extends Component {
  render () {
    return (
      <div>
        <NavContainer />
        <h1>Add Protocol</h1>
        <NewProtocolForm />
      </div>
    )
  }
}

export { NewProtocolPage }
