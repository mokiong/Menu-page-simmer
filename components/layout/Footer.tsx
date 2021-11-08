import { NextPage } from 'next';
import Container from '../utils/Container';

import classes from './footer.module.css';

const Footer: NextPage = (props) => {
    return (
        <Container bgColor="#f7ede1">
            <div className={classes.menuFooter}>
                <button className={classes.footerBtn}>CHECKOUT</button>
                <p className={`${classes.description} ${classes.footerParag}`}>
                    for other concerns, feel free to email us at&nbsp;
                    <a href="#">holla@simmer-studios.com</a>
                </p>
            </div>
        </Container>
    );
};

export default Footer;
