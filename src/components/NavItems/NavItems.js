import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from '../../sass/components/_NavItems.scss';


const navItems = (props) => {
    console.log(`props`, props);

    // mode
    const dark = props.context.state.darkMode;

    // light
    if (!dark) {
        return (
            <ul className={classes.NavItems}>
                <NavItem
                dark={dark}
                link="/" exact>projects</NavItem>
                <NavItem
                dark={dark}
                link="/profile">profile</NavItem>
                <NavItem
                dark={dark}
                link="/contact">contact</NavItem>
                <NavItem
                dark={dark}
                link="/news">news</NavItem>
            </ul>
        );
    }

    // dark
    else if (dark) {
        return (
            <ul className={classes.NavItemsDark}>
                <NavItem
                dark={dark}
                link="/" exact>projects</NavItem>
                <NavItem
                dark={dark}
                link="/profile">profile</NavItem>
                <NavItem
                dark={dark}
                link="/contact">contact</NavItem>
                <NavItem
                dark={dark}
                link="/news">news</NavItem>
            </ul>
        );
    }
};

export default navItems;