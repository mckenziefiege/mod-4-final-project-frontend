import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class MenuBar extends Component {



  render() {
    return (
      <div className='ui menu'>
        <div className='item'>
          <button onClick={this.props.renderSignUp} className='ui primary button' role='button'>
            Sign Up
          </button>
        </div>
        <div className='item'>
          <button onClick={this.props.renderLogin} className='ui primary button' role='button'>
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default MenuBar;
