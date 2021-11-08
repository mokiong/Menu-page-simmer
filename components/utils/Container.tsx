import { FC } from 'react';

import classes from './container.module.css';

interface ContainerInterface {
    bgColor: string;
}

const Container: FC<ContainerInterface> = ({ bgColor, children }) => {
    return (
        <div style={{ backgroundColor: bgColor }}>
            <div className={classes.container}>{children}</div>
        </div>
    );
};

export default Container;
