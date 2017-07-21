import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Panel, Grid, Col, Glyphicon } from 'react-bootstrap'
import { HTMLLoading } from './htmlSnips'

// GENERAL USE // ***************************************************** //

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

// PROTOCOLS PAGE // ************************************************* //

function modifyProtocolButtons (authorId, userId, protocolId) {
  if (userId === authorId) {
    return (
      <div>
        <Button onClick={this.props.handleDelete(protocolId)}><Glyphicon glyph="trash" /></Button>
        <Button><Glyphicon glyph="edit" /></Button>
      </div>
    )
  } else {
    return <div></div>
  }

}

function displayProtocolCards (protocolsArr, userId) {
  if (!protocolsArr) {
    return HTMLLoading()
  }

  return protocolsArr.map(protocol =>
    <div key={protocol.id}>
      <Col xs={12} md={12}>
        <div>
          <Panel header={protocol['json_protocol'].name}>
            <p>Author: {protocol['author_username']}</p>
            <p>Target: {protocol['json_protocol'].muscleGroup}</p>
            <p>Category: {protocol['json_protocol'].category}</p>
            <p>{protocol['json_protocol'].description}</p>
            {modifyProtocolButtons(protocol['author_user_id'], userId, protocol.id)}
          </Panel>
        </div>
      </Col>
    </div>
  )
}

// LOGBOOK PAGE // ************************************************** //

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
  let protocolNameArr = []
  let protocolsStr = ''

  protocolIdArr.forEach(protocolId => {
    protocols.forEach(protocol => {
      if (protocol.id === protocolId) {
        protocolNameArr.push(protocol['json_protocol'].name)
      }
    })
  })

  protocolNameArr.forEach((protocolName, index) => {
    if (index === protocolNameArr.length-1) {
      protocolsStr = protocolsStr.concat(protocolName)
    } else {
      protocolsStr = protocolsStr.concat(protocolName + ', ')
    }
  })

  return protocolsStr
}

function displayLogCards (logsArr, protocols) {
  if (!logsArr || !protocols) {
    return HTMLLoading()
  }

  let protocolIdArr = logsArr.map(log => {
    return log.protocols
  })

  return logsArr.map((log, index) =>
    <div key={index}>
      <Col xs={12} md={12}>
        <Panel header={dateStringFixer(log.date)} bsStyle={logCardStyle(log.completed)}>
          <p>Protocols: {protocolLister(protocolIdArr[index], protocols)}</p>
          <p>Warmup: {log.warmupNotes}</p>
          <p>Session: {log.sessionNotes}</p>
        </Panel>
      </Col>
    </div>
  )
}

export { dateStringFixer, displayProtocolCards, displayLogCards }
