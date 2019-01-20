import React from 'react';

import Email from '../../assets/img/mail_logo.svg';
import Twitter from '../../assets/img/tw_logo.svg';
import Facebook from '../../assets/img/fb_logo.svg';
import Instagram from '../../assets/img/insta_logo.svg';
import Github from '../../assets/img/git_logo.svg';

import classes from './ContactComponent.scss';

const ContactComponent = () => {

    return (
        <div className={classes.ContactComponent}>
            <div id="map" className={classes.Map}></div>
            <p>santa clara, ca, usa</p>
            <ul>
                <li>
                    <a href="mailto:ideal.mt.reality@gmail.com">
                        <img src={Email} width="25" />
                    </a>
                    </li>
                <li>
                    <a href="https://twitter.com/KentoTakeuchi">
                        <img src={Twitter} width="25" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/mikio.tanaka.001">
                        <img src={Facebook} width="25" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mikiotanaka/?hl=en">
                        <img src={Instagram} width="25" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kentotakeuchi">
                        <img src={Github} width="25" />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default ContactComponent;