import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions/";
const Home = () => {
  const { orders } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.orders.setOrders([1, 2, 3]));
  }, []);

  useEffect(() => {
    console.log(orders);
  }, [orders]);
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
