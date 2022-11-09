import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../../styles/globals.css";

// Import components
import { Layout } from "../components";

// Toaster notification
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp);
