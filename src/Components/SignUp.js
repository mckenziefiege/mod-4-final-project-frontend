import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {

  showSignUpForm = () => {
    return (
      <div id='signup-container' className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
              Sign Up for an account
            </div>
          </h2>
      <form onSubmit={this.props.handleSignup} className="ui form" >
        <div className="ui stacked secondary segment">
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
        <input type="password" name="password" placeholder="Password"/>
      </div>
      <div className="field">
        <label>City</label>
        <input type="text" name="city" placeholder="City"/>
      </div>
      <div className="field">
        <label>State</label>
        <input type="text" name="state" placeholder="State"/>
      </div>
      <div className="field">
        <label>Image URL</label>
        <input type="text" name="image" placeholder="http://YourImage.jpeg"/>
      </div>
      <button className="ui primary button" type="submit">Submit</button>
      </div>
    </form>
  </div>
</div>
    )
  }

  render() {
    return (
      <div>
      {localStorage.getItem('token') ? <Redirect to='/userfeed' /> : this.showSignUpForm() }
      </div>
    )
  }
}

export default SignUp;
