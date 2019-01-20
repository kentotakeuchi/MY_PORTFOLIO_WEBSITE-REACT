import React from 'react';

import MyProject from './MyProject/MyProject';
import classes from './_MyProjects.scss';

const myProjects = () => (
    <ul className={classes.MyProjects}>
        <MyProject link="saturdays-art-surf/index.html">
        <span>2018</span>
        saturdays art surf</MyProject>
        <MyProject link="todo/index.html">
        <span>2018</span>
        todo</MyProject>
        <MyProject link="clear/index.html">
        <span>2018</span>
        clear</MyProject>
    </ul>
);

export default myProjects;