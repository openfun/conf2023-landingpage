import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default ({ Component, pageProps }: AppProps) => {
  return (
    <main
      className={`${inter.variable} font-sans min-h-screen text-fun-blue-900 relative`}
    >
      <Head>
        <title>Conférence 2023 - FUN</title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>
      <div className="flex h-14 justify-between p-1">
        <img
          src="logorf.png"
          className="w-24 object-contain"
          alt="Logo de la République Française"
        />
        <img
          src="logo.png"
          className="w-24 object-contain"
          alt="Logo de France Université Numérique"
        />
        <div className="w-24" />
      </div>

      <Component {...pageProps} />
    </main>
  );
};
