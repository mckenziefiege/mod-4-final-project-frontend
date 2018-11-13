import React, { Component } from 'react'

class TaskForm extends Component {

  render() {
    return (
      <div id='signup-container' className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
            </div>
          </h2>
      <form className="ui form">
      <div className="field">
        <input type="text" name="task-name" placeholder="Task Name"/>
      </div>
      <div className="field">
        <input type="hidden" name="user_id" />
      </div>
      <button className="ui primary button" type="submit">Submit</button>
      </form>
      </div>
      </div>
    )
  }
}

export default TaskForm;
