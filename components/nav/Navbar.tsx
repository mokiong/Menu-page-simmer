import { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';

import NavBarMenu from './NavbarMenu';
import navMenuClasses from './nav-bar-menu.module.css';
import classes from './nav-bar.module.css';
import Container from '../utils/Container';

const Navbar = () => {
    const [showNavBarMenu, setShowNavBarMenu] = useState(false);

    function navbarMenuHandler() {
        setShowNavBarMenu(!showNavBarMenu);
    }

    return (
        <Container bgColor="black">
            <div className={classes.nav}>
                <div className={classes.navMobile}></div>
                <ul>
                    <li>HOME</li>
                    <li>WORKS + ABOUT</li>
                    <li>MENU</li>
                </ul>
                <div className={classes.logo}>SIMMER STUDIOS</div>
                <div className={classes.navItem}>
                    <button className={classes.btn}>Get a quote</button>
                    <BsCart3 color="#f7ede1" size="3rem" />
                </div>
                <div className={classes.navItemMobile}>
                    <div>
                        <button
                            className={classes.hamburgerIcon}
                            onClick={navbarMenuHandler}
                        >
                            <GiHamburgerMenu size="6rem" />
                        </button>
                        {showNavBarMenu && (
                            <NavBarMenu>
                                <div className={navMenuClasses.overlay}>
                                    <div className={navMenuClasses.container}>
                                        <div
                                            className={
                                                navMenuClasses.btnContainer
                                            }
                                        >
                                            <button
                                                className={
                                                    navMenuClasses.closeBtn
                                                }
                                                onClick={navbarMenuHandler}
                                            >
                                                <VscChromeClose size="8rem" />
                                            </button>
                                        </div>
                                        <div className={navMenuClasses.menu}>
                                            <ul>
                                                <li>HOME</li>
                                                <li>WORKS + ABOUT</li>
                                                <li>MENU</li>
                                            </ul>
                                            <div
                                                className={
                                                    navMenuClasses.quoteBtnContainer
                                                }
                                            >
                                                <button
                                                    className={
                                                        navMenuClasses.quoteBtn
                                                    }
                                                >
                                                    Get a quote
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavBarMenu>
                        )}
                    </div>
                    <BsCart3 color="#f7ede1" size="6rem" />
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
