import React, { Component } from 'react'
import { NavContainer } from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


// class TrainNowButton extends Component {
//   render () {
//     return (
//       <div className="Dash-button">
//         <button>Train Now</button>
//       </div>
//     )
//   }
// }
//
// class ViewCalendarButton extends Component {
//   render () {
//     return (
//       <div className="Dash-button">
//         <button>View Calendar</button>
//       </div>
//     )
//   }
// }
//
// class ViewProtocolsButton extends Component {
//   render () {
//     return (
//       <div className="Dash-button">
//         <Link to='/protocols'><button>See Protocols</button></Link>
//       </div>
//     )
//   }
// }

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
