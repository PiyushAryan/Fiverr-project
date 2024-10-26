import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Birthstone&display=swap" 
          rel="stylesheet" 
        />
        <link href="https://fonts.googleapis.com/css2?family=Birthstone&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
