import React from 'react';

import Portrait from '../../assets/img/me-1.jpg';
import classes from '../../sass/components/_ProfileComponent.scss';

const profileComponent = () => (
    <div className={classes.ProfileComponent}>
        <h1>Kento Takeuchi</h1>
        <img src={Portrait} alt="me"/>
        <h4>Web Developer</h4>
        <article>
        Born in Yamaguchi in 1984. Graduated from the Department of Economics of Doshisha University in Kyoto. Spent 8 years at various supermarkets in Tokyo and Enjoyed soccer and surfing. Came in the U.S.A and completed the Certificate Program in Computer Programming of University of California, Santa Cruz, Silicon Valley Extension in 2018.
        <br></br>
        <br></br>
        Kento, an entry level front-end web developer, does his best to be there for others with his current skills. Each month, a new project is created and developed as a result of his aspiration to grow and make new creations as of January 2019. Recently, he has extended his skills to include modern frameworks and libraries such as React/Redux to develop new web applications.
        <br></br>
        <br></br>
        Besides, Kento is also an enthusiastic amature soccer player. Playing soccer seriously helps him not only to work on his technical skills, but also teaches him the importance of respecting others together with disciplining himself and finding joy in his life. He belonged to a soccer team consisting of mainly Japanese players in San Francisco Premier League, and currently belongs to a local soccer team in Santa Clara, whose members are multinational players.
        <br></br>
        <br></br>
        His friends, family and people he meets are his source of great support, without which he couldn't grow and challenge himself to do a lot of new things. The passion he feels towards his profession is what makes him strive so he could reach his goals.
        <br></br>
        <br></br>
        Official Site URL: http://www.kentotakeuchi.com/
        </article>
    </div>
);

export default profileComponent;