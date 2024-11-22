import '@/styles/globals.css';
import '@/styles/preflight.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
// import '@mantine/core/styles.css';

import Provider from '@/components/utils/Provider';
import Layout from '../components/appLayout/Layout';

// Check if API mocking should be enabled
const enableMocking = process.env.NEXT_PUBLIC_API_MOCKING === 'true';

if (enableMocking) {
  (async function () {
    const { worker } = await import('../mocks/browser'); // Lazy load the worker
    worker.start(); // Start the worker for mock API handling
  })();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <title>NextJS Mantine & Tw</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
