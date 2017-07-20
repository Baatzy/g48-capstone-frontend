import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Panel, Grid, Col } from 'react-bootstrap'


function dateStringFixer (str) {
  if (!str) return '...not sure actually.'

  let month = ''
  let day = ''
  let year = ''

  year = str.slice(0, 4)
  month = str.slice(5, 7)
  day = str.slice(8, 10)

  if (month[0] === '0') month = month[1]
  if (day[0] === '0') day = day[1]

  return month + '/' + day + '/' + year
}


function displayProtocolCards (arr) {
  if (!arr) {
    return (
      <div>
        <h2>Loading 😐💦</h2>
      </div>
    )
  }

  return arr.map(protocol =>
    <div key={protocol.id}>
      <Col xs={12} md={12}>
        <div>
          <Link to='/protocols'>
            <Panel header={protocol['json_protocol'].name}>
              <p>{protocol['json_protocol'].muscleGroup}</p>
              <p>System: {protocol['json_protocol'].category}</p>
            </Panel>
          </Link>
        </div>
      </Col>
    </div>
  )
}

function displayLogCards (arr) {
  if (!arr) {
    return (
      <div>
        <h2>Loading 😐💦</h2>
      </div>
    )
  }

  return arr.map(log =>
    <div key={log.id}>
      <Col xs={12} md={12}>
        <div>
          <Link to='/protocols'>
            <Panel header={displayProtocolCards(log.date)} bsStyle="success">
              <p>{log['json_protocol'].muscleGroup}</p>
              <p>System: {log['json_protocol'].category}</p>
            </Panel>
          </Link>
        </div>
      </Col>
    </div>
  )
}

export { dateStringFixer, displayProtocolCards, displayLogCards }
