import React, { Component } from 'react'
import { Container, Divider, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class EventCard extends Component {

 render() {
   return (
     <div>
     <Container textAlign='left'></Container>
      <Container textAlign='center'></Container>
      <Container textAlign='right'></Container>
      <Container textAlign='justified'>

       <Divider />

     <Link to={`/events/${this.props.eventObj.id}`}><h1>{this.props.eventObj && this.props.eventObj.name }</h1></Link>
     <Icon name='calendar alternate outline' /><p>Date & Time: {this.props.eventObj && this.props.eventObj.date}</p>
     <p> Description: {this.props.eventObj && this.props.eventObj.description}</p>
     <p> Host: {this.props.eventObj && this.props.eventObj.host_id}</p>
     <p> Location: {this.props.eventObj && this.props.eventObj.location}</p>

     </Container>
     </div>
   )
 }
}

export default EventCard;
