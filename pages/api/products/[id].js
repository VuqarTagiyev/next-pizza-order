import { products } from "../../../data/products";

const handler = async (req, res) => {
  console.log(req.query.id);

  const product = products.find((item) => item.id.toString() === req.query.id);
  res.status(200).json(product);
};

export default handler;
