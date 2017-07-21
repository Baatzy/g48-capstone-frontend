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
  constructor (props) {
    super(props)
    this.state = {
      navTitle: 'Add Log',
    }
  }

  render () {
    return (
      <div>
        <NavContainer navTitle={this.state.navTitle}/>
        <NewLogForm />
      </div>
    )
  }
}

export { NewLogPage }
