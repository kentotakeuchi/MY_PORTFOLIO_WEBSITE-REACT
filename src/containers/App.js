import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import News from './News/News';
import Contact from './Contact/Contact';
import Profile from './Profile/Profile';
import Projects from './Projects/Projects';

import classes from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;