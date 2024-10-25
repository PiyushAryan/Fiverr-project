import "@/styles/globals.css";
import {Inter } from 'next/font/google'
import localFont from "next/font/local";

// const birthstone = localFont({ src: './BirthstonePro.woff' })
const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  return (
  <main className={inter.className}>

  <Component {...pageProps} />;
</main>
  )
}
