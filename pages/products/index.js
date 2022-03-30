import ProductList from "../../components/ProductList";
import { server } from "../../config";

const Products = ({ products }) => {
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Products;

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
