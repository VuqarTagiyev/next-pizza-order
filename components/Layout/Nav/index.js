import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <Container>
      <Item>
        <CallButton>
          <Image src="/images/telephone.png" width={32} height={32} alt="" />
        </CallButton>
        <Texts>
          <Text>ORDER NOW!</Text>
          <Text>999 999 99 99</Text>
        </Texts>
      </Item>
      <Item>
        <List>
          <ListItem>
            <Link href="/">
              <a>Home</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </ListItem>
          <Link href="/">
            <LinkContainer>
              <Image
                src="/images/logoo.png"
                width="140px"
                height="60px"
                alt=""
              />
            </LinkContainer>
          </Link>
          <ListItem>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </ListItem>
        </List>
      </Item>
      <Item>
        <Cart>
          <Link href="/cart">
            <LinkContainer>
              <Image src="/images/cart.png" width="30px" height="30px" alt="" />
              <Counter>2</Counter>
            </LinkContainer>
          </Link>
        </Cart>
      </Item>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  height: 100px;
  padding: 0 50px;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const LinkContainer = styled.a`
  cursor: pointer;
`;

const Item = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  &:nth-child(2) {
    flex: 3;
    justify-content: center;
  }
  &:last-child {
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(1) {
      flex: 3;
    }
  }
`;
const CallButton = styled.div`
  background: white;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
`;
const Texts = styled.div`
  margin-left: 20px;
  color: white;
`;
const Text = styled.div`
  &:first-child {
    font-size: 12px;
    font-weight: 500;
  }
  &:last-child {
    font-size: 20px;
    font-weight: bold;
  }
`;

const List = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  list-style: none;
  color: white;
`;
const ListItem = styled.div`
  margin: 20px;
  font-weight: 500;

  & > a {
    color: white;
    text-decoration: none;
  }
`;
const Cart = styled.div`
  position: relative;
  cursor: pointer;
`;
const Counter = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #d1411e;
`;
