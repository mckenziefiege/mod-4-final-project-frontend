import React, { Component } from 'react'

class EventPage extends Component {
    state = {
      attendees: [],
      tasks: [],
      assignments: []
    }

    getAttendees () {
      fetch()
    }

    getTasks () {
      fetch()
    }

  render() {
    return (
      <div>
      <h1>{this.props.eventObj && this.props.eventObj.name}</h1>
      <p>
      {this.props.eventObj && this.props.eventObj.description}
      </p>
      <p>
      {this.props.eventObj && this.props.eventObj.location}
      </p>

      </div>
    )
  }
}

export default EventPage;
