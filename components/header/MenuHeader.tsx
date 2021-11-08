import Container from '../utils/Container';

import classes from './header.module.css';

const MenuHeader = () => {
    return (
        <Container bgColor="black">
            <div className={classes.container}>
                <h1 className={classes.headerText}>
                    Tell us what you&apos;re craving for.
                </h1>
            </div>
        </Container>
    );
};

export default MenuHeader;
