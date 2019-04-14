import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import { MyContext } from '../context';

import News from './News/News';
import Contact from './Contact/Contact';
import Profile from './Profile/Profile';
import Projects from './Projects/Projects';


class App extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <Switch  context={context}>
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
              <Route path="/profile" component={Profile} />
              <Route path="/" component={Projects} />
            </Switch>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default withRouter( App );
