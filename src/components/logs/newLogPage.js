import React, { Component } from 'react'
import axios from 'axios'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Grid, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap'
import { dateStringFixer } from '../../Utilities/functions'
var DatePicker = require("react-bootstrap-date-picker")
var moment = require('moment')

const apiUrl = 'https://basement-windows.herokuapp.com'
const userId = 1 // Eventually needs to be obtained from session token
const username = 'Baatzy'


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

function CalculateSessionDuration (protocols, protocolIdArr) {
  let sum = 0
  protocolIdArr = protocolIdArr.filter(id => {
    return id !== "0" || 0
  })
  // console.log(protocolIdArr)
  protocolIdArr.forEach(id => {
    protocols.forEach(protocol => {
      if (id === protocol.id) {
        sum += protocol.json_protocol.duration
      }
    })
  })

  return sum
}

class NewLogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newLogDate: moment().format(),
      logbook: {},
      protocols: [],
      // TO UPDATE WITH AUTH ***********************************
      newLogUserId: userId,
      newLogCompleted: null,
      newLogProtocolId1: 0,
      newLogProtocolId2: 0,
      newLogProtocolId3: 0,
      newLogProtocolId4: 0,
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

    console.log('logbook', logbook)
    console.log('protocols', protocols)
    this.setState({ logbook, protocols })
  }

  changeDate (datestamp) {
    const newLogDate = datestamp
    this.setState({ newLogDate })
  }
  changeProtocol1 (e) {
    const newLogProtocolId1 = e.target.value
    this.setState({ newLogProtocolId1 })
  }
  changeProtocol2 (e) {
    const newLogProtocolId2 = e.target.value
    this.setState({ newLogProtocolId2 })
  }
  changeProtocol3 (e) {
    const newLogProtocolId3 = e.target.value
    this.setState({ newLogProtocolId3 })
  }
  changeProtocol4 (e) {
    const newLogProtocolId4 = e.target.value
    this.setState({ newLogProtocolId4 })
  }

  async handleSubmit (e) {
    e.preventDefault()

    let protocolIdArr = [
      parseInt(this.state.newLogProtocolId1),
      parseInt(this.state.newLogProtocolId2),
      parseInt(this.state.newLogProtocolId3),
      parseInt(this.state.newLogProtocolId4),
    ]
    protocolIdArr = protocolIdArr.filter(id => {
      return id !== 0
    })

    const durationFinal = CalculateSessionDuration (this.state.protocols, protocolIdArr)

    const newLog = {
      date: this.state.newLogDate,
      duration: durationFinal,
      completed: this.state.newLogCompleted,
      protocols: protocolIdArr,
      warmupNotes: "",
      sessionNotes: "",
    }

    this.state.logbook.schedule.push(newLog)

    const updatedLogbook = {
      id: userId,
      user_id: userId,
      json_logbook: {
        schedule: this.state.logbook.schedule,
        mainFocus: this.state.logbook.mainFocus,
      }
    }

    console.log('updatedLogbook before PUT', updatedLogbook);

    try {
      let updated = await axios.put(`${apiUrl}/logbooks/${userId}`, updatedLogbook)
      console.log('updated', updated);
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <Grid>
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
              <option value="0">Select protocol</option>
              {SelectProtocolsList(this.state.protocols)}
            </FormControl>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Protocol 2</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
            value={this.newLogProtocols}
            onChange={this.changeProtocol2.bind(this)}>
              <option value="0">Select protocol</option>
              {SelectProtocolsList(this.state.protocols)}
            </FormControl>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Protocol 3</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
            value={this.newLogProtocols}
            onChange={this.changeProtocol3.bind(this)}>
              <option value="0">Select protocol</option>
              {SelectProtocolsList(this.state.protocols)}
            </FormControl>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Protocol 4</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
            value={this.newLogProtocols}
            onChange={this.changeProtocol4.bind(this)}>
              <option value="0">Select protocol</option>
              {SelectProtocolsList(this.state.protocols)}
            </FormControl>
          </FormGroup>

          <br />

          <Button onClick={this.handleSubmit} type="submit" bsStyle="success">
            Submit
          </Button>
        </form>
      </Grid>
    )
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
