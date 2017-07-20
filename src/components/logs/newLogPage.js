import React, { Component } from 'react'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


class NewLogForm extends Component {
  render () {
    return (
      <div>
        This is the new log form.
      </div>
    )
  }
}

class NewLogPage extends Component {
  render () {
    return (
      <div>
        <NavContainer />
        <h1>Create log</h1>
        <NewLogForm />
      </div>
    )
  }
}

export { NewLogPage }
