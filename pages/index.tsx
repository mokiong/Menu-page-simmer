import type { NextPage } from 'next';

import Specialty from '../components/body/Specialty';
import TabMenu from '../components/body/TabMenu';
import MenuHeader from '../components/header/MenuHeader';

const Home: NextPage = () => {
    return (
        <>
            <MenuHeader />
            <TabMenu />
            <Specialty />
        </>
    );
};

export default Home;
