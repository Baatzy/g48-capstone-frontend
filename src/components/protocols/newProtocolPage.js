import React, { Component } from 'react'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Grid, Button, FormGroup, ControlLabel, HelpBlock, FormControl, Checkbox, Radio } from 'react-bootstrap'


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

const formInstance = (
  <Grid>
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Name"
      placeholder="Name this protocol"
    />

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Muscle Group</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Energy System</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FieldGroup
    id="formControlsText"
    type="number"
    label="Duration"
    placeholder="Enter duration in minutes"
    />

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </FormGroup>

    <Button type="submit">
      Submit
    </Button>
  </form>
  </Grid>
)


class NewProtocolPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navTitle: 'Add Protocol',
    }
  }

  render () {
    return (
      <div>
        <NavContainer navTitle={this.state.navTitle}/>
        <h3>Create Protocol</h3>
        {formInstance}
      </div>
    )
  }
}

export { NewProtocolPage }
