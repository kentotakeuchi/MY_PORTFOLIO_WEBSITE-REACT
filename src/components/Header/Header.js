import React, { Component } from 'react';
import ShuffleText from 'shuffle-text';

import classes from '../../sass/components/_Header.scss';


class Header extends Component {

    componentDidMount() {
        // Get element
        const element = document.getElementById('header');
        // Create instance
        const shuffleText = new ShuffleText(element);
        // Trigger effect
        shuffleText.start();

        ['click', 'contextmenu'].forEach(event => {
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
        console.log(`this.props`, this.props);
        // mode
        const dark = this.props.context.state.darkMode;
        const changeMode = this.props.context.changeMode;
        console.log(`dark`, dark);

        // light
        if (!dark) {
            return(
                <div className={classes.Header}>

                    <p id="header">
                        <span className={classes.Name}>kento takeuchi </span>
                        web developer / santa clara
                    </p>

                    <li className={classes.Mode}>
                        <p
                        onClick={changeMode}
                        className={classes.Active}>Light </p>
                        <p
                        onClick={changeMode}>Dark</p>
                    </li>

                </div>
            );
        }

        // dark
        else if (dark) {
            return(
                <div className={classes.HeaderDark}>

                    <p id="header">
                        <span className={classes.NameDark}>kento takeuchi </span>
                        web developer / santa clara
                    </p>

                    <li className={classes.Mode}>
                        <p
                        onClick={changeMode}>Light </p>
                        <p
                        onClick={changeMode}
                        className={classes.Active}>Dark</p>
                    </li>

                </div>
            );
        }
    }
}

export default Header;