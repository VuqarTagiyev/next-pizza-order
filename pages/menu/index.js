import styled from "styled-components";
import Image from "next/image";

const Menu = () => {
  return (
    <Container>
      <Image
        src="/images/menu.png"
        layout="responsive"
        width={500}
        height={500}
        objectFit="contain"
        alt=""
        placeholder="blur"
        blurDataURL="data:..."
      />
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  position: relative;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;
