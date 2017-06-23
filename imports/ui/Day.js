import React from 'react';

import DayDescription from './DayDescription';

export default class Day extends React.Component {
  render() {
    return (
      <div className="day">
        <h2>{this.props.day}</h2>
        <p className="date">{this.props.date}</p>
        <div className="day__flex">
          <DayDescription _id={this.props._id} descr={this.props.descr} completed={this.props.completed}/>
        </div>
      </div>
    );
  }
}
