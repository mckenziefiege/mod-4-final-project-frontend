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
    console.log('USER PROPS', this.props);
    return (
      <div className="ui grid">
      <div className="four wide column"><ProfileSnippet user={this.props.user}/>
      <button id="create-event-button" onClick={this.toggleEventForm} className="ui primary button">Create New Event</button></div>
      <div className="eight wide column">
        {this.state.eventForm && <EventForm createEvent={this.props.createEvent}/>}
      <EventContainer searchTerm={this.props.searchTerm} handleSearch={this.props.handleSearch} events={this.props.events}/></div>
      </div>
    )
  }
}

export default Userfeed;
