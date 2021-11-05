import type { NextPage } from 'next';
import { RiArrowDownSFill } from 'react-icons/ri';
import DownArrow from '../Icon/DownArrow';

import classes from './header.module.css';

const MenuHeader: NextPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.headerContainer}>
                <h1 className={classes.headerText}>
                    Tell us what you&apos;re craving
                </h1>
            </div>
            <div className={classes.tabs}>
                <div className={classes.tabContainer}>
                    <div className={classes.icon}>
                        <DownArrow />
                    </div>
                    <button className={classes.btn}>APPETIZERS</button>
                </div>
                <div className={classes.tabContainer}>
                    <div className={classes.icon}>
                        <DownArrow />
                    </div>
                    <button className={classes.btn}>MAIN COURSE</button>
                </div>
                <div className={classes.tabContainer}>
                    <div className={classes.icon}>
                        <DownArrow />
                    </div>
                    <button className={classes.btn}>DESSERT</button>
                </div>
            </div>
        </div>
    );
};

export default MenuHeader;
