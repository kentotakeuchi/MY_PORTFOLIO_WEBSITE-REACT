import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavItems from '../../components/NavItems/NavItems';
import ContactComponent from '../../components/ContactComponent/ContactComponent';
import Footer from '../../components/Footer/Footer';

import classes from './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className={classes.Contact}>
        <Header />
        <NavItems />
        <ContactComponent />
        <Footer />
      </div>
    );
  }
}

export default Contact;