import React, { Component } from 'react';

import Saturdays from '../../assets/img/saturdays-bg.png';
import Todo from '../../assets/img/todo.png';
import Clear from '../../assets/img/clear-bg.png';

// import MyProject from './MyProject/MyProject';
import classes from '../../sass/components/_MyProjects.scss';

class MyProjects extends Component {

    componentDidMount() {
        const body = document.querySelector('body');
        const saturdays = document.querySelector('.saturdays');
        const todo = document.querySelector('.todo');
        const clear = document.querySelector('.clear');

        saturdays.addEventListener('mouseover', () => {
            body.style.backgroundImage = `url(${Saturdays})`;
            body.style.width = '100vw';
            body.style.height = '100vh';
        });
        saturdays.addEventListener('mouseout', () => {
            body.style.backgroundImage = ``;
            body.style.width = '';
            body.style.height = '';
        });

        todo.addEventListener('mouseover', () => {
            body.style.backgroundImage = `url(${Todo})`;
            body.style.width = '100vw';
            body.style.height = '100vh';
        });
        todo.addEventListener('mouseout', () => {
            body.style.backgroundImage = ``;
            body.style.width = '';
            body.style.height = '';
        });

        clear.addEventListener('mouseover', () => {
            body.style.backgroundImage = `url(${Clear})`;
            body.style.width = '100vw';
            body.style.height = '100vh';
        });
        clear.addEventListener('mouseout', () => {
            body.style.backgroundImage = ``;
            body.style.width = '';
            body.style.height = '';
        });
    }

    render() {
        console.log(`this.props`, this.props);
        // mode
        const dark = this.props.context.state.darkMode;

        // light
        if (!dark) {
            return(
                <ul className={classes.MyProjects}>
                    <li className="saturdays">
                        <a href="http://www.kentotakeuchi.com/saturdays-art-surf">
                        <span>2018</span>saturdays art surf
                        </a>
                    </li>
                    <li className="todo">
                        <a href="http://www.kentotakeuchi.com/todo">
                        <span>2018</span>todo
                        </a>
                    </li>
                    <li className="clear">
                        <a href="http://www.kentotakeuchi.com/clear">
                        <span>2018</span>clear
                        </a>
                    </li>
                </ul>
            );
        }

        // dark
        else if (dark) {
            return(
                <ul className={classes.MyProjectsDark}>
                    <li className="saturdays">
                        <a href="http://www.kentotakeuchi.com/saturdays-art-surf">
                        <span>2018</span>saturdays art surf
                        </a>
                    </li>
                    <li className="todo">
                        <a href="http://www.kentotakeuchi.com/todo">
                        <span>2018</span>todo
                        </a>
                    </li>
                    <li className="clear">
                        <a href="http://www.kentotakeuchi.com/clear">
                        <span>2018</span>clear
                        </a>
                    </li>
                </ul>
            );
        }
    }
}

export default MyProjects;