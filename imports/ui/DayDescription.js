import React from 'react';
import AddCompleted from './AddCompleted';

export default class DayDescription extends React.Component {
  renderTasks() {
    return this.props.descr.map((task, index) => {
      let platform = index < 2 ? 'HackerRank' : 'Code Fights';
      return task.task ? <p key={index}>{platform}: {task.task} - <span className={task.difficulty}>{task.difficulty}</span></p> : undefined;
    });
  };

  render() {
    return (
      <div>
        {this.renderTasks()}
        <p><span className="completed">Completed:</span> {this.props.completed.join(', ')}</p>
        <AddCompleted _id={this.props._id}/>
      </div>
    );
  }
};
