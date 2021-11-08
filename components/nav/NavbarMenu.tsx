import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { FC } from 'react';

const NavBarMenu: FC = ({ children }) => {
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
