import React from 'react';
import { Days } from '../api/days';

import Day from './Day';
import Header from './Header';
import Footer from './Footer';
import FlipMove from 'react-flip-move';

export default class DaysList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { days: [] };
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      const days = Days.find({}).fetch();
      this.setState({ days })
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderDays() {
    return this.state.days.map((day) => {
      return <Day key={day._id} {...day}/>;
    });
  }

  render() {
    return (
      <div>
        <Header/>
          <div className="wrapper">
            {this.renderDays(Days.find({}).fetch())}
          </div>
        <Footer/>
      </div>
    );
  }
};
