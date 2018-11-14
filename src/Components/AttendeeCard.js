import React, { Component } from 'react'

class AttendeeCard extends Component {

  render() {
    return (
      <div>
        <p>{this.props.attendeeObj.first_name}</p>
      </div>
    )
  }
}

export default AttendeeCard;
