import Document, { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Preload: FC = () => {
    return (
        <Head>
            <link
                rel="preload"
                href="/fonts/BeVietnamPro/BeVietnamPro-Bold.ttf"
                as="font"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/BeVietnamPro/BeVietnamPro-SemiBold.ttf"
                as="font"
                crossOrigin="anonymous"
            />

            <link
                rel="preload"
                href="/fonts/Nord/Nord-Bold.ttf"
                as="font"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Nord/Nord-Book.ttf"
                as="font"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Baskerville/Baskerville-SemiBold.ttf"
                as="font"
                crossOrigin="anonymous"
            />
        </Head>
    );
};

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Preload />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
