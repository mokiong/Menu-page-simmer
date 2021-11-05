import { NextPage } from 'next';

import classes from './products.module.css';

const Products: NextPage = () => {
    return (
        <div className={classes.productsLayout}>
            <section className={classes.container}>
                <div className={classes.header}>
                    <p>Brand Content</p>
                </div>
                <div className={classes.ratesHeader}>
                    <p>RATES VARY PER BRAND</p>
                </div>
                <div className={classes.list}>
                    <ul>
                        <li>Brand Messaging</li>
                        <li>Brand Story</li>
                        <li>Brand Research</li>
                        <li>Brand Strategy</li>
                        <li>Social Media</li>
                        <li>Copywriting</li>
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
                    <div className={classes.product}>
                        <span className={classes.productName}>
                            BRAND IDENTITY
                        </span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>
                            BRAND IDENTITY
                        </span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>WEB DESIGN</span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>
                            digital designs
                        </span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>
                            motion graphics
                        </span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>
                            web development
                        </span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>
                            SOCIAL MEDIA CONTENT/CAMPAIGN
                        </span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>PHOTO/VIDEO</span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>
                            PRINT AND PACKAGING
                        </span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>
                            BRAND RESEARCH & STORY
                        </span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>
                            FASHION DESIGN
                        </span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className={classes.product}>
                        <span className={classes.productName}>MOCK-UPS</span>
                        <button
                            className={`${classes.btn} ${classes.productBtn}`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </section>
            <section></section>
        </div>
    );
};

export default Products;
