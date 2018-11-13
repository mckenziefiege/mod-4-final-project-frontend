import React, { Component } from 'react'
import TaskList from './TaskList.js'
import AttendeeList from './AttendeeList.js'
import { withRouter } from 'react-router-dom'

class EventPage extends Component {

  getUserInvite = () => {
    return (this.props.eventObj && this.props.eventObj.invites.filter(invite => invite.user_id === this.props.user.id)[0])
  }

  render() {
    console.log('EventPage props', this.props)
    let userIds = (this.props.eventObj ? this.props.eventObj.users.map(user => user.id) : [])
    let check = (this.props.eventObj ? (userIds.includes(this.props.user.id)) : false)
    return (
      <div>
      <h1>{this.props.eventObj && this.props.eventObj.name}</h1>
      {!check && localStorage.getItem('token') ? <button onClick={(e) => this.props.createInvite(e, this.props.eventObj)} className="ui button">Join Event</button> : null}
      <p>
      {this.props.eventObj && this.props.eventObj.description}
      </p>
      <p>
      {this.props.eventObj && this.props.eventObj.location}
      </p>
      <TaskList user={this.props.user} inviteObj={this.getUserInvite()} eventobj={this.props.eventObj} isAttending={check} createTask={this.props.createTask}/>
      <AttendeeList attendees={this.props.eventObj && this.props.eventObj.users}/>
      </div>
    )
  }
}

export default withRouter(EventPage);
