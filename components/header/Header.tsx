import type { NextPage } from 'next';
import { RiArrowDownSFill } from 'react-icons/ri';

import classes from './header.module.css';

const MenuHeader: NextPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.headerText}>
                <h1>Tell us what you&apos;re craving</h1>
            </div>
            <div className={classes.tabs}>
                <div className={classes.tabContainer}>
                    <RiArrowDownSFill size="7rem" color="#fa9a11" />
                    <button className={classes.btn}>APPETIZERS</button>
                </div>
                <div className={classes.tabContainer}>
                    <RiArrowDownSFill size="7rem" color="#fa9a11" />
                    <button className={classes.btn}>MAIN COURSE</button>
                </div>
                <div className={classes.tabContainer}>
                    <RiArrowDownSFill size="7rem" color="#fa9a11" />
                    <button className={classes.btn}>DESSERT</button>
                </div>
            </div>
        </div>
    );
};

export default MenuHeader;
