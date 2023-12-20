import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>biy daalt deegii bagshid</title>
        <meta name="description" content="biy daalt deegii bagshid" />
        <meta name="author" content="Nominerdene" />
        <meta name="og:type" content="card" />
        <meta name="og:title" content="biy daalt deegii bagshid" />
        <meta name="og:description" content="biy daalt deegii bagshid" />
        <meta name="og:image" content="/zurag.jpeg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/fav/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
