import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import EventCard from './EventCard.js'
import EventPage from './EventPage.js'

class EventContainer extends Component {

  handleEventCardClick = (e) => {
    console.log('Event Id:', e.target.id);
    return <Link to={`/events/${e.target.id}`}></Link>
  }


  getAllEventCards = () => {
    const eventCards = this.props.events.map(eventObj => <EventCard key={eventObj.id} eventObj={eventObj} handleEventCardClick={this.handleEventCardClick}/>)
    return(
      <div>
      <h2>Events:</h2>
      {eventCards}
      </div>
    )
  }

  getEventPage = (props) => {
    const id = parseInt(props.match.params.id)
    let obj = this.props.events.find(eventObj => eventObj.id === id)
    return <EventPage user={this.props.user} eventObj={obj} />
  }

  render() {
    return (
      <div className='ui segment'>
      <Switch>
        <Route path="/events/:id" render={this.getEventPage}/>
        <Route path="/events" render={this.getAllEventCards}/>
        <Route path="/userfeed" render={this.getAllEventCards}/>
      </Switch>
      </div>
    )
  }
}

export default EventContainer;
