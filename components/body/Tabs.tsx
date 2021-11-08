import classes from './products.module.css';

interface TabsInterface {
    title: string;
    cards: string[];
    menu: string[];
}

const Tabs = ({ title, menu, cards }: TabsInterface) => {
    return (
        <div className={classes.productsLayout}>
            <section className={classes.container}>
                <div className={classes.header}>
                    <p>{title}</p>
                </div>
                <div className={classes.ratesHeader}>
                    <p>RATES VARY PER BRAND</p>
                </div>
                <div className={classes.list}>
                    <ul>
                        {menu.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={classes.description}>
                    <div>
                        <p className={classes.descriptionHeader}>PHASE ONE</p>
                        <p>
                            The foundation of a brand starts with its content.
                            It is our pleasure to be a part of your brand’s
                            story and it is our mission to develop a brand
                            personality that will really stick to its market.
                        </p>
                    </div>
                </div>
                <button className={`${classes.btn} ${classes.btnBuy}`}>
                    ADD TO CART
                </button>
            </section>
            <section className={classes.sectionTwo}>
                <div className={classes.header}>A la Carte</div>
                <div className={classes.gridTwo}>
                    {cards.map((card) => (
                        <div className={classes.product} key={card}>
                            <span className={classes.productName}>{card}</span>
                            <button
                                className={`${classes.btn} ${classes.productBtn}`}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Tabs;
