import Image from "next/image";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Container>
      <ImageWrap>
        <Image
          src="/icons/favicon.png"
          layout="fill"
          alt=""
          objectFit="cover"
        />
      </ImageWrap>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotationAnimation = keyframes`
 100% {  transform: rotate(360deg);}
`;

const ImageWrap = styled.div`
  width: 150px;
  position: relative;
  height: 150px;
  animation: ${rotationAnimation} 1s linear infinite;
`;
