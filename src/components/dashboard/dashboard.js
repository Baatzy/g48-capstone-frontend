import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { NavContainer } from '../navbar/navbar'
import { Button } from 'react-bootstrap'
import { dateStringFixer } from '../../Utilities/utilities'
const apiUrl = 'https://basement-windows.herokuapp.com'
const userId = 1 // Eventually needs to be obtained from session token


class TrainNowButton extends Component {
  render () {
    return (
      <Link to='/train'>
        <Button bsStyle="danger" bsSize="large">
          Train Now 🔥
        </Button>
      </Link>
    )
  }
}

class ViewCalendarButton extends Component {
  render () {
    return (
      <Link to='/calendar'>
        <Button bsStyle="info" bsSize="large">
          Calendar 🐸
        </Button>
      </Link>
    )
  }
}

class ViewProtocolsButton extends Component {
  render () {
    return (
      <Link to='/protocols'>
        <Button bsStyle="warning" bsSize="large">
          Protocols 😎
        </Button>
      </Link>
    )
  }
}

class SnapshotContainer extends Component {


  render () {
    let log
    let logs = this.props.logbook.schedule

    if (!logs) {
      console.log('No data yet', logs);
      return (
        <div>
          <h3>Hmmm...something went wrong 😥</h3>
        </div>
      )
    } else {
      console.log('We got data', logs);
      log = logs[logs.length-1]

      // let protocols = await axios.get(`${apiUrl}/protocols`)
      // protocols = logbooks.data
      // console.log('Protocols', protocols);



      return (
        <div>
          <h4>Next training day on <span>{dateStringFixer(log.date)}</span></h4>
          <h4>Training protocols: HERE</h4>
        </div>
      )
    }

  }
}

class DashboardPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logbook: {}
    }
  }

  async componentDidMount () {
    let logbooks = await axios.get(`${apiUrl}/logbooks`)
    logbooks = logbooks.data
    let logbook = logbooks.filter(el => {
      return el['user_id'] === userId
    })
    logbook = logbook[0]['json_logbook']
    this.setState({ logbook })
  }

  render () {
    const logbook = this.state.logbook
    // console.log('Dash render', logbook);

    return (
      <div>
        <NavContainer />
        <h1>Dashboard</h1>
        <p>Mesocycle focus: {logbook.mainFocus}</p>
        <TrainNowButton />
        <ViewCalendarButton />
        <ViewProtocolsButton />
        <SnapshotContainer logbook={logbook} />
      </div>
    )
  }
}

export { DashboardPage }

// if (!logbook) {
//   return (
//     <div>
//       <h4>Next training day on <span>{dateStringFixer()}</span></h4>
//       <h4>Upcomming workouts and dashboard stats go here</h4>
//       <h4>Upcomming workouts and dashboard stats go here</h4>
//     </div>
//   )
// } else {
//   log = logbook.schedule.pop()
//   console.log(log);
//   return (
//     <div>
//       <h4>Next training day on <span>{dateStringFixer(log.date)}</span></h4>
//       <h4>Upcomming workouts and dashboard stats go here</h4>
//       <h4>Upcomming workouts and dashboard stats go here</h4>
//     </div>
//   )
// }
