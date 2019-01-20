import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from './NavItems.scss';

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem link="/" exact>projects</NavItem>
        <NavItem link="/profile">profile</NavItem>
        <NavItem link="/contact">contact</NavItem>
        <NavItem link="/news">news</NavItem>
    </ul>
);

export default navItems;