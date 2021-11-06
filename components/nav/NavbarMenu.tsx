import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';

import classes from './nav-bar-menu.module.css';

// interface NavBarMenuInterface {
//     selector: string;
// }

const NavBarMenu: NextPage = ({ children }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);

        return () => setIsBrowser(false);
    }, []);

    if (isBrowser) {
        return createPortal(children, document.getElementById('nav-menu')!);
    }

    return null;
};

export default NavBarMenu;
