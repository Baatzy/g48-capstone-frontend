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
    if (this.props.showLogin) {
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

            <Button bsStyle="info">
              Sign in
            </Button>
            <br />
            <a onClick={this.props.handleBoolean}>
              Click here to create an account.
            </a>
          </Well>
        </Grid>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
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
    if (!this.props.showLogin) {
      return (
        <Grid>
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
                label="Username"
                placeholder="Choose username"
              />

              <FieldGroup
                value={this.newUserEmail}
                onChange={this.changeEmail.bind(this)}
                id="formControlsText"
                type="text"
                label="Email"
                placeholder="Add email"
              />

              <FieldGroup
                value={this.newUserEmail}
                onChange={this.changePassword.bind(this)}
                id="formControlsText"
                type="text"
                label="Password"
                placeholder="Choose password"
              />
            </form>

            <Button bsStyle="info">
              Sign up
            </Button>
            <br />
            <a onClick={this.props.handleBoolean}>
              I already have an account.
            </a>
          </Well>
        </Grid>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: true,
    }

    this.handleBoolean = this.handleBoolean.bind(this)
  }

  handleBoolean () {
    if (this.state.showLogin) {
      this.setState({ showLogin: false })
    } else {
      this.setState({ showLogin: true })
    }
  }

  render () {
    return (
      <div>
        <Link to='/dashboard'>
          <Button bsStyle="success" bsSize="large">
              Go to Dashboard
          </Button>
        </Link>

        <LoginForm
          showLogin={this.state.showLogin}
          handleBoolean={this.handleBoolean}
        />
        <SignUpForm
          showLogin={this.state.showLogin}
          handleBoolean={this.handleBoolean}
        />
      </div>
    )
  }
}

export { LoginPage }
