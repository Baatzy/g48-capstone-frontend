import React, { Component } from 'react'
import axios from 'axios'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Grid, Button, FormGroup, ControlLabel, HelpBlock, FormControl, Checkbox, Radio } from 'react-bootstrap'
const apiUrl = 'https://basement-windows.herokuapp.com'
const userId = 1 // Eventually needs to be obtained from session token


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

class NewProtocolForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProtocolName: '',
      newProtocolMuscle: 'Fingers',
      newProtocolSystem: 'Strength',
      newProtocolDuration: '',
      newProtocolDescription: '',
    }
  }

  changeName (e) {
    const newProtocolName = e.target.value
    this.setState({ newProtocolName })
  }
  changeMuscle (e) {
    const newProtocolMuscle = e.target.value
    this.setState({ newProtocolMuscle })
  }
  changeSystem (e) {
    const newProtocolSystem = e.target.value
    this.setState({ newProtocolSystem })
  }
  changeDuration (e) {
    const newProtocolDuration = e.target.value
    this.setState({ newProtocolDuration })
  }
  changeDescription (e) {
    const newProtocolDescription = e.target.value
    this.setState({ newProtocolDescription })
  }

  postProtocl () {
    console.log('Hit post func!')
    this.setState({
      newProtocolName: '',
      newProtocolMuscle: '',
      newProtocolSystem: '',
      newProtocolDuration: '',
      newProtocolDescription: '',
    })
  }

  render () {
    return (
      <Grid>
      <div>protocolInputName: {this.state.newProtocolName}</div>
      <div>protocolInputMuscle: {this.state.newProtocolMuscle}</div>
      <div>protocolInputSystem: {this.state.newProtocolSystem}</div>
      <div>protocolInputDuration: {this.state.newProtocolDuration}</div>
      <div>protocolInputDescription: {this.state.newProtocolDescription}</div>
        <form>
          <FieldGroup
            value={this.newProtocolName}
            onChange={this.changeName.bind(this)}
            id="formControlsText"
            type="text"
            label="Name"
            placeholder="Name this protocol"
          />

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Muscle Group</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
            value={this.newProtocolMuscle}
            onChange={this.changeMuscle.bind(this)}>
              <option value="Fingers">Fingers</option>
              <option value="Wrists">Wrists</option>
              <option value="Biceps">Biceps</option>
              <option value="Triceps">Triceps</option>
              <option value="Elbows">Elbows</option>
              <option value="Chest">Chest</option>
              <option value="Shoulders">Shoulders</option>
              <option value="Core">Core</option>
              <option value="Lower Back">Lower back</option>
              <option value="Legs">Legs</option>
              <option value="Ankles">Ankles</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Energy System</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
            value={this.newProtocolSystem}
            onChange={this.changeSystem.bind(this)}>
              <option value="Strength">Strength</option>
              <option value="Power">Power</option>
              <option value="Strength Endurance">Strength Endurance</option>
              <option value="Endurance">Endurance</option>
              <option value="Self Care">Self Care</option>
            </FormControl>
          </FormGroup>

          <FieldGroup
            value={this.newProtocolDuration}
            onChange={this.changeDuration.bind(this)}
            id="formControlsText"
            type="number"
            label="Duration"
            placeholder="Enter duration in minutes"
          />

          <FormGroup controlId="formControlsTextarea"
          value={this.newProtocolDescription}
          onChange={this.changeDescription.bind(this)}>
            <ControlLabel>Description</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Explain this protocol" />
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
  }
}


class NewProtocolPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navTitle: 'Add Protocol',

    }
  }

  async postProtocol () {
    let posted = await axios.post(`${apiUrl}/protocols`)

    let protocols = await axios.get(`${apiUrl}/protocols`)
    protocols = protocols.data

    this.setState({ protocols })
  }

  render () {
    return (
      <div>
        <NavContainer navTitle={this.state.navTitle}/>
        <h3>Create Protocol</h3>
        <NewProtocolForm />
      </div>
    )
  }
}

export { NewProtocolPage }
