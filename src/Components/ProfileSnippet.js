import React, { Component } from 'react'

class ProfileSnippet extends Component {

  render() {
    const userFullName = `${this.props.user.first_name} ${this.props.user.last_name}`
    const userLocation = `${this.props.user.city}, ${this.props.user.state}`
    return(
    <div id='profile-snippet' className='ui card'>
      <img src={this.props.user.image} alt='profile-picture' className='ui image'/>
      <div className='content'>
        <div className='header'>{Object.keys(this.props.user).length ? userFullName : null}</div>
        <div className='description'>
          {Object.keys(this.props.user).length ? userLocation : null}
        </div>
      </div>
      <div className='extra content'>

      </div>
    </div>
    )
  }
}

export default ProfileSnippet;
