import React, { Component } from 'react'

class TaskForm extends Component {

  render() {
    console.log("the id", this.props.inviteObj.id)
    return (
      <div id='signup-container' className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
            </div>
          </h2>
      <form onSubmit={this.props.createTask} className="ui form">
      <div className="field">
        <input type="text" name="taskname" placeholder="Task Name"/>
      </div>
      <div className="field">
        <input type="hidden" name="inviteid" value={this.props.inviteObj.id} />
      </div>
      <button className="ui primary button" type="submit">Submit</button>
      </form>
      </div>
      </div>
    )
  }
}

export default TaskForm;
