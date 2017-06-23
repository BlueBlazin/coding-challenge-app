import React from 'react';
import { Days } from '/imports/api/days';

export default class Add extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    let day = this.refs.day.value.trim();
    let date = this.refs.date.value.trim();
    let descr = [
      { task: this.refs.hr1.value.trim(),
        difficulty: this.refs.hr1select.value
      },
      { task: this.refs.hr2.value.trim(),
        difficulty: this.refs.hr2select.value
      },
      { task: this.refs.cf1.value.trim(),
        difficulty: this.refs.cf1select.value
      },
      { task: this.refs.cf2.value.trim(),
        difficulty: this.refs.cf2select.value
      },
    ];

    if (day && date && descr) {
      this.refs.day.value = '';
      this.refs.date.value = '';
      this.refs.hr1.value = '';
      this.refs.hr2.value = '';
      this.refs.cf1.value = '';
      this.refs.cf2.value = '';

      Days.insert({ day, date, descr: descr, completed: [] });
    }
  }

  render() {
    return (
      <div>
        <h1>Add Day</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="day" name="day" placeholder="Day"/>
          <input type="date" ref="date" name="date" min="2017-06-22" max="2017-07-23"/>
          <div>
            <input type="text" ref="hr1" name="hr1" placeholder="HackerRank Task 1"/>
            <select name="hr1select" ref="hr1select">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <input type="text" ref="hr2" name="hr2" placeholder="HackerRank Task 2"/>
            <select name="hr2select" ref="hr2select">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <input type="text" ref="cf1" name="cf1" placeholder="Code Fights Task 1"/>
            <select name="cf1select" ref="cf1select">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <input type="text" ref="cf2" name="cf2" placeholder="Code Fights Task 2"/>
            <select name="cf2select" ref="cf2select">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};
