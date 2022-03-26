import { products } from "../../../data/products";

const handler = async (req, res) => {
  console.log(products);
  res.status(200).json(products);
};

export default handler;
