import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, FormGroup, ControlLabel, HelpBlock, FormControl, Well } from 'react-bootstrap'
import { centerWellSignup, centerWellLogin, parentElement, backgroundImage } from './loginPage-style'
import Background from '../../images/crimp-blur.jpg'


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
    const logoText = {
      paddingTop: "120px",
      paddingBottom: "50px",
      color: 'white',
      marginTop: "0px",
      marginBottom: "0px",
      fontSize: "50px",
      textShadow: "2px 2px 10px rgba(0,0,0,1)",
    }

    const formTitle = {
      color: 'white',
      marginTop: "0px",
    }

    const ghost = {
      backgroundColor: "rgba(0,0,0,0.65)",
    }

    const submitButton = {
      marginBottom: "10px",
      paddingLeft: "20px",
      paddingRight: "20px",
    }

    if (this.props.showLogin) {
      return (
        <div>
          <h1 style={logoText}>BOARDROOM</h1>
          <Grid>
            <Well style={ghost}>
              <div>
                <h3 style={formTitle}>Login</h3>
                <form className="login-form">
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

                <Link to='/dashboard'>
                  <Button bsStyle="info" style={submitButton}>
                      Login
                  </Button>
                </Link>

                <br />
                <a onClick={this.props.handleBoolean}>
                  Click here to create an account.
                </a>
              </div>
            </Well>
          </Grid>
        </div>
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
    const logoText = {
      paddingTop: "120px",
      paddingBottom: "50px",
      color: 'white',
      marginTop: "0px",
      marginBottom: "0px",
      fontSize: "50px",
      textShadow: "2px 2px 10px rgba(0,0,0,1)",
    }

    const formTitle = {
      color: 'white',
      marginTop: "0px",
    }

    const ghost = {
      backgroundColor: "rgba(0,0,0,0.65)",
    }

    const submitButton = {
      marginBottom: "10px",
      paddingLeft: "20px",
      paddingRight: "20px",
    }

    if (!this.props.showLogin) {
      return (
        <div>
          <h1 style={logoText}>BOARDROOM</h1>
          <Grid>
            <Well style={ghost}>
              <h3 style={formTitle}>Sign Up</h3>
              <form className="login-form">
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
                  placeholder="Enter email"
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

              <Link to='/dashboard'>
                <Button bsStyle="info" style={submitButton}>
                    Sign up
                </Button>
              </Link>

              <br />
              <a onClick={this.props.handleBoolean}>
                I already have an account.
              </a>
            </Well>
          </Grid>
        </div>
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
    const loginBackground = {
      backgroundImage: "url(" + Background + ")",
      backgroundSize: 'cover',
      height: '100vh'
    }

    return (
      <div style={loginBackground}>
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
