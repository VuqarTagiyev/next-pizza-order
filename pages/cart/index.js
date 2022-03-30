import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import CheckoutButton from "../../components/PayPal/Button";
import Link from "next/link";
import { generateID } from "../../components/utils/generateID";

import { Context } from "../../context/index";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const { setBasketCount } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      setItems(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  const calcTotalPrice = () => {
    let t = 0;
    for (let i = 0; i < items.length; i++) {
      t += items[i].totalPrice * items[i].quantity;
    }
    setTotal(t);
  };

  useEffect(() => {
    calcTotalPrice();
  }, [items]);

  const setToLocalStorage = () => {
    let orders = {
      _id: generateID(),
      items,
      date: new Date().toISOString().split("T")[0],
      total,
    };
    if (localStorage.getItem("orders")) {
      let ordersArr = JSON.parse(localStorage.getItem("orders"));
      ordersArr.push(orders);
      localStorage.setItem("orders", JSON.stringify(ordersArr));
    } else {
      localStorage.setItem("orders", JSON.stringify([orders]));
    }

    localStorage.removeItem("cartItems");
    setItems([]);
  };

  const handlePayment = () => {
    setIsCheckout(false);
    setToLocalStorage();
    setIsPaid(true);
    setBasketCount(0);
  };

  // paypal create order

  const createOrderHandler = (data, actions) => {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total.toFixed(2),
          },
        },
      ],
    });
  };

  return (
    <Container>
      {!isPaid && (
        <Left>
          {items.length > 0 ? (
            <Table>
              <THead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Name</Th>
                  <Th>Extras</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th>Total</Th>
                </Tr>
              </THead>
              <TBody>
                {items.map((item, index) => (
                  <Tr key={index}>
                    <Td>
                      <ImageContainer>
                        <Image
                          src={item.img}
                          objectFit="cover"
                          layout="fill"
                          alt=""
                        />
                      </ImageContainer>
                    </Td>
                    <Td>
                      <Name>{item.name}</Name>
                    </Td>
                    <Td>
                      <Extras>
                        {item.ingredients.length > 0
                          ? item.ingredients.map((extra) => (
                              <span key={extra.id}>{extra.name}, </span>
                            ))
                          : "No extras"}
                      </Extras>
                    </Td>
                    <Td>
                      <Price>${item.totalPrice.toFixed(2)}</Price>
                    </Td>
                    <Td>
                      <Quantity>{item.quantity}</Quantity>
                    </Td>
                    <Td>
                      <Total>
                        ${(item.totalPrice * item.quantity).toFixed(2)}
                      </Total>
                    </Td>
                  </Tr>
                ))}
              </TBody>
            </Table>
          ) : (
            <NoItems>
              <p>Cart is empty</p>
            </NoItems>
          )}
        </Left>
      )}
      {isPaid && (
        <Left>
          <Paid>
            <h1>Thank you for your order!</h1>
            <p>Your order will be delivered soon.</p>
            <p>You can track your orders here:</p>
            <Link href="/orders">
              <TruckButton>Track order</TruckButton>
            </Link>
          </Paid>
        </Left>
      )}
      <Right>
        <Wrapper>
          <Title>CART TOTAL</Title>
          <TotalText>
            <TotalTextTitle>Subtotal:</TotalTextTitle>$
            {total ? total.toFixed(2) : (0).toFixed(2)}
          </TotalText>
          <TotalText>
            <TotalTextTitle>Discount:</TotalTextTitle>$0.00
          </TotalText>
          <TotalText>
            <TotalTextTitle>Total:</TotalTextTitle>$
            {total ? total.toFixed(2) : (0).toFixed(2)}
          </TotalText>
          <Button
            disabled={!(items.length > 0) && true}
            onClick={() => setIsCheckout(true)}
          >
            CHECKOUT NOW!
          </Button>
          {isCheckout && (
            <>
              <TestAccount>
                <TestAccountTitle>Paypal test account</TestAccountTitle>
                <TestAccountText>
                  sb-gylzt14559837@personal.example.com
                </TestAccountText>

                <TestAccountText>jv-Dd-Q0</TestAccountText>
              </TestAccount>
              <CheckoutButton
                createOrderHandler={createOrderHandler}
                handlePayment={() => handlePayment()}
              />
            </>
          )}
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Cart;

const TestAccount = styled.div``;

const TestAccountText = styled.p`
  font-size: 12px;
  margin: 4px 0;
`;

const TestAccountTitle = styled.h3`
  font-weight: 400;
`;
const NoItems = styled.div`
  padding: 10px;
  background: rgba(235, 64, 52, 0.15);
  margin-right: 20px;
  & > p {
    color: rgba(235, 64, 52);
    font-weight: 500;
    padding: 10px 0;
    font-size: 18px;
  }
`;

const Paid = styled.div`
  background: rgba(27, 214, 100, 0.5);
  margin-right: 20px;
  padding: 20px;
  color: rgba(33, 156, 100);

  & > p {
    margin-bottom: 12px;
  }
`;

const TruckButton = styled.a`
  padding: 8px;
  background: white;
  font-weight: 500;
  box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 1;
`;
const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const THead = styled.thead``;
const TBody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td``;
const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;
const Name = styled.div`
  font-weight: 500;
  color: #d1411e;
  font-size: 18px;
`;
const Extras = styled.div``;
const Price = styled.div``;
const Quantity = styled.div``;
const Total = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 90%;
  background: #333;
  padding: 50px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;
const Title = styled.h2`
  margin-bottom: 20px;
`;
const TotalText = styled.div`
  margin: 3px 0;
`;
const TotalTextTitle = styled.b`
  margin-right: 10px;
`;
const Button = styled.button`
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  color: #d1411e;
  margin-top: 20px;
`;

const Container = styled.div`
  padding: 50px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;

    & ${Paid} {
      margin-right: 0;
      margin-bottom: 10px;
    }
    & ${NoItems} {
      margin-right: 0;
      margin-bottom: 10px;
    }

    & ${Table} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & ${THead} {
      display: none;
    }

    & ${Tr} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    & ${ImageContainer} {
      width: 35vw;
      height: 35vw;
    }

    & ${Name}, & ${Total} {
      font-size: 24px;
    }
    & ${Extras}, & ${Price}, & ${Quantity} {
      font-size: 22px;
    }

    & ${Wrapper} {
      width: 100%;
    }
  }
`;
