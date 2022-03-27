import styled from "styled-components";
import ProductCard from "./ProductCard/index";

const ProductList = ({ products }) => {
  return (
    <Container>
      <Title>THE BEST PIZZA IN TOWN</Title>
      <Desc>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Desc>
      <Wrapper>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 20px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: #444;
  width: 70%;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
