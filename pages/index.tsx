import type { NextPage } from 'next';

import Products from '../components/body/Products';
import Specialty from '../components/body/Specialty';
import MenuHeader from '../components/header/Header';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
    return (
        <Layout>
            <MenuHeader />
            <Products />
            <Specialty />
        </Layout>
    );
};

export default Home;
