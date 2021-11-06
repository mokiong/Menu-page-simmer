import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/nav/Navbar';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Navbar />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
