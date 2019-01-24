import React from 'react';

import Portrait from '../../assets/img/me-1.jpg';
import classes from '../../sass/components/_ProfileComponent.scss';

const profileComponent = () => (
    <div className={classes.ProfileComponent}>
        <h1>kento takeuchi</h1>
        <h4 className={classes.Pro}>web developer</h4>
        <article className={classes.Article}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a venenatis augue. Nullam viverra mi ut erat bibendum, et rhoncus nulla efficitur. Donec faucibus blandit ipsum, sed fringilla magna vulputate eu. Donec facilisis placerat tempus. Etiam eget egestas enim, non auctor urna. Aenean dictum pulvinar lobortis. Suspendisse placerat magna lectus. Morbi consectetur odio ac scelerisque hendrerit. Aenean lobortis gravida erat, eu laoreet tortor fermentum quis. Quisque at lobortis velit. Quisque feugiat auctor leo vel volutpat. Aenean velit nulla, euismod vel varius eget, viverra a sapien. Aliquam sed pellentesque erat. Praesent malesuada vestibulum faucibus. Fusce sit amet nisl venenatis, rhoncus diam in, egestas eros. Proin vel enim eu elit fringilla rhoncus.
        </article>
        <article className={classes.Article2}>
        Maecenas ultrices purus purus, in semper nunc pretium quis. Nullam lobortis tortor in sapien pharetra congue. Duis viverra ex nec molestie tempor. Integer bibendum risus vel convallis blandit. Curabitur viverra eu ipsum interdum mollis. Fusce consectetur malesuada massa, in auctor turpis rhoncus eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis at tortor vel leo rutrum auctor. Duis ullamcorper vehicula dolor, bibendum facilisis ligula convallis vel. Aenean molestie sapien erat, nec auctor lorem ultricies et. Cras eget eleifend odio. Nulla vehicula egestas erat ac condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam et velit et mauris fringilla varius et a neque.
        </article>
        <img src={Portrait} alt="me"/>
    </div>
);

export default profileComponent;