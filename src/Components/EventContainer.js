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
    let eventCards = this.props.events.map(eventObj => {
      if (eventObj.name.toLowerCase().includes(this.props.searchTerm)){
        return <EventCard key={eventObj.id} eventObj={eventObj} handleEventCardClick={this.handleEventCardClick}/>
      }
    })
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
    return <EventPage deleteTask={this.props.deleteTask} createAssignment={this.props.createAssignment} user={this.props.user} eventObj={obj} createInvite={this.props.createInvite} createTask={this.props.createTask}/>
  }

  renderSearch = () => {
    return(
      <div id="search-div" className="ui search">
        <div className="ui icon input">
          <input onChange={this.props.handleSearch} className="prompt" type="text" name="search" placeholder="Search Events..."/>
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    )
  }

  checkRoute = () => {
    if (window.location.href.includes('/userfeed')){
      return this.renderSearch()
    }
  }

  render() {
    console.log('Event Containter this.props.events', this.props.events);
    return (
      <div className='ui segment'>

      {this.checkRoute()}
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
