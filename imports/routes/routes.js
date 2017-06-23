import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import DaysList from '../ui/DaysList';
import Add from '../ui/Add';
import NotFound from '../ui/NotFound';


export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={DaysList}/>
    <Route path="/add" component={Add}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
