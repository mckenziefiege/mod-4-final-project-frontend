import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
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

  createInvite = (e, eventObj) => {
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        user_id: this.state.auth.currentUser.id,
        event_id: eventObj.id,
        status: true
      })
    }
    fetch('http://localhost:3000/invites', options)
      .then(resp => resp.json())
      .then(events => this.setState({
        events
      }))
  }

  createEvent = (e) => {
    e.preventDefault()

    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        name: e.target.name.value,
        description: e.target.description.value,
        location: `${e.target.address.value}, ${e.target.city.value}, ${e.target.state.value} ${e.target.zipcode.value}`,
        host_id: this.state.auth.currentUser.id,
        date: new Date(e.target.year.value, e.target.month.value, e.target.day.value, e.target.hour.value, e.target.minute.value, 0)
      })
    }
    fetch('http://localhost:3000/events', options)
      .then(resp => resp.json())
      .then(resp => this.setState({
        events: resp
      }))
  }

  createTask = (e) => {
    e.preventDefault()
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        name: e.target.taskname.value,
        invite_id: e.target.inviteid.value
      })
    }
    fetch('http://localhost:3000/tasks', options)
      .then(resp => resp.json())
      .then(events => this.setState({
        events
      }))
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
    return <UserFeed events={this.state.events} user={this.state.auth.currentUser} createEvent={this.createEvent}/>
  }

  renderSignup = () => {
    return <SignUp handleSignup={this.handleSignup} />
  }

  renderLogin = () => {
    return <Login handleLogin={this.handleLogin} />
  }

  renderEventContainer = () => {
      return <EventContainer events={this.state.events} user={this.state.auth.currentUser} createInvite={this.createInvite} createTask={this.createTask}/>
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
    console.log('App state', this.state);
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
