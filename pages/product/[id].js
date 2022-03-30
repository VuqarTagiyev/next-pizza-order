import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import styled from "styled-components";
import Loading from "../../components/utils/Loading";
import { useRouter } from "next/router";
import { Context } from "../../context";

import { server } from "../../config";

const Product = ({ item }) => {
  const [chosenOrder, setChosenOrder] = useState({
    size: 0,
    ingredients: [],
    quantity: 1,
    name: item.name,
    img: item.img,
  });
  const [totalPrice, setTotalPrice] = useState(item.price[0]);
  const { setBasketCount, basketCount } = useContext(Context);
  // -------
  const addIngredient = (e, ingredient) => {
    if (!e)
      setChosenOrder({
        ...chosenOrder,
        ingredients: chosenOrder.ingredients.filter(
          (element) => element.id !== ingredient.id
        ),
      });
    else
      setChosenOrder({
        ...chosenOrder,
        ingredients: [...chosenOrder.ingredients, ingredient],
      });
  };

  const setSize = (size) => {
    setChosenOrder({ ...chosenOrder, size });
  };

  // calculate total price

  const calcTotal = () => {
    let total = 0;
    total += item.price[chosenOrder.size];
    // if (chosenOrder.ingredients.length > 0) {
    for (let i = 0; i < chosenOrder.ingredients.length; i++) {
      total += chosenOrder.ingredients[i].price;
    }

    setTotalPrice(total);
  };

  // change quantity

  const changeQuantity = (quantity) => {
    setChosenOrder({ ...chosenOrder, quantity });
  };

  useEffect(() => {
    calcTotal();
  }, [chosenOrder]);

  // set setCartItems to local state

  const setCartItems = () => {
    setLoading(true);
    chosenOrder.totalPrice = totalPrice;
    let chartItems = [];
    if (localStorage.getItem("cartItems")) {
      chartItems = JSON.parse(localStorage.getItem("cartItems"));
    }

    localStorage.setItem(
      "cartItems",
      JSON.stringify([...chartItems, chosenOrder])
    );
    setBasketCount(basketCount + 1);
  };

  // Loading
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (loading) {
        router.push("/cart");
      }
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, [loading]);
  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image
            src={item.img}
            layout="fill"
            alt=""
            objectFit="contain"
            placeholder="blur"
            blurDataURL="data:..."
          />
        </ImageContainer>
      </Left>
      <Right>
        <Title>{item.name}</Title>
        <Price>${(totalPrice * chosenOrder.quantity).toFixed(2)}</Price>
        <Description>{item.desc}</Description>
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
          {item.ingredients.map((element) => {
            return (
              <Option key={element.id}>
                <CheckBox
                  type="checkbox"
                  id={element.name}
                  name={element.name}
                  onChange={(e) => addIngredient(e.target.checked, element)}
                />
                <label htmlFor={element.name}>{element.name}</label>
              </Option>
            );
          })}
        </Ingredients>
        <Add>
          <Quantity
            type="number"
            defaultValue={chosenOrder.quantity}
            min={1}
            max={5}
            onChange={({ target }) => changeQuantity(parseInt(target.value))}
          />
          <Button onClick={setCartItems}>Add to Cart</Button>
        </Add>
      </Right>
      {loading && <Loading />}
    </Container>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const products = await fetch(`${server}/api/products`).then((res) =>
    res.json()
  );

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${server}/api/products/${params.id}`);
  const item = await res.json();

  return {
    props: {
      item,
    },
  };
};

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
  user-select: none;
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
