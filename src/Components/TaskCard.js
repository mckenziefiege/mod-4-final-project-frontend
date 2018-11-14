import React, { Component } from 'react'

class TaskCard extends Component {

  render() {
    let taskAssignment = this.props.eventObj && this.props.eventObj.assignments.filter(assignment => assignment.task_id === this.props.taskObj.id)[0]
    let doerInvite = taskAssignment && this.props.eventObj.invites.filter(invite => invite.id === taskAssignment.invite_id)[0]
    let doer = doerInvite && this.props.eventObj.users.filter(user => user.id === doerInvite.user_id)[0]
    let invite = this.props.eventObj && this.props.eventObj.invites.filter(invite => invite.user_id === this.props.user.id)[0]
    console.log('taskcard doer', doer)
    return (
      <div className='ui segment'>

      {this.props.taskObj.name}


      <span className="taskname">
      {!taskAssignment && <button onClick={() => this.props.createAssignment(this.props.taskObj.id, invite.id)} className="ui button">Bring Item!</button>}
      {taskAssignment && doer.name}
      </span>
      <span id='trashcan'><i onClick={() => this.props.deleteTask(this.props.taskObj.id)} className="trash alternate icon"></i>
      </span>


      </div>
    )
  }
}

export default TaskCard;
