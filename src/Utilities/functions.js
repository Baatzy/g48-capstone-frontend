import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Panel, Grid, Col } from 'react-bootstrap'


function dateStringFixer (dateStr) {
  if (!dateStr) return '...not sure actually.'

  let month = ''
  let day = ''
  let year = ''

  year = dateStr.slice(0, 4)
  month = dateStr.slice(5, 7)
  day = dateStr.slice(8, 10)

  if (month[0] === '0') month = month[1]
  if (day[0] === '0') day = day[1]

  return month + '-' + day + '-' + year
}

function logCardStyle (bool) {
  if (bool) {
    return "success"
  } else if (bool === false) {
    return "danger"
  } else if (bool === null) {
    return "warning"
  }
}

function protocolLister (protocolIdArr, protocols) {

}


function displayProtocolCards (protocolsArr, usernamesArr) {
  if (!protocolsArr) {
    return (
      <div>
        <h2>Loading 😐💦</h2>
      </div>
    )
  }

  return protocolsArr.map(protocol =>
    <div key={protocol.id}>
      <Col xs={12} md={12}>
        <div>
          <Panel header={protocol['json_protocol'].name}>
            <p>Target: {protocol['json_protocol'].muscleGroup}</p>
            <p>Category: {protocol['json_protocol'].category}</p>
            <p>{protocol['json_protocol'].description}</p>
          </Panel>
        </div>
      </Col>
    </div>
  )
}

function displayLogCards (logsArr, protocols) {
  if (!logsArr || !protocols) {
    return (
      <div>
        <h2>Loading 😐💦</h2>
      </div>
    )
  }

  return logsArr.map((log, index) =>
    <div key={index}>
      <Col xs={12} md={12}>
        <Panel header={dateStringFixer(log.date)} bsStyle={logCardStyle(log.completed)}>
          <p>Protocols: </p>
          <p>Warmup: {log.warmupNotes}</p>
          <p>Session: {log.sessionNotes}</p>
        </Panel>
      </Col>
    </div>
  )
}

export { dateStringFixer, displayProtocolCards, displayLogCards }
