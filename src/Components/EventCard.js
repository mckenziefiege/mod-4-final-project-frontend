import React, { Component } from 'react'

class EventCard extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
      {this.props.eventObj && this.props.eventObj.name }
      </div>
    )
  }
}

export default EventCard;
