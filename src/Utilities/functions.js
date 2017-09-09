import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Panel, Col, Glyphicon } from 'react-bootstrap'
import { HTMLLoading } from './htmlSnips'

// GENERAL USE // ***************************************************** //

function dateStringFixer (dateStr) {
  // dateStr will be passed in the format '2012-12-12...'

  // Client-side error if date string isn't available
  if (!dateStr) return '...not sure actually.'

  let month = ''
  let day = ''
  let year = ''

  // From dateStr, the month/day/year strings can be pulled out
  year = dateStr.slice(0, 4)
  month = dateStr.slice(5, 7)
  day = dateStr.slice(8, 10)

  // Handling for '0' at the start of month and day strings
  if (month[0] === '0') month = month[1]
  if (day[0] === '0') day = day[1]

  // Return the assembled date string
  return month + '-' + day + '-' + year
}

// PROTOCOLS PAGE // ************************************************* //

function modifyProtocolButtons (authorId, userId, protocolId) {

  // Authorization that only shows edit and delete buttons if userId matches protocol's authorId
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

// Function to set logbook card color via user log's completed/pending/missed status
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

  // Assembles string names of protocols in protocolNameArr
  // 0(n)2 solution is slow in theory, but unlikely that user will have many protocols to train in a given day
  protocolIdArr.forEach(protocolId => {
    protocols.forEach(protocol => {
      if (protocol.id === protocolId) {
        protocolNameArr.push(protocol['json_protocol'].name)
      }
    })
  })

  // Assembles a heading string of protocol names for the /logbook day overview 
  protocolNameArr.forEach((protocolName, index) => {
    // Adds a comma between protocol names if protocol name is not the last in the array
    if (index === protocolNameArr.length-1) {
      protocolsStr = protocolsStr.concat(protocolName)
    } else {
      protocolsStr = protocolsStr.concat(protocolName + ', ')
    }
  })

  return protocolsStr
}

// Renders all logbook entries for users (most recent at top) when they hit /logbook
function displayLogCards (logsArr, protocols) {

  // Clientside loading message data hasn't arrived
  if (!logsArr || !protocols) {
    return HTMLLoading()
  }

  let protocolIdArr = logsArr.map(log => {
    return log.protocols
  })

  // Map through logsArr, leverage protocols, and build HTML for each logbook entry panel 
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
