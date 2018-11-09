import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import EventCard from './EventCard.js'

class EventContainer extends Component {
  state = {
    events: []
  }

  componentDidMount () {
    fetch('http://localhost:3000/events')
      .then(resp => resp.json())
      .then(data => this.setState({
        events: data
      }))
  }

  getAllEventCards = () => {
    return this.state.events.map(eventObj => <EventCard key={eventObj.id} eventObj={eventObj}/>)
  }

  getEventCard = (props) => {
    const id = parseInt(props.match.params.id)
    console.log(this.state.events)
    let obj = this.state.events.find(eventObj => eventObj.id === id)
    return <EventCard eventObj={obj} />
  }

  render() {
    console.log(this.state.events)
    return (
      <div>
      <Switch>
        <Route path="/events/:id" render={this.getEventCard}/>
        <Route path="/events" render={this.getAllEventCards}/>
      </Switch>
      </div>
    )
  }
}

export default EventContainer;
