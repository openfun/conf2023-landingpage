import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Montserrat } from "@next/font/google";
import Head from "next/head";
import Script from "next/script";

declare let pa: any;
declare let _paq: any;

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
        <title>IA & Éducation 2023 - La Conférence</title>
        <link rel="shortcut icon" href="logo.png" />

        <meta name="twitter:card" content="summary" />
        <meta
          property="og:title"
          content="IA & Éducation 2023 - La Conférence"
        />
        <meta
          property="og:description"
          content="8 & 9 juin 2023 au Dock B · Paris Pantin"
        />
        <meta
          name="og:image"
          content="https://www.iaconference.education/header_gradient.webp"
        />
        <meta
          name="image"
          property="og:image"
          content="https://www.iaconference.education/header_gradient.webp"
        />
      </Head>
      <Script
        type="text/javascript"
        src="https://tag.aticdn.net/js-sdk/piano-analytics-6.8.2.js"
        onLoad={() => {
          pa.setConfiguration("site", 637174);
          pa.setConfiguration("collectDomain", "https://logs1412.xiti.com");
          pa.privacy.setMode("exempt");
          _paq.push(["sendEvent", "page.display", { page: "index" }]);
        }}
      />
      <Component {...pageProps} />
    </main>
  );
};
