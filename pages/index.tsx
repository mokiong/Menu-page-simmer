import type { NextPage } from 'next';

import Specialty from '../components/body/Specialty';
import MenuHeader from '../components/header/MenuHeader';

const Home: NextPage = () => {
    return (
        <>
            <MenuHeader />
            <Specialty />
        </>
    );
};

export default Home;
