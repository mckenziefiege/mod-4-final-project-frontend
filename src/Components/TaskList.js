import React, { Component } from 'react'
import TaskCard from './TaskCard.js'
import TaskForm from './TaskForm.js'

class TaskList extends Component {

  state = {
    taskForm: false
  }

  getTasks = () => {
    if(this.props.eventobj) {
      return this.props.eventobj.tasks.map(task => <TaskCard taskObj={task} key={task.id} />)
    }
  }

  toggleTaskForm = () => {
    this.setState({
      taskForm: !this.state.taskForm
    })
  }

  render() {

    return (
      <div className='ui segment'>
      {!this.props.check && <button onClick={this.toggleTaskForm} className='ui button'>Create New Task</button>}
      {this.state.taskForm && <TaskForm createTask={this.props.createTask} inviteObj={this.props.inviteObj}/>}
      <h3>Task List:</h3>
      {this.getTasks()}
      </div>
    )
  }
}

export default TaskList;
