import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavItems from '../../components/NavItems/NavItems';
import ContactComponent from '../../components/ContactComponent/ContactComponent';
import Footer from '../../components/Footer/Footer';

import classes from '../../sass/containers/_Contact.scss';
import { MyContext } from '../../context';


class Contact extends Component {

  // mode
  static contextType = MyContext;

  render() {
    // mode
    const context = this.context;
    const darkMode = this.context.state.darkMode;

    // light
    if (!darkMode) {
      return (
        <div className={classes.Contact}>
          <Header context={context}/>
          <NavItems context={context}/>
          <ContactComponent context={context}/>
          <Footer />
        </div>
      );
    }

    // dark
    if (darkMode) {
      return (
        <div className={classes.ContactDark}>
          <Header context={context}/>
          <NavItems context={context}/>
          <ContactComponent context={context}/>
          <Footer />
        </div>
      );
    }
  }
}

export default Contact;