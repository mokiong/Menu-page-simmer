import { FC } from 'react';

import classes from './container.module.css';

interface ContainerInterface {
    bgColor: string;
    isFullWidth?: boolean;
}

const Container: FC<ContainerInterface> = ({
    isFullWidth = false,
    bgColor,
    children,
}) => {
    return (
        <div style={{ backgroundColor: bgColor }}>
            <div className={!isFullWidth ? classes.container : ''}>
                {children}
            </div>
        </div>
    );
};

export default Container;
