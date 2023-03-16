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
      className={`${inter.variable} font-sans min-h-screen text-fun-blue-900 relative`}
    >
      <Head>
        <title>Conférence 2023 - FUN</title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>
      <div className="flex h-14 justify-between p-1">
        <div className="w-20 md:w-36">
          <img
            src="logorf.png"
            className="object-contain w-12"
            alt="Logo de la République Française"
          />
        </div>
        <div className="w-36">
          <img
            src="logo.png"
            className="object-contain w-36"
            alt="Logo de France Université Numérique"
          />
        </div>
        <div className="w-20 md:w-36" />
      </div>

      <Component {...pageProps} />
    </main>
  );
};
