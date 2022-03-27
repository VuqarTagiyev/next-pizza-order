import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import { server } from "../config";

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Pizza Order</title>
        <link rel="icon" href="/icons/favicon.png" />
        <meta name="description" content="Best pizza shop" />
      </Head>
      <Featured />
      <ProductList products={products} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const products = await fetch(`${server}/api/products`).then((res) =>
    res.json()
  );
  return {
    props: {
      products,
    },
  };
};
