import Image from "next/image";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Item>
        <Image
          src="/images/bg.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </Item>
      <Item>
        <Card>
          <Motto>OH YES, WE DID THE BEST PIZZA IN THE WORLD.</Motto>
        </Card>
        <Card>
          <Title>FIND OUT RESTAURANTS</Title>
          <Text>
            4254 L. Don Road #235
            <br /> San Francisco, CA 94115
            <br /> (415) 555-1234
          </Text>
          <Text>
            5241 R. Don Road #845
            <br /> San Francisco, CA 94115
            <br /> (415) 555-1234
          </Text>
          <Text>
            5241 R. Don Road #845
            <br /> San Francisco, CA 94115
            <br /> (415) 555-1234
          </Text>
          <Text>
            5241 R. Don Road #845
            <br /> San Francisco, CA 94115
            <br /> (415) 555-1234
          </Text>
        </Card>
        <Card>
          <Title>WORKING HOURS</Title>
          <Text>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 AM - 9:00 PM
          </Text>
          <Text>
            SATURDAY - SUNDAY
            <br /> 11:00 AM - 11:00 PM
          </Text>
        </Card>
      </Item>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: calc(70vh - 100px);
  background: #222;
  display: flex;
  @media (max-width: 768px) {
    height: auto;
    text-align: center;
  }
`;

const Item = styled.div`
  flex: 1;
  position: relative;
  display: flex;

  &:last-child {
    flex: 2;
    justify-content: space-between;
    padding: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    &:first-child {
      display: none;
    }
  }
`;

const Card = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #b7903c;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 20px;
  }
`;

const Text = styled.p`
  color: lightgray;
  padding: 10px 0;
`;

const Motto = styled.h2`
  color: rgb(211, 211, 211);
`;
