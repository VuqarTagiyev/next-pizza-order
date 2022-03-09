import React from "react";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Pizza Order</title>
        <link rel="icon" href="/icons/favicon.png" />
        <meta name="description" content="Best pizza shop" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  );
};

export default Home;
