import Image from "next/image";
import styled from "styled-components";

const Cart = () => {
  return (
    <Container>
      <Left>
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
      </Left>
      <Right>
        <Wrapper>
          <Title>CART TOTAL</Title>
          <TotalText>
            <TotalTextTitle>Subtotal:</TotalTextTitle>$79.60
          </TotalText>
          <TotalText>
            <TotalTextTitle>Discount:</TotalTextTitle>$0.00
          </TotalText>
          <TotalText>
            <TotalTextTitle>Total:</TotalTextTitle>$79.60
          </TotalText>
          <Button>CHECKOUT NOW!</Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Cart;

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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;

    & ${Table} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    & ${Tr} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      &:first-child {
        display: none;
      }
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
