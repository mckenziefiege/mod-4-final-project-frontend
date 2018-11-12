import React, { Component } from 'react'

class Login extends Component {

  render() {
    return (
      <div id='signin-container' className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <form className="ui large form">
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
              <div className="ui fluid large primary submit button">Login</div>
            </div>

            <div className="ui error message"></div>

          </form>

          <div className="ui message">
            New User? <a href="">Sign Up</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
