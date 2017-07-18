import React, { Component } from 'react'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'


class CalendarPage extends Component {
  render () {
    return (
      <div>
        <NavContainer />
        <h1>Calendar</h1>
        This is the calendar page
      </div>
    )
  }
}

export { CalendarPage }
