import { useState } from 'react';

import Appetizers from '../body/Appetizers';
import DownArrow from '../Icon/DownArrow';
import Container from '../utils/Container';

import classes from './header.module.css';

const MenuHeader = () => {
    const [chosenCourse, setChosenCourse] = useState<string>('appetizers');

    let Menu;

    switch (chosenCourse) {
        case 'appetizers':
            Menu = <Appetizers />;
    }

    return (
        <>
            <Container bgColor="black">
                <div className={classes.container}>
                    <div className={classes.headerContainer}>
                        <h1 className={classes.headerText}>
                            Tell us what you&apos;re craving for.
                        </h1>
                    </div>
                    <div className={classes.tabs}>
                        <div className={classes.tabContainer}>
                            <div className={classes.icon}>
                                {chosenCourse === 'appetizers' && (
                                    <DownArrow color="#f89811" size="3rem" />
                                )}
                            </div>
                            {chosenCourse === 'appetizers' ? (
                                <>
                                    <button
                                        onClick={() => {
                                            setChosenCourse('appetizers');
                                        }}
                                        className={`${classes.btn} ${classes.activeBtn}`}
                                    >
                                        APPETIZERS
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => {
                                        setChosenCourse('appetizers');
                                    }}
                                    className={classes.btn}
                                >
                                    APPETIZERS
                                </button>
                            )}
                        </div>
                        <div className={classes.tabContainer}>
                            <div className={classes.icon}>
                                {chosenCourse === 'main' && (
                                    <DownArrow color="#f89811" size="3rem" />
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    setChosenCourse('main');
                                }}
                                className={classes.btn}
                            >
                                MAIN COURSE
                            </button>
                        </div>
                        <div className={classes.tabContainer}>
                            <div className={classes.icon}>
                                {chosenCourse === 'dessert' && (
                                    <DownArrow color="#f89811" size="3rem" />
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    setChosenCourse('dessert');
                                }}
                                className={classes.btn}
                            >
                                DESSERT
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <Container bgColor="#f7ede1">
                <section>{Menu}</section>
            </Container>
        </>
    );
};

export default MenuHeader;
