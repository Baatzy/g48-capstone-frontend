import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, FormGroup, ControlLabel, HelpBlock, FormControl, Well } from 'react-bootstrap'


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      newUsername: '',
      newUserEmail: '',
      newUserPassword: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeUsername (e) {
    const newUsername = e.target.value
    this.setState({ newUsername })
  }
  changeEmail (e) {
    const newUserEmail = e.target.value
    this.setState({ newUserEmail })
  }
  changePassword (e) {
    const newUserPassword = e.target.value
    this.setState({ newUserPassword })
  }

  async handleSubmit (e) {
    e.preventDefault()




  }

  render () {
    return (
      <Grid>

      <Link to='/dashboard'>
      <Button bsStyle="success" bsSize="large">
            Go to Dashboard
      </Button>
      </Link>

        <Well>
          <h3>Sign Up</h3>
          <p>newUsername: {this.state.newUsername}</p>
          <p>newUserEmail: {this.state.newUserEmail}</p>
          <p>newUserPassword: {this.state.newUserPassword}</p>
          <form>
            <FieldGroup
              value={this.newUsername}
              onChange={this.changeUsername.bind(this)}
              id="formControlsText"
              type="text"
              label="Name"
              placeholder="Choose username"
            />

            <FieldGroup
              value={this.newUserEmail}
              onChange={this.changeEmail.bind(this)}
              id="formControlsText"
              type="text"
              label="Name"
              placeholder="Add email"
            />

            <FieldGroup
              value={this.newUserEmail}
              onChange={this.changePassword.bind(this)}
              id="formControlsText"
              type="text"
              label="Name"
              placeholder="Choose password"
            />
          </form>
        </Well>
      </Grid>
    )
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      userEmail: '',
      userPassword: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeEmail (e) {
    const userEmail = e.target.value
    this.setState({ userEmail })
  }
  changePassword (e) {
    const userPassword = e.target.value
    this.setState({ userPassword })
  }

  async handleSubmit (e) {
    e.preventDefault()




  }

  render () {
    return (
      <Grid>
        <Well>
        <h3>Login</h3>
        <p>userEmail: {this.state.userEmail}</p>
        <p>userPassword: {this.state.userPassword}</p>
          <form>
            <FieldGroup
              value={this.userEmail}
              onChange={this.changeEmail.bind(this)}
              id="formControlsText"
              type="text"
              label="Email"
              placeholder="Enter email"
            />

            <FieldGroup
              value={this.userPassword}
              onChange={this.changePassword.bind(this)}
              id="formControlsText"
              type="text"
              label="Password"
              placeholder="Enter password"
            />
          </form>
        </Well>
      </Grid>
    )
  }
}


class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signup: true,
    }
  }

  render () {
    return (
      <div>
        <SignUpForm />
        <LoginForm />
      </div>
    )
  }
}

export { LoginPage }
