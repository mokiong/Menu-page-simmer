import { FC, Fragment } from 'react';

import classes from './layout.module.css';

const Layout: FC = (props) => {
    return (
        <Fragment>
            <div className={classes.layout}>{props.children}</div>
        </Fragment>
    );
};

export default Layout;
