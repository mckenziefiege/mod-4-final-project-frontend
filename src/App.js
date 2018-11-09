import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home.js'
import SignUp from './Components/SignUp.js'
import UserFeed from './Components/UserFeed.js'
import EventContainer from './Components/EventContainer.js'

class App extends Component {
  state = {
    events: []
  }

  componentDidMount () {
    fetch('http://localhost:3000/events')
      .then(resp => resp.json())
      .then(data => this.setState({
        events: data
      }))
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/userfeed" component={UserFeed}/>
          <Route path="/events" component={EventContainer}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>

    );
  }
}

export default App;
