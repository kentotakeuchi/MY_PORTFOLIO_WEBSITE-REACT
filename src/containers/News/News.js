import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavItems from '../../components/NavItems/NavItems';
import NewsComponent from '../../components/NewsComponent/NewsComponent';
import Footer from '../../components/Footer/Footer';

import classes from '../../sass/containers/_News.scss';

class News extends Component {
  render() {
    return (
      <div className={classes.News}>
        <Header />
        <NavItems />
        <NewsComponent />
        <Footer />
      </div>
    );
  }
}

export default News;