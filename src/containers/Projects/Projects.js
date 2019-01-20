import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavItems from '../../components/NavItems/NavItems';
import MyProjects from '../../components/MyProjects/MyProjects';
import Footer from '../../components/Footer/Footer';

import classes from './Projects.scss';

class Projects extends Component {

  render() {
    return (
      <div className={classes.Projects}>
        <Header />
        <NavItems />
        <MyProjects />
        <Footer />
      </div>
    );
  }
}

export default Projects;