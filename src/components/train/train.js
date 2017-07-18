import React, { Component } from 'react'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


class TrainPage extends Component {
  render () {
    return (
      <div>
        <NavContainer />
        <h1>Train</h1>
        This is the training page
      </div>
    )
  }
}

export { TrainPage }
