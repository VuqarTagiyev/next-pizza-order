import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Orders = () => {
  return (
    <Container>
      <h1>Orders</h1>
      <Item>
        <OrderHeader>
          <OrderID>
            <OrderIDText>Order ID:</OrderIDText> #14135243525246245
          </OrderID>
          <OrderDate>
            <OrderDateText>Order Date:</OrderDateText> 12/12/2020
          </OrderDate>
        </OrderHeader>
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
            <Tr>
              <Td>
                <ImageContainer>
                  <Image
                    src="/images/pizza.png"
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </ImageContainer>
              </Td>
              <Td>
                <Name>CORALZO</Name>
              </Td>
              <Td>
                <Extras>Double ingredient, spicy sauce</Extras>
              </Td>
              <Td>
                <Price>$19.90</Price>
              </Td>
              <Td>
                <Quantity>2</Quantity>
              </Td>
              <Td>
                <Total>$39.80</Total>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <ImageContainer>
                  <Image
                    src="/images/pizza.png"
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </ImageContainer>
              </Td>
              <Td>
                <Name>CORALZO</Name>
              </Td>
              <Td>
                <Extras>Double ingredient, spicy sauce</Extras>
              </Td>
              <Td>
                <Price>$19.90</Price>
              </Td>
              <Td>
                <Quantity>2</Quantity>
              </Td>
              <Td>
                <Total>$39.80</Total>
              </Td>
            </Tr>
          </TBody>
        </Table>
        <TotalCost>
          <p>Total cost: </p> $79.60
        </TotalCost>
        <Tracking>
          <Status>
            Status: <span> Preparing</span>
          </Status>
          <Link href="/orders/12">
            <a>Track</a>
          </Link>
        </Tracking>
      </Item>
      <Item>
        <OrderHeader>
          <OrderID>
            <OrderIDText>Order ID:</OrderIDText> #14135243525246245
          </OrderID>
          <OrderDate>
            <OrderDateText>Order Date:</OrderDateText> 12/12/2020
          </OrderDate>
        </OrderHeader>
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
            <Tr>
              <Td>
                <ImageContainer>
                  <Image
                    src="/images/pizza.png"
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </ImageContainer>
              </Td>
              <Td>
                <Name>CORALZO</Name>
              </Td>
              <Td>
                <Extras>Double ingredient, spicy sauce</Extras>
              </Td>
              <Td>
                <Price>$19.90</Price>
              </Td>
              <Td>
                <Quantity>2</Quantity>
              </Td>
              <Td>
                <Total>$39.80</Total>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <ImageContainer>
                  <Image
                    src="/images/pizza.png"
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </ImageContainer>
              </Td>
              <Td>
                <Name>CORALZO</Name>
              </Td>
              <Td>
                <Extras>Double ingredient, spicy sauce</Extras>
              </Td>
              <Td>
                <Price>$19.90</Price>
              </Td>
              <Td>
                <Quantity>2</Quantity>
              </Td>
              <Td>
                <Total>$39.80</Total>
              </Td>
            </Tr>
          </TBody>
        </Table>
        <TotalCost>
          <p>Total cost: </p> $79.60
        </TotalCost>
        <Tracking>
          <Status>
            Status: <span> Preparing</span>
          </Status>
          <Link href="/orders/12">
            <a>Track</a>
          </Link>
        </Tracking>
      </Item>
    </Container>
  );
};

export default Orders;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
`;

const OrderID = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const OrderIDText = styled.p`
  font-weight: 400;
`;

const OrderDate = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
const OrderDateText = styled.p`
  font-weight: 400;
`;

const TotalCost = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 20px;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 30px;
  padding-right: 40px;
  color: #fff;
  & p {
    color: white;
    padding-right: 10px;
    font-size: 16px;
  }
`;

const Item = styled.div`
  margin: 10px 0;
  border: 5px solid rgba(0, 0, 0, 0.8);
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const THead = styled.thead`
  font-size: 24px;
`;
const TBody = styled.tbody``;
const Tr = styled.tr`
  text-align: left;
`;
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
  max-height: 300px;
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
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px;

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

const Tracking = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;

  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    background: greenyellow;
    box-shadow: 0 0 1px 2px black;
    border-radius: 5px;
    color: black;
    transition: 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Status = styled.div`
  font-size: 18px;

  & > span {
    color: greenyellow;
  }
`;
