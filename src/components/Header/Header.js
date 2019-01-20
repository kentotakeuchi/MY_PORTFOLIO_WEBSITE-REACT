import React, { Component } from 'react';
import ShuffleText from 'shuffle-text';

import classes from './Header.scss';

class Header extends Component {

    componentDidMount() {
        // Get element
        const element = document.getElementById('header');
        // Create instance
        const shuffleText = new ShuffleText(element);
        // Trigger effect
        shuffleText.start();

        ['click', 'mouseover'].forEach(event => {
          element.addEventListener(event, () => {
          // Create instance
          const shuffleText = new ShuffleText(element);
          console.log(`shuffleText`, shuffleText);
          // Trigger effect
          shuffleText.start();
          });
        });
      }

    render() {
        return(
            <div className={classes.Header}>
                <p id="header">
                    <span className={classes.Name}>kento takeuchi</span>
                    web developer / santa clara
                </p>
            </div>
        )
    }
}

export default Header;