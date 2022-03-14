import Image from "next/image";
import styled from "styled-components";

const ProductCard = () => {
  return (
    <Container>
      <Image src="/images/pizza.png" alt="" width="500" height="500" />
      <Title>California Pizza.</Title>
      <Price>$29.90</Price>
      <Desc>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </Desc>
    </Container>
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
