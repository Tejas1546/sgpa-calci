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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#2c3e50" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SGPA Calculator" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp; 