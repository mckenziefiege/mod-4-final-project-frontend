import React, { Component } from 'react'
import ProfileSnippet from './ProfileSnippet.js'
import EventContainer from './EventContainer.js'
import EventForm from './EventForm.js'

class Userfeed extends Component {
  state = {
    eventForm: false
  }

  toggleEventForm = () => {
    this.setState({
      eventForm: !this.state.eventForm
    })
  }

  render() {
    return (
      <div>
      <ProfileSnippet user={this.props.user}/>
      <button onClick={this.toggleEventForm} className="ui button">Create New Event</button>
      {this.state.eventForm && <EventForm />}
      <EventContainer />
      </div>
    )
  }
}

export default Userfeed;
