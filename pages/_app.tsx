import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SGPA Calculator</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="description" content="SGPA Calculator for Sahyadri College students" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp; 