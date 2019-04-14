import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavItems from '../../components/NavItems/NavItems';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import Footer from '../../components/Footer/Footer';

import classes from '../../sass/containers/_Profile.scss';
import { MyContext } from '../../context';


class Profile extends Component {

  // mode
  static contextType = MyContext;

  render() {
    // mode
    const context = this.context;
    const darkMode = this.context.state.darkMode;

    // light
    if (!darkMode) {
      return (
        <div className={classes.Profile}>
          <Header context={context}/>
          <NavItems context={context}/>
          <ProfileComponent context={context}/>
          <Footer />
        </div>
      );
    }

    // dark
    else if (darkMode) {
      return (
        <div className={classes.ProfileDark}>
          <Header context={context}/>
          <NavItems context={context}/>
          <ProfileComponent context={context}/>
          <Footer />
        </div>
      );
    }
  }
}

export default Profile;