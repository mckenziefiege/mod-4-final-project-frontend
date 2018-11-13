import React, { Component } from 'react'
import TaskList from './TaskList.js'
import AttendeeList from './AttendeeList.js'

class EventPage extends Component {
  constructor(props){
    super(props)
    console.log("props", props)
    this.state ={
      currentEvent: props.eventObj
    }
  }

  render() {
    console.log(this.state)
    let check = (this.props.eventObj ? !(this.props.eventObj.users.includes(this.props.user)) : false)
    return (
      <div>
      <h1>{this.props.eventObj && this.props.eventObj.name}</h1>
      { check && <button className="ui button">Join Event</button>}
      <p>
      {this.props.eventObj && this.props.eventObj.description}
      </p>
      <p>
      {this.props.eventObj && this.props.eventObj.location}
      </p>
      <TaskList user={this.props.user} eventobj={this.props.eventObj} />
      <AttendeeList attendees={this.props.eventObj && this.props.eventObj.users}/>
      </div>
    )
  }
}

export default EventPage;
