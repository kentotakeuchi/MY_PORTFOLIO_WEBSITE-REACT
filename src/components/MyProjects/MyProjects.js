import React from 'react';

// import MyProject from './MyProject/MyProject';
import classes from '../../sass/components/_MyProjects.scss';

const myProjects = () => (
    <ul className={classes.MyProjects}>
        <li>
            <a href="http://www.kentotakeuchi.com/saturdays-art-surf">
            <span>2018</span>saturdays art surf
            </a>
        </li>
        <li>
            <a href="http://www.kentotakeuchi.com/todo">
            <span>2018</span>todo
            </a>
        </li>
        <li>
            <a href="http://www.kentotakeuchi.com/clear">
            <span>2018</span>clear
            </a>
        </li>

        {/* <MyProject link="saturdays-art-surf/index.html">
        <span>2018</span>
        saturdays art surf</MyProject>
        <MyProject link="todo/index.html">
        <span>2018</span>
        todo</MyProject>
        <MyProject link="clear/index.html">
        <span>2018</span>
        clear</MyProject> */}
    </ul>
);

export default myProjects;