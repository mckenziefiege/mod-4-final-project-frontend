import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home.js'
import SignUp from './Components/SignUp.js'
import UserFeed from './Components/UserFeed.js'
import NavBar from './Components/NavBar.js'
import EventContainer from './Components/EventContainer.js'

class App extends Component {
  state = {
    events: [],
    auth: { currentUser: {} },
    page: 0
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.setState({ auth: { currentUser: {} } })
    this.props.history.push("/")
  }

  handleLogin = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: e.target.username.value,
          password: e.target.password.value
        }
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        localStorage.setItem("token", resp.jwt)
        this.setState({
          auth: {currentUser: resp.user}
        })
      })
  }

  handleSignup = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ user: {
        first_name: e.target['first-name'].value,
        last_name: e.target['last-name'].value,
        city: e.target.city.value,
        state: e.target.state.value,
        username: e.target.username.value,
        password: e.target.password.value}
      })
    }
    fetch('http://localhost:3000/users', options)
      .then(resp => resp.json())
      .then(resp => {
        localStorage.setItem("token", resp.jwt)
        this.setState({
          auth: {currentUser: resp.user}
        })
      })
  }


  renderUserFeed = () => {
    return <UserFeed events={this.state.events} user={this.state.auth.currentUser} />
  }

  renderSignup = () => {
    return <SignUp handleSignup={this.handleSignup} />
  }

  renderLogin = () => {
    return <Login handleLogin={this.handleLogin} />
  }

  renderEventContainer = () => {
      return <EventContainer events={this.state.events} user={this.state.auth.currentUser} />
  }

  getallEvents = () => {
    fetch('http://localhost:3000/events')
    .then(resp => resp.json())
    .then(events => this.setState({
      events
    }))
  }


  componentDidMount () {
    this.getallEvents()
    const token = localStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          auth: {currentUser: resp.user}
        })
      )
    }
  }

  render() {
    return (
      <div>
      <NavBar handleLogout={this.handleLogout}/>
        <Switch>
          <Route path="/login" render={this.renderLogin}/>
          <Route path="/signup" render={this.renderSignup}/>
          <Route path="/userfeed" render={this.renderUserFeed}/>
          <Route path="/events" render={this.renderEventContainer}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>

    );
  }
}

export default withRouter(App);
