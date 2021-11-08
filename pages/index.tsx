import type { NextPage } from 'next';

import Specialty from '../components/body/Specialty';
import Menu from '../components/body/Menu';
import MenuHeader from '../components/header/MenuHeader';

const Home: NextPage = () => {
    return (
        <>
            <MenuHeader />
            <Menu />
            <Specialty />
        </>
    );
};

export default Home;
