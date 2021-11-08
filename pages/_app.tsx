import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/nav/Navbar';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </Layout>
    );
}

export default MyApp;
