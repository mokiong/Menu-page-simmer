import { NextPage } from 'next';
import { BsCart3 } from 'react-icons/bs';

import classes from './nav-bar.module.css';

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
                <BsCart3 color="#f7ede1" size="3rem" />
            </div>
        </div>
    );
};

export default Navbar;
