import React, { Component } from 'react';

import Email from '../../assets/img/mail_logo.svg';
import Twitter from '../../assets/img/tw_logo.svg';
import Facebook from '../../assets/img/fb_logo.svg';
import Instagram from '../../assets/img/insta_logo.svg';
import Github from '../../assets/img/git_logo.svg';

import { googleMap } from '../../config';

import classes from '../../sass/components/_ContactComponent.scss';

class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mapIsReady: false,
        };
      }

      componentDidMount() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMap.api}`;
        script.async = true;
        script.defer = true;
        script.addEventListener('load', () => {
          this.setState({ mapIsReady: true });
        });

        document.body.appendChild(script);
      }

      componentDidUpdate() {
        if (this.state.mapIsReady) {
          // Display the map
          this.map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.353, lng: -122.000},
            zoom: 12,
            mapTypeId: 'roadmap',
          });
          // You also can add markers on the map below
        }
      }


    render() {
        // mode
        const dark = this.props.context.state.darkMode;

        // light
        if (!dark) {
            return(
                <div className={classes.ContactComponent}>
                    <div id="map" className={classes.Map}></div>
                    <p>santa clara, ca, usa</p>
                    <ul>
                        <li>
                            <a href="mailto:ideal.mt.reality@gmail.com">
                                <img src={Email} alt="email" />
                            </a>
                            </li>
                        <li>
                            <a href="https://twitter.com/KentoTakeuchi">
                                <img src={Twitter} alt="twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/mikio.tanaka.001">
                                <img src={Facebook} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mikiotanaka/?hl=en">
                                <img src={Instagram} alt="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/kentotakeuchi">
                                <img src={Github} alt="github" />
                            </a>
                        </li>
                    </ul>
                </div>
            );
        }

        // dark
        else if (dark) {
            return(
                <div className={classes.ContactComponentDark}>
                    <div id="map" className={classes.Map}></div>
                    <p>santa clara, ca, usa</p>
                    <ul>
                        <li>
                            <a href="mailto:ideal.mt.reality@gmail.com">
                                <img src={Email} alt="email" />
                            </a>
                            </li>
                        <li>
                            <a href="https://twitter.com/KentoTakeuchi">
                                <img src={Twitter} alt="twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/mikio.tanaka.001">
                                <img src={Facebook} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mikiotanaka/?hl=en">
                                <img src={Instagram} alt="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/kentotakeuchi">
                                <img src={Github} alt="github" />
                            </a>
                        </li>
                    </ul>
                </div>
            );
        }
    }
};

export default ContactComponent;