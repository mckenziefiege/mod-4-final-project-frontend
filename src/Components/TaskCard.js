import React, { Component } from 'react'

class TaskCard extends Component {

  render() {
    return (
      <div className='ui segment'>
      {this.props.taskObj.name}
      </div>
    )
  }
}

export default TaskCard;
