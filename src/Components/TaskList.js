import React, { Component } from 'react'

class TaskList extends Component {

  getTasks = () => {

  }
  
  render() {
    return (
      <div className='ui segment'>
      <h3>Task List:</h3>
      {this.getTasks()}
      </div>
    )
  }
}

export default TaskList;
