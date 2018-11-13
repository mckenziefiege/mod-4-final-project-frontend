import React, { Component } from 'react'

class ProfileSnippet extends Component {

  render() {
    const userFullName = `${this.props.user.first_name} ${this.props.user.last_name}`
    const userLocation = `${this.props.user.city}, ${this.props.user.state}`
    return(
    <div id='profile-snippet' className='ui card'>
      <img src='https://www.edgehill.ac.uk/health/files/2017/12/blank-profile.png' alt='blank-profile' className='ui image'/>
      <div className='content'>
        <div className='header'>{Object.keys(this.props.user).length ? userFullName : null}</div>
        <div className='description'>
          {Object.keys(this.props.user).length ? userLocation : null}
        </div>
      </div>
      <div className='extra content'>
        <a>
          <i aria-hidden='true' className='user icon' />
          16 Friends
        </a>
      </div>
    </div>
    )
  }
}

export default ProfileSnippet;
