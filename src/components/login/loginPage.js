import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


class NewUserForm extends Component {
  render () {
    return (
      <Link to='/dashboard'>
        <Button bsStyle="success" bsSize="large">
          Go to Dashboard
        </Button>
      </Link>
    )
  }
}

class LoginPage extends Component {
  render () {
    return (
      <div>
        <h1>This is the login page</h1>
        <NewUserForm />
      </div>
    )
  }
}

export { LoginPage }
