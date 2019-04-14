import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../../../sass/components/_NavItem.scss';

const navItem = (props) => {
    console.log(`props`, props);

    // light
    if (!props.dark) {
        return (
            <li className={classes.NavItem}>
                <NavLink className={classes.NavLink}
                    to={props.link}
                    exact={props.exact}
                    activeClassName={classes.active}>{props.children}
                </NavLink>
            </li>
        );
    }

    // dark
    if (props.dark) {
        return (
            <li className={classes.NavItemDark}>
                <NavLink className={classes.NavLink}
                    to={props.link}
                    exact={props.exact}
                    activeClassName={classes.active}>{props.children}
                </NavLink>
            </li>
        );
    }
};

export default navItem;