import "../styles/global.css";
import Layout from "../components/Layout";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import ContextProvider from "../context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <PayPalScriptProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PayPalScriptProvider>
    </ContextProvider>
  );
};

export default MyApp;
