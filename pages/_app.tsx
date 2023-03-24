import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Montserrat } from "@next/font/google";
import Head from "next/head";

const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-base",
});

export default ({ Component, pageProps }: AppProps) => {
  return (
    <main
      className={`${inter.variable} font-sans min-h-screen text-fun-black-500 relative`}
    >
      <Head>
        <title>Conférence 2023 - FUN</title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
};
