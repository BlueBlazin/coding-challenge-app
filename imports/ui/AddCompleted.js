import React from 'react';
import { Days } from '/imports/api/days';


export default class AddCompleted extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    let completedList = Days.findOne({ _id: this.props._id }).completed;
    if (this.refs.name.value.trim()) {
      completedList.push(this.refs.name.value.trim());
      this.refs.name.value = '';
      Days.update({ _id: this.props._id }, {
        $set: { completed: completedList }
      });
    }
  };

  render() {
    return (
      <div className="form__wrapper">
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
          <input className="input" type="text" name="name" ref="name" placeholder="Add Your Name"/>
          <button className="button">Accomplished</button>
        </form>
      </div>
    );
  };
};
