import { useState } from 'react';
import Tab from './Tab';
import DownArrow from '../Icon/DownArrow';
import Container from '../utils/Container';

import classes from './menu.module.css';

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

const buttons = ['Appetizers', 'Main', 'Dessert'];

const Menu = () => {
    const [chosenCourse, setChosenCourse] = useState<string>('Appetizers');

    return (
        <>
            <Container bgColor="black">
                <div className={classes.container}>
                    <div className={classes.tabs}>
                        {buttons.map((btn) => (
                            <div className={classes.tabContainer} key={btn}>
                                <div className={classes.tabSection}>
                                    <div className={classes.icon}>
                                        <DownArrow
                                            color="#f89811"
                                            size="3rem"
                                        />
                                    </div>

                                    <button
                                        onClick={() => {
                                            setChosenCourse(btn);
                                        }}
                                        className={
                                            chosenCourse === btn &&
                                            btn === 'Appetizers'
                                                ? `${classes.btn} ${classes.activeBtn}`
                                                : `${classes.btn}`
                                        }
                                    >
                                        {btn}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <Container bgColor="#f7ede1">
                <section>
                    <Tab title={chosenCourse} cards={Cards} menu={TabItems} />
                </section>
            </Container>
        </>
    );
};

export default Menu;
