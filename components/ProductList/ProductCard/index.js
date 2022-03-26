import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href="product/id" as={`product/${product.id}`}>
      <Container>
        <Image
          src={product.img}
          alt=""
          width="500"
          height="500"
          objectFit="cover"
        />
        <Title>{product.name}</Title>
        <Price>${product.price[0]}</Price>
        <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Desc>
      </Container>
    </Link>
  );
};

export default ProductCard;

const Container = styled.div`
  width: 44%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  cursor: pointer;
  & img {
    transition: all 0.6s;
  }
  &:hover img {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 34px;
  font-weight: bold;
  color: tomato;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const Price = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #666;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const Desc = styled.p`
  text-align: center;
  font-size: 20px;
  color: #777;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
