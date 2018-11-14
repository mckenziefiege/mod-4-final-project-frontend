import React, { Component } from 'react'
import TaskList from './TaskList.js'
import AttendeeList from './AttendeeList.js'
import { withRouter } from 'react-router-dom'

class EventPage extends Component {

  getUserInvite = () => {
    return (this.props.eventObj && this.props.eventObj.invites.filter(invite => invite.user_id === this.props.user.id)[0])
  }

  render() {
    let userIds = (this.props.eventObj ? this.props.eventObj.users.map(user => user.id) : [])
    let check = (this.props.eventObj ? (userIds.includes(this.props.user.id)) : false)
    return (

      <div className="ui grid">
        <div className="six wide column">
          <img src={this.props.eventObj && this.props.eventObj.image} alt="event-image" className='ui image'/>
          {!check && localStorage.getItem('token') ? <button onClick={(e) => this.props.createInvite(e, this.props.eventObj)} className="ui button">Join Event</button> : null}
          <h1>{this.props.eventObj && this.props.eventObj.name}</h1>
          <p>
            {this.props.eventObj && this.props.eventObj.description}
          </p>
          <p>
            {this.props.eventObj && this.props.eventObj.location}
          </p>
          <AttendeeList attendees={this.props.eventObj && this.props.eventObj.users}/>
        </div>

      <div className="eight wide column">
        <TaskList deleteTask={this.props.deleteTask} createAssignment={this.props.createAssignment} user={this.props.user} inviteObj={this.getUserInvite()} eventobj={this.props.eventObj} isAttending={check} createTask={this.props.createTask}/>
      </div>
      </div>
    )
  }
}

export default withRouter(EventPage);
