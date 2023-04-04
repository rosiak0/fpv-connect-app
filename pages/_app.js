import { useState, createContext } from "react";

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import AppContext from "../context/AppContext";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <SessionProvider session={pageProps.session}>
      <AppContext.Provider value={{ showNavLinks, setShowNavLinks }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
