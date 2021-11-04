import { NextPage } from 'next';
import { Fragment } from 'react';

import classes from './layout.module.css';

const Layout: NextPage = (props) => {
    return (
        <Fragment>
            <div className={classes.layout}>{props.children}</div>
        </Fragment>
    );
};

export default Layout;
