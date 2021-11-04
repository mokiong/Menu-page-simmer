import { NextPage } from 'next';

import classes from './nav-bar.module.css';
import Cart from '../Icon/Cart';

const Navbar: NextPage = () => {
    return (
        <div className={classes.nav}>
            <ul>
                <li>HOME</li>
                <li>WORKS + ABOUT</li>
                <li>MENU</li>
            </ul>
            <div className={classes.logo}>SIMMER STUDIOS</div>
            <div className={classes.navItem}>
                <button className={classes.btn}>Get a quote</button>
                <Cart />
            </div>
        </div>
    );
};

export default Navbar;
