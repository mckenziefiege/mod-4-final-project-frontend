import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  renderHomeButton = () => {
    return (
      <div className='item'>
        <Link to="/"><button className='ui primary button'>
          Home
        </button></Link>
      </div>
    )
  }

  renderLogOutButton = () => {
    return (
      <div className='item'>
        <button onClick={this.props.handleLogout} className='ui primary button'>
          Log Out
        </button>
      </div>
    )
  }

  renderLoginButton = () => {
    return (
      <div className='item'>
        <Link to="/login"><button onClick={this.props.renderLogin} className='ui primary button'>
          Login
        </button></Link>
      </div>
    )
  }

  renderSignUpButton = () => {
    return (
      <div className='item'>
        <Link to="/signup"><button onClick={this.props.renderSignUp} className='ui primary button'>
          Sign Up
        </button></Link>
      </div>
    )
  }


  render() {
    return (
      <div className='ui menu'>
        {this.renderHomeButton()}
        {localStorage.getItem('token') ? this.renderLogOutButton() : this.renderLoginButton()}
        {!localStorage.getItem('token') && this.renderSignUpButton()}
      </div>
    )
  }
}

export default NavBar;
