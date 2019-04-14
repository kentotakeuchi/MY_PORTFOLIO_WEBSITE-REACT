import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavItems from '../../components/NavItems/NavItems';
import NewsComponent from '../../components/NewsComponent/NewsComponent';
import Footer from '../../components/Footer/Footer';

import classes from '../../sass/containers/_News.scss';
import { MyContext } from '../../context';


class News extends Component {

  // mode
  static contextType = MyContext;

  render() {
    // mode
    const context = this.context;
    const darkMode = this.context.state.darkMode;

    // light
    if (!darkMode) {
      return (
        <div className={classes.News}>
          <Header context={context}/>
          <NavItems context={context}/>
          <NewsComponent context={context}/>
          <Footer />
        </div>
      );
    }

    // dark
    if (darkMode) {
      return (
        <div className={classes.NewsDark}>
          <Header context={context}/>
          <NavItems context={context}/>
          <NewsComponent context={context}/>
          <Footer />
        </div>
      );
    }
  }
}

export default News;