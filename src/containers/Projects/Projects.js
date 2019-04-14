import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavItems from '../../components/NavItems/NavItems';
import MyProjects from '../../components/MyProjects/MyProjects';
import Footer from '../../components/Footer/Footer';

import classes from '../../sass/containers/_Projects.scss';
import { MyContext } from '../../context';


class Projects extends Component {

  // mode
  static contextType = MyContext;

  render() {
    // mode
    const context = this.context;
    const darkMode = this.context.state.darkMode;

    // light
    if (!darkMode) {
      return (
        <div className={classes.Projects}>
          <Header context={context}/>
          <NavItems context={context}/>
          <MyProjects context={context}/>
          <Footer />
        </div>
      );
    }

    // dark
    else if (darkMode) {
      return (
        <div className={classes.ProjectsDark}>
          <Header context={context}/>
          <NavItems context={context}/>
          <MyProjects context={context}/>
          <Footer />
        </div>
      );
    }
  }
}

export default Projects;