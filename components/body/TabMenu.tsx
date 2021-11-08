import { useState } from 'react';
import Tabs from '../body/Tabs';
import DownArrow from '../Icon/DownArrow';
import Container from '../utils/Container';

import classes from './tabmenu.module.css';

const Cards = [
    'Brand Identity',
    'Brand Identity',
    'Web Design',
    'Digital Designs',
    'Motion graphics',
    'Web Development',
    'Social Media Content/Campaign',
    'Photo/Video',
    'Print and Packaging',
    'Brand research & story',
    'Fashion design',
    'mock-ups',
];
const TabItems = [
    'Brand Messaging',
    'Brand Story',
    'Brand Research',
    'Brand Strategy',
    'Social Media',
    'Copywriting',
];

const TabMenu = () => {
    const [chosenCourse, setChosenCourse] = useState<string>('Appetizers');

    return (
        <>
            <Container bgColor="black">
                <div className={classes.container}>
                    <div className={classes.tabs}>
                        <div className={classes.tabContainer}>
                            <div className={classes.icon}>
                                {chosenCourse === 'Appetizers' && (
                                    <DownArrow color="#f89811" size="3rem" />
                                )}
                            </div>
                            {chosenCourse === 'Appetizers' ? (
                                <>
                                    <button
                                        onClick={() => {
                                            setChosenCourse('Appetizers');
                                        }}
                                        className={`${classes.btn} ${classes.activeBtn}`}
                                    >
                                        APPETIZERS
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => {
                                        setChosenCourse('Appetizers');
                                    }}
                                    className={classes.btn}
                                >
                                    APPETIZERS
                                </button>
                            )}
                        </div>
                        <div className={classes.tabContainer}>
                            <div className={classes.icon}>
                                {chosenCourse === 'Main' && (
                                    <DownArrow color="#f89811" size="3rem" />
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    setChosenCourse('Main');
                                }}
                                className={classes.btn}
                            >
                                MAIN COURSE
                            </button>
                        </div>
                        <div className={classes.tabContainer}>
                            <div className={classes.icon}>
                                {chosenCourse === 'Dessert' && (
                                    <DownArrow color="#f89811" size="3rem" />
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    setChosenCourse('Dessert');
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
                <section>
                    <Tabs title={chosenCourse} cards={Cards} menu={TabItems} />
                </section>
            </Container>
        </>
    );
};

export default TabMenu;
