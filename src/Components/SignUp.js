import React, { Component } from 'react'

class SignUp extends Component {

  render() {
    return (
      <div id='signup-container' className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
              Sign Up for an account
            </div>
          </h2>
      <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name"/>
      </div>
      <div className="field">
        <label>Last Name</label>
        <input type="text" name="last-name" placeholder="Last Name"/>
      </div>
      <div className="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username"/>
      </div>
      <div className="field">
        <label>Password</label>
        <input type="text" name="password" placeholder="Password"/>
      </div>
      <div className="field">
        <label>City</label>
        <input type="text" name="city" placeholder="City"/>
      </div>
      <div className="field">
        <label>State</label>
        <input type="text" name="state" placeholder="State"/>
      </div>
      <button className="ui primary button" type="submit">Submit</button>
      </form>
      </div>
      </div>
    )
  }
}

export default SignUp;
