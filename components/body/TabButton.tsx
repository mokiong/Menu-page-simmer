import { Dispatch, SetStateAction } from 'react';
import DownArrow from '../Icon/DownArrow';
import classes from './tab-button.module.css';

interface TabButtonInterface {
    chosenCourse: string;
    buttonContent: string;
    setChosenCourse: Dispatch<SetStateAction<string>>;
}

const TabButton = ({
    chosenCourse,
    buttonContent: btn,
    setChosenCourse,
}: TabButtonInterface) => {
    return (
        <div className={classes.tabContainer}>
            <div className={classes.tabSection}>
                <div className={classes.icon}>
                    <DownArrow color="#f89811" size="3rem" />
                </div>

                <button
                    onClick={() => {
                        setChosenCourse(btn);
                    }}
                    className={
                        chosenCourse === btn
                            ? `${classes.btn} ${classes.activeBtn}`
                            : `${classes.btn}`
                    }
                >
                    {btn}
                </button>
            </div>
        </div>
    );
};

export default TabButton;
