import { useState } from 'react';

import Container from '../utils/Container';
import Tab from './Tab';
import TabButton from './TabButton';

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

const Services = [
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
                            <TabButton
                                key={btn}
                                buttonContent={btn}
                                chosenCourse={chosenCourse}
                                setChosenCourse={setChosenCourse}
                            />
                        ))}
                    </div>
                </div>
            </Container>
            <Container bgColor="#f7ede1">
                <section>
                    <Tab title={chosenCourse} cards={Cards} menu={Services} />
                </section>
            </Container>
        </>
    );
};

export default Menu;
