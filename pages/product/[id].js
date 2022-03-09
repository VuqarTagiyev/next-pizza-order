import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/images/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "lorem ipsum dolor sit amet, ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu t ",
  };

  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image src={pizza.img} layout="fill" alt="" objectFit="contain" />
        </ImageContainer>
      </Left>
      <Right>
        <Title>{pizza.name}</Title>
        <Price>${pizza.price[size]}</Price>
        <Description>{pizza.desc}</Description>
        <Choose>Choose the size</Choose>
        <Sizes>
          <Size onClick={() => setSize(0)}>
            <Image src="/images/size.png" alt="" layout="fill" />
            <Number>Small</Number>
          </Size>
          <Size onClick={() => setSize(1)}>
            <Image src="/images/size.png" alt="" layout="fill" />
            <Number>Medium</Number>
          </Size>
          <Size onClick={() => setSize(2)}>
            <Image src="/images/size.png" alt="" layout="fill" />
            <Number>Large</Number>
          </Size>
        </Sizes>
        <Choose>Choose additional ingredients</Choose>
        <Ingredients>
          <Option>
            <CheckBox type="checkbox" id="double" name="double" />
            <label htmlFor="double">Double Ingredients</label>
          </Option>
          <Option>
            <CheckBox type="checkbox" id="cheese" name="cheese" />
            <label htmlFor="cheese">Extra Cheese</label>
          </Option>
          <Option>
            <CheckBox type="checkbox" id="spicy" name="spicy" />
            <label htmlFor="spicy">Spicy Sauce</label>
          </Option>
          <Option>
            <CheckBox type="checkbox" id="garlic" name="garlic" />
            <label htmlFor="garlic">Garlic Sauce</label>
          </Option>
        </Ingredients>
        <Add>
          <Quantity type="number" defaultValue={1} />
          <Button>Add to Cart</Button>
        </Add>
      </Right>
    </Container>
  );
};

export default Product;

const Left = styled.div`
  flex: 1;
  height: 100%auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  padding-top: 20vh;
`;
const ImageContainer = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
`;

const Title = styled.h1``;
const Price = styled.span`
  color: #d1411e;
  font-size: 24px;
  font-weight: 400;
  border-bottom: 1px solid #d1411e;
  cursor: pointer;
`;
const Description = styled.p``;
const Choose = styled.h3`
  margin: 15px 0;
`;
const Sizes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: flex-end;
`;
const Size = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  &:nth-child(2) {
    width: 40px;
    height: 40px;
  }

  &:last-child {
    width: 50px;
    height: 50px;
  }
`;
const Number = styled.span`
  position: absolute;
  top: -5px;
  right: -20px;
  background: teal;
  color: white;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 10px;
  padding-bottom: 2px;
`;

const Ingredients = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
`;
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

const Add = styled.div``;

const Quantity = styled.input`
  width: 50px;
  height: 30px;
`;

const Button = styled.button`
  height: 30px;
  margin-left: 10px;
  background: #d1411e;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0 5px;
`;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 100px);

  @media (max-width: 768px) {
    height: auto;
    text-align: center;
    flex-direction: column;
    margin-top: 20px;
    & ${ImageContainer} {
      width: 70vw;
      height: 70vw;
    }

    & ${Right} {
      padding-top: 20px;
    }

    & ${Title} {
      margin: 5px;
    }

    & ${Sizes} {
      width: 100%;
      padding: 0 20px;
    }
    & ${Ingredients} {
      flex-direction: column;
    }
    & ${Option} {
      margin: 10px;
      font-size: 18px;
    }
    & ${CheckBox} {
      width: 25px;
      height: 25px;
    }
    & ${Add} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & ${Quantity} {
      height: 50px;
      width: 100px;
      padding: 10px 20px;
      font-size: 20px;
    }
    & ${Button} {
      height: 50px;
      padding: 10px 20px;
    }
  }
`;
