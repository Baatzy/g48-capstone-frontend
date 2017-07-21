import React, { Component } from 'react'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


class NewProtocolForm extends Component {
  render () {
    return (
      <div>
        This is the new protocol form.
      </div>
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

  render () {
    return (
      <div>
        <NavContainer navTitle={this.state.navTitle}/>
        <NewProtocolForm />
      </div>
    )
  }
}

export { NewProtocolPage }
