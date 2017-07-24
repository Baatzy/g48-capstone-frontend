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

class NewUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      newUsername: '',
      newUserEmail: '',
      newUserEmail: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeUsername (e) {
    const newProtocolName = e.target.value
    this.setState({ newProtocolName })
  }
  changeEmail (e) {
    const newProtocolName = e.target.value
    this.setState({ newProtocolName })
  }
  changePassword (e) {
    const newProtocolName = e.target.value
    this.setState({ newProtocolName })
  }

  async handleSubmit (e) {
    e.preventDefault()




  }



  render () {
    return (
      <Grid>
      <Well>
        <Link to='/dashboard'>
          <Button bsStyle="success" bsSize="large">
          Go to Dashboard
          </Button>
        </Link>

        <form>
          <FieldGroup
            value={this.newUsername}
            onChange={this.changeUsername.bind(this)}
            id="formControlsText"
            type="text"
            label="Name"
            placeholder="Name this protocol"
          />

          <FieldGroup
            value={this.newUserEmail}
            onChange={this.changeEmail.bind(this)}
            id="formControlsText"
            type="text"
            label="Name"
            placeholder="Name this protocol"
          />

          <FieldGroup
            value={this.newUserEmail}
            onChange={this.changePassword.bind(this)}
            id="formControlsText"
            type="text"
            label="Name"
            placeholder="Name this protocol"
          />
        </form>
      </Well>
      </Grid>
    )
  }
}

class SignupPage extends Component {
  render () {
    return (
      <div>
        <h1>This is the signup/login page</h1>
        <NewUserForm />
      </div>
    )
  }
}

export { SignupPage }
