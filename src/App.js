import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home.js'
import SignUp from './Components/SignUp.js'
import UserFeed from './Components/UserFeed.js'
import MenuBar from './Components/MenuBar.js'
import EventContainer from './Components/EventContainer.js'

class App extends Component {
  state = {
    events: [],
    user: {},
    page: 0
  }

  handleLogin = () => {
    fetch('http://localhost:3000/users/13')
      .then(resp => resp.json())
      .then(user => this.setState({
        user
      }))
  }


  renderUserFeed = () => {
    return <UserFeed user={this.state.user} />
  }

  componentDidMount () {
    fetch('http://localhost:3000/events')
      .then(resp => resp.json())
      .then(events => this.setState({
        events
      }))
    this.handleLogin()
  }

  render() {

    return (
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/userfeed" component={this.renderUserFeed}/>
          <Route path="/events" component={EventContainer}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>

    );
  }
}

export default App;
