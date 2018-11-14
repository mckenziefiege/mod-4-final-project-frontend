import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {

  showLoginForm= () => {
    return (
      <div className="column">
        <h2 className="ui image header">
          <div className="content" id="loginheading">
            Log-in to your account
          </div>
        </h2>
        <form onSubmit={this.props.handleLogin} className="ui large form" id="loginform">
          <div className="ui stacked secondary segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="username" placeholder="Username"/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password"/>
              </div>
            </div>
            <button className="ui fluid large primary submit button">Login</button>
          </div>
          <div className="ui error message"></div>
        </form>
        <div className="ui message" id="loginform">
          New User? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div id='signin-container' className="ui middle aligned center aligned grid">
        {localStorage.getItem('token') ? <Redirect to='/userfeed' /> : this.showLoginForm() }
      </div>
    )
  }
}


export default Login;
