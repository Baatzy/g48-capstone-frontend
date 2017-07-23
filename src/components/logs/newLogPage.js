import React, { Component } from 'react'
import axios from 'axios'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Grid, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap'
import { dateStringFixer } from '../../Utilities/functions'
const apiUrl = 'https://basement-windows.herokuapp.com'
// const apiUrl = 'http://localhost:4000'
const userId = 1 // Eventually needs to be obtained from session token
const username = 'Baatzy'
var DatePicker = require("react-bootstrap-date-picker")


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

function SelectProtocolsList (protocolsArr) {
  return protocolsArr.map(protocol =>
    <option value={protocol.id}>{protocol.json_protocol.name}</option>
  )
}

class NewLogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newLogDate: new Date().toISOString(),
      logbook: {},
      protocols: [],
      // TO UPDATE WITH AUTH ***********************************
      newLogUserId: userId,
      newLogDuration: 0,
      newLogCompleted: 'null',
      newLogProtocols: [],
      newLogProtocol1: 0,
      newLogProtocol2: 0,
      newLogProtocol3: 0,
      newLogProtocol4: 0,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount () {
    let protocols = await axios.get(`${apiUrl}/protocols`)
    protocols = protocols.data
    let logbooks = await axios.get(`${apiUrl}/logbooks`)
    logbooks = logbooks.data
    let logbook = logbooks.filter(el => {
      return el['user_id'] === userId
    })
    logbook = logbook[0]['json_logbook']

    // console.log('logbook', logbook)
    console.log('protocols', protocols)
    this.setState({ logbook, protocols })
  }

  changeDate (e) {
    const newLogDate = e.target.value
    this.setState({ newLogDate })
  }
  changeProtocol1 (e) {
    const newLogProtocols = e.target.value
    this.setState({ newLogProtocols })
  }
  changeProtocol2 (e) {
    const newLogProtocols = e.target.value
    this.setState({ newLogProtocols })
  }
  changeProtocol3 (e) {
    const newLogProtocols = e.target.value
    this.setState({ newLogProtocols })
  }
  changeProtocol4 (e) {
    const newLogProtocols = e.target.value
    this.setState({ newLogProtocols })
  }
  changeWarmupNotes (e) {
    const newLogWarmupNotes = e.target.value
    this.setState({ newLogWarmupNotes })
  }
  newLogSessionNotes (e) {
    const newLogSessionNotes = e.target.value
    this.setState({ newLogSessionNotes })
  }
  // changeDescription (e) {
  //   const newProtocolDescription = e.target.value
  //   this.setState({ newProtocolDescription })
  // }

  async handleSubmit (e) {
    e.preventDefault()

    const json_protocol = {
      name: this.state.newProtocolName,
      category: this.state.newProtocolSystem,
      duration: this.state.newProtocolDuration,
      description: this.state.newProtocolDescription,
      muscleGroup: this.state.newProtocolMuscle,
    }
    const newProtocol = {
      author_user_id: userId,
      author_username: username,
      json_protocol,
    }

    try {
      let posted = await axios.post(`${apiUrl}/protocols`, newProtocol)
    } catch (err) {
      console.error(err)
    }

    this.setState({
      newProtocolName: '',
      newProtocolMuscle: 'Fingers',
      newProtocolSystem: 'Strength',
      newProtocolDuration: '',
      newProtocolDescription: '',
    })
  }

  render () {
    return (
      <Grid>
        <p>Raw date: {this.state.newLogDate}</p>
        <p>Fixed date: {dateStringFixer(new Date().toISOString())}</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <form>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Date</ControlLabel>
            <DatePicker value={this.state.newLogDate} onChange={this.changeDate.bind(this)} />
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Protocol 1</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
            value={this.newLogProtocols}
            onChange={this.changeProtocol1.bind(this)}>
              {SelectProtocolsList(this.state.protocols)}
            </FormControl>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Protocol 2</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
            value={this.newLogProtocols}
            onChange={this.changeProtocol2.bind(this)}>
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
            <ControlLabel>Protocol 3</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
            value={this.newLogProtocols}
            onChange={this.changeProtocol3.bind(this)}>
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
            <ControlLabel>Protocol 4</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
            value={this.newLogProtocols}
            onChange={this.changeProtocol4.bind(this)}>
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

          <br />

          <FormGroup>
            <ControlLabel>Approximate session duration w/o warmup:</ControlLabel>
            <FormControl.Static>
              ADD CALCULATION HERE
            </FormControl.Static>
          </FormGroup>

          <Button onClick={this.handleSubmit} type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    )
  }
}

class EXTRA extends Component {
  async postProtocol () {
    let posted = await axios.post(`${apiUrl}/protocols`)

    let protocols = await axios.get(`${apiUrl}/protocols`)
    protocols = protocols.data

    this.setState({ protocols })
  }
}

class NewLogPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navTitle: 'My Logbook',
    }
  }

  render () {
    return (
      <div>
        <NavContainer navTitle={this.state.navTitle}/>
        <h3>Add Log Entry</h3>
        <NewLogForm />
      </div>
    )
  }
}

export { NewLogPage }
