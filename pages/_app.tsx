import '@/styles/globals.css';
import '@/styles/preflight.css';

// import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Provider from '@/components/utils/Provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <MantineProvider theme={theme}>
    <Provider>
      <Head>
        <title>NextJS Mantine & Tw</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <div className="h-screen w-screen">
        <Component {...pageProps} />
      </div>
    </Provider>
    // </MantineProvider>
  );
}
