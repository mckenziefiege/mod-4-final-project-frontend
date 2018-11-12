import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import EventCard from './EventCard.js'
import EventPage from './EventPage.js'

class EventContainer extends Component {
  state = {
    events: []
  }

  componentDidMount () {
    this.getEvents()
  }

  handleEventCardClick = (e) => {
    console.log('Event Id:', e.target.id);
    return <Link to={`/events/${e.target.id}`}></Link>
  }

  getEvents = () => {
    fetch('http://localhost:3000/events')
      .then(resp => resp.json())
      .then(data => this.setState({
        events: data
      }))
  }

  getAllEventCards = () => {
    const eventCards = this.state.events.map(eventObj => <EventCard key={eventObj.id} eventObj={eventObj} handleEventCardClick={this.handleEventCardClick}/>)
    return(
      <div>
      <h2>Events:</h2>
      {eventCards}
      </div>
    )
  }

  getEventPage = (props) => {
    const id = parseInt(props.match.params.id)
    console.log(this.state.events)
    let obj = this.state.events.find(eventObj => eventObj.id === id)
    return <EventPage eventObj={obj} />
  }




  render() {
    console.log(this.state.events)
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
