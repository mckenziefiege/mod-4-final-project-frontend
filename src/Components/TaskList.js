import React, { Component } from 'react'
import TaskCard from './TaskCard.js'
import TaskForm from './TaskForm.js'

class TaskList extends Component {

  state = {
    taskForm: false
  }

  getTasks = () => {
    if(this.props.eventobj) {
      return this.props.eventobj.tasks.map(task => <TaskCard deleteTask={this.props.deleteTask} user={this.props.user} createAssignment={this.props.createAssignment} taskObj={task} key={task.id} eventObj={this.props.eventobj}/>)
    }
  }

  toggleTaskForm = () => {
    this.setState({
      taskForm: !this.state.taskForm
    })
  }

  render() {

    return (
      <div id='tasklist' className='ui segment'>
      {!this.props.check && <button onClick={this.toggleTaskForm} className='ui button'>Suggest an Item</button>}
      {this.state.taskForm && <TaskForm createTask={this.props.createTask} inviteObj={this.props.inviteObj}/>}
      <h3>Items Suggestions</h3>
      {this.getTasks()}
      </div>
    )
  }
}

export default TaskList;
