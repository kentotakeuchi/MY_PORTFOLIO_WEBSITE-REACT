import React from 'react';

import Saturdays from '../../assets/img/saturdays.png';
import Todo from '../../assets/img/todo.png';
import Clear from '../../assets/img/clear.png';

import classes from '../../sass/components/_NewsComponent.scss';

const NewsComponent = (props) => {
    // mode
    const dark = props.context.state.darkMode;

    // light
    if (!dark) {
        return (
            <div className={classes.NewsComponent}>
                <h1>saturdays art surf</h1>
                <p>post on 2019.01.28 11:30:00</p>
                <img src={Saturdays} alt="saturdays" />
                <article>
                SATURDAYS ART SURF is a simple web application which provides users with comfortable time by appreciating huge amount of artworks on digital devices. Since the information about artworks is intentionally minimized, users are casually able to have fun to appreciate artworks anytime, anywhere. One of the feature is displaying artworks at random, hence serendipity could be caused.
                </article>
                <a href="http://www.kentotakeuchi.com/saturdays-art-surf">&spades; go to saturdays art surf</a>

                <h1>todo</h1>
                <p>post on 2019.01.27 14:48:40</p>
                <img src={Todo} alt="todo" />
                <article>
                TODO is an interactive todo application which is made in order to create tasks or memos.
                </article>
                <a href="http://www.kentotakeuchi.com/todo">&clubs; go to todo</a>

                <h1>clear</h1>
                <p>post on 2019.01.26 15:55:50</p>
                <img src={Clear} alt="clear" />
                <article>
                CLEAR aims to help users to make clear what their important thing is. This app helps users to organize their items by putting them all in one place. Users can categorize them no matter how they want. Visualizing what users have facilitates grasping what they cherish and who they are. In addition, users are able to browse their friend's items with CLEAR. It would help users to know more their friends through their items. Since each of user have a different story for each item, users can share background of their items. Moreover, users can give away, sell or buy items from their friends.
                </article>
                <a href="http://www.kentotakeuchi.com/clear">&hearts; go to clear</a>
            </div>
        );
    }

    // dark
    else if (dark) {
        return (
            <div className={classes.NewsComponentDark}>
                <h1>saturdays art surf</h1>
                <p>post on 2019.01.28 11:30:00</p>
                <img src={Saturdays} alt="saturdays" />
                <article>
                SATURDAYS ART SURF is a simple web application which provides users with comfortable time by appreciating huge amount of artworks on digital devices. Since the information about artworks is intentionally minimized, users are casually able to have fun to appreciate artworks anytime, anywhere. One of the feature is displaying artworks at random, hence serendipity could be caused.
                </article>
                <a href="http://www.kentotakeuchi.com/saturdays-art-surf">&spades; go to saturdays art surf</a>

                <h1>todo</h1>
                <p>post on 2019.01.27 14:48:40</p>
                <img src={Todo} alt="todo" />
                <article>
                TODO is an interactive todo application which is made in order to create tasks or memos.
                </article>
                <a href="http://www.kentotakeuchi.com/todo">&clubs; go to todo</a>

                <h1>clear</h1>
                <p>post on 2019.01.26 15:55:50</p>
                <img src={Clear} alt="clear" />
                <article>
                CLEAR aims to help users to make clear what their important thing is. This app helps users to organize their items by putting them all in one place. Users can categorize them no matter how they want. Visualizing what users have facilitates grasping what they cherish and who they are. In addition, users are able to browse their friend's items with CLEAR. It would help users to know more their friends through their items. Since each of user have a different story for each item, users can share background of their items. Moreover, users can give away, sell or buy items from their friends.
                </article>
                <a href="http://www.kentotakeuchi.com/clear">&hearts; go to clear</a>
            </div>
        );
    }
};

export default NewsComponent;