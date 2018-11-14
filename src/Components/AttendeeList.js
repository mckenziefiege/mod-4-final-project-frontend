import React, { Component } from 'react'
import AttendeeCard from './AttendeeCard.js'

class AttendeeList extends Component {

  getAttendees = () => {
    if (this.props.attendees) {
      return this.props.attendees.map(attendee => <AttendeeCard attendeeObj={attendee} key={attendee.id}/>)
    }
  }

  render() {

    return (
      <div>
      <h2>Attendee List:</h2>
        {this.getAttendees()}
      </div>
    )
  }
}

export default AttendeeList;
