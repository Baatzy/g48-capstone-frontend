import React, { Component } from 'react'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { NewProtocolForm } from '../../Utilities/forms'


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

      </div>
    )
  }
}

export { NewProtocolPage }
