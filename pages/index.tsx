import type { NextPage } from 'next';

import Specialty from '../components/body/Specialty';
import MenuHeader from '../components/header/Header';

const Home: NextPage = () => {
    return (
        <>
            <MenuHeader />
            <Specialty />
        </>
    );
};

export default Home;
