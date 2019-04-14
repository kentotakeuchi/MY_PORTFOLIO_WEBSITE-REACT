import React from 'react';

import Portrait from '../../assets/img/me-1.jpg';
import classes from '../../sass/components/_ProfileComponent.scss';

const profileComponent = (props) => {
    // mode
    const dark = props.context.state.darkMode;

    // light
    if (!dark) {
        return (
            <div className={classes.ProfileComponent}>
                <h1>Kento Takeuchi</h1>
                <img src={Portrait} alt="me"/>
                <h4>Web Developer</h4>
                <article>
                Born in Yamaguchi in 1984. Graduated from Doshisha University in Kyoto with a degree in economics. Spent 8 years working as a sales person at various supermarkets in Tokyo and pursued his passion for soccer and surfing. Came to the U.S.A and completed the Certificate Program in Computer Programming of University of California, Santa Cruz, Silicon Valley Extension in 2018.
                <br></br>
                <br></br>
                Kento, an entry level front-end web developer, works hard to support others with his current skills. As of January 2019, a new project is created and developed every month as a result of his aspiration to grow as a professional web developer. Recently, he has increased his skills to include modern frameworks and libraries such as React/Redux to develop new web applications.
                <br></br>
                <br></br>
                Outside of his professional career, Kento is an enthusiastic soccer player. Playing soccer seriously helps him not only to work on his technical skills, but also reminds him of the importance of respecting others while teaching himself discipline and finding joy in his life. He used to belong to a soccer team consisting of mainly Japanese players in the San Francisco Premier League, and currently belongs to a multinational local soccer team in Santa Clara.
                <br></br>
                <br></br>
                His friends, family and people he meets are his greatest source of support, without which he couldn't grow and challenge himself to the fullest extent. His passion for his career drives him to excel in his professional endeavors.
                <br></br>
                <br></br>
                Official Site URL: http://www.kentotakeuchi.com/
                </article>
            </div>
        );
    }

    // dark
    if (dark) {
        return (
            <div className={classes.ProfileComponentDark}>
                <h1>Kento Takeuchi</h1>
                <img src={Portrait} alt="me"/>
                <h4>Web Developer</h4>
                <article>
                Born in Yamaguchi in 1984. Graduated from Doshisha University in Kyoto with a degree in economics. Spent 8 years working as a sales person at various supermarkets in Tokyo and pursued his passion for soccer and surfing. Came to the U.S.A and completed the Certificate Program in Computer Programming of University of California, Santa Cruz, Silicon Valley Extension in 2018.
                <br></br>
                <br></br>
                Kento, an entry level front-end web developer, works hard to support others with his current skills. As of January 2019, a new project is created and developed every month as a result of his aspiration to grow as a professional web developer. Recently, he has increased his skills to include modern frameworks and libraries such as React/Redux to develop new web applications.
                <br></br>
                <br></br>
                Outside of his professional career, Kento is an enthusiastic soccer player. Playing soccer seriously helps him not only to work on his technical skills, but also reminds him of the importance of respecting others while teaching himself discipline and finding joy in his life. He used to belong to a soccer team consisting of mainly Japanese players in the San Francisco Premier League, and currently belongs to a multinational local soccer team in Santa Clara.
                <br></br>
                <br></br>
                His friends, family and people he meets are his greatest source of support, without which he couldn't grow and challenge himself to the fullest extent. His passion for his career drives him to excel in his professional endeavors.
                <br></br>
                <br></br>
                Official Site URL: http://www.kentotakeuchi.com/
                </article>
            </div>
        );
    }
};

export default profileComponent;