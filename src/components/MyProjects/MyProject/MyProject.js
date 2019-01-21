import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MyProject.scss';

const myProject = (props) => {
    console.log(props);
    return(
    <li className={classes.MyProject}>
        <a href="http://www.kentotakeuchi.com/saturdays-art-surf"></a>
        {/* <Link className={classes.Link}
        to={props.link}>
            {props.children}
        </Link> */}
    </li>)
};

export default myProject;

// anchor > href > 