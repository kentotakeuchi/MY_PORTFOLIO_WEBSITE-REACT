import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavItems from '../../components/NavItems/NavItems';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import Footer from '../../components/Footer/Footer';

import classes from './Profile.scss';

class Profile extends Component {
  render() {
    return (
      <div className={classes.Profile}>
        <Header />
        <NavItems />
        <ProfileComponent />
        <Footer />
      </div>
    );
  }
}

export default Profile;