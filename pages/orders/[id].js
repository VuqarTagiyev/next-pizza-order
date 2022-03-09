import Image from "next/image";
import styled, { keyframes, css } from "styled-components";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return "done";
    if (index - status === 1) return "in-progress";
    if (index - status > 1) return "undone";
  };

  return (
    <Container>
      <Left>
        <Row>
          <Table>
            <THead>
              <Tr>
                <Th>Order ID</Th>
                <Th>Customer</Th>
                <Th>Adress</Th>
                <Th>Total</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td>
                  <OrderID>63546323453</OrderID>
                </Td>
                <Td>
                  <Customer>Jesse Pinkman</Customer>
                </Td>
                <Td>
                  <Adress>Elton st. 213-21 LA</Adress>
                </Td>
                <Td>
                  <Total>$39.80</Total>
                </Td>
              </Tr>
            </TBody>
          </Table>
        </Row>
        <Row>
          <Status status={statusClass(0)}>
            <Image src="/images/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <CheckedIcon>
              <Image src="/images/checked.png" alt="" width={20} height={20} />
            </CheckedIcon>
          </Status>
          <Status status={statusClass(1)}>
            <Image src="/images/bake.png" alt="" width={30} height={30} />
            <span>Preparing</span>
            <CheckedIcon>
              <Image src="/images/checked.png" alt="" width={20} height={20} />
            </CheckedIcon>
          </Status>
          <Status status={statusClass(2)}>
            <Image src="/images/bike.png" alt="" width={30} height={30} />
            <span>On the way</span>
            <CheckedIcon>
              <Image src="/images/checked.png" alt="" width={20} height={20} />
            </CheckedIcon>
          </Status>
          <Status status={statusClass(3)}>
            <Image src="/images/delivered.png" alt="" width={30} height={30} />
            <span>Delivered</span>
            <CheckedIcon>
              <Image src="/images/checked.png" alt="" width={20} height={20} />
            </CheckedIcon>
          </Status>
        </Row>
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
          <Button>PAID</Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Order;

const Left = styled.div`
  flex: 2;
`;

const Row = styled.div`
  &:last-child {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
`;
const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ status }) =>
    status === "undone" &&
    css`
      opacity: 0.3;
      & ${CheckedIcon} {
        display: none;
      }
    `}
  ${({ status }) =>
    status === "in-progress" &&
    css`
      animation: ${inProgressAnimation} 0.5s ease-in-out infinite alternate;
      & ${CheckedIcon} {
        display: none;
      }
    `}
`;

const inProgressAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;

  }
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
  margin-bottom: 50px;
`;

const THead = styled.thead``;
const TBody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td``;
const OrderID = styled.div``;
const Customer = styled.div``;
const Adress = styled.div``;
const Total = styled.div``;

const Right = styled.div`
  flex: 1;
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
  color: teal;
  background: white;
  margin-top: 20px;
  cursor: not-allowed;
`;

const CheckedIcon = styled.div``;

const Container = styled.div`
  padding: 50px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;

    & ${THead} {
      display: none;
    }

    & ${Tr} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    & ${Row} {
      &:last-child {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    & ${Status} {
      margin-bottom: 20px;
    }
    & ${Wrapper} {
      width: 100%;
    }
  }
`;
