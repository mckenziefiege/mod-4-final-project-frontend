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

     <p> Date: <Icon name='calendar alternate outline' />{this.props.eventObj && this.props.eventObj.formatted_date}</p>
     <p> Time: {this.props.eventObj && this.props.eventObj.time}</p>
     <p> Description: {this.props.eventObj && this.props.eventObj.description}</p>
     <p> Host: {this.props.eventObj && `${this.props.eventObj.host.first_name} ${this.props.eventObj.host.last_name}`}</p>
     <p> Location: {this.props.eventObj && this.props.eventObj.location}</p>

     </Container>
     </div>
   )
 }
}

export default EventCard;
