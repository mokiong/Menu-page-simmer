import { NextPage } from 'next';
import Star from '../Icon/Star';

import classes from './specialty.module.css';

const Specialty: NextPage = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.header}>Specialty</div>
                <div className={classes.product}>
                    <div className={classes.content}>
                        <div className={classes.contentHeader}>
                            Full Course
                            <span className={classes.headerSpan}>
                                <Star size="8rem" />
                            </span>
                        </div>
                        <div className={classes.description}>
                            includes appetizers, main course, and desserts
                        </div>
                    </div>
                    <button className={classes.btn}>add to cart</button>
                </div>
                <div className={classes.product}>
                    <div className={classes.content}>
                        <div className={classes.contentHeader}>
                            Chef’s Choice
                            {/* <span className={classes.headerSpan}>
                            <Star size="8rem" />
                        </span> */}
                        </div>
                        <div className={classes.description}>
                            CAN’T DECIDE? TALK TO US.
                        </div>
                    </div>
                    <button className={classes.btn}>add to cart</button>
                </div>
            </div>
            <div className={classes.menuFooter}>
                <button className={classes.footerBtn}>CHECKOUT</button>
                <p className={`${classes.description} ${classes.footerParag}`}>
                    for other concerns, feel free to email us at&nbsp;
                    <a href="#">holla@simmer-studios.com</a>
                </p>
            </div>
        </>
    );
};

export default Specialty;
