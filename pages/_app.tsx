import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <title>CVBuilder</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
                />
                <meta name="description" content="website for create resume" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
