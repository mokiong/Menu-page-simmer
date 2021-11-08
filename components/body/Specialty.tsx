import Star from '../Icon/Star';
import Container from '../utils/Container';

import classes from './specialty.module.css';

const Specialty = () => {
    return (
        <Container bgColor="#fa9a11">
            <div className={classes.container}>
                <div className={classes.header}>Specialty</div>
                <div className={classes.product}>
                    <div className={classes.content}>
                        <div className={classes.contentHeader}>
                            <p>Full Course</p>
                            <span className={classes.icon}>
                                <Star size="8rem" color="black" />
                            </span>
                        </div>

                        <div className={classes.description}>
                            includes appetizers, main course, and desserts
                        </div>
                        <span className={classes.iconMobile}>
                            <Star size="8rem" color="black" />
                        </span>
                    </div>
                    <button className={classes.btn}>add to cart</button>
                </div>
                <div className={classes.product}>
                    <div className={classes.content}>
                        <div className={classes.contentHeader}>
                            Chef’s Choice
                        </div>
                        <div className={classes.description}>
                            CAN’T DECIDE? TALK TO US.
                        </div>
                    </div>
                    <button className={classes.btn}>add to cart</button>
                </div>
            </div>
        </Container>
    );
};

export default Specialty;
