import "../styles/global.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PayPalScriptProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </PayPalScriptProvider>
  );
};

export default MyApp;
