import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/featured.jpg",
    "/images/featured2.jpg",
    "/images/featured3.jpg",
  ];

  // const handlerArrow = (direction) => {
  //   if (direction === "l") {
  //     setIndex(index !== 0 ? index - 1 : 2);
  //   } else if (direction === "r") {
  //     setIndex(index !== 2 ? index + 1 : 0);
  //   }
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index !== 2 ? index + 1 : 0);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Container>
      {/* <ArrowContainer onClick={() => handlerArrow("l")}>
        <Image
          src="/images/arrowl.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </ArrowContainer> */}
      <Wrapper style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image} alt="" objectFit="cover" layout="fill" />
          </ImageContainer>
        ))}
      </Wrapper>
      {/* <ArrowContainer onClick={() => handlerArrow("r")}>
        <Image
          src="/images/arrowr.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </ArrowContainer> */}
    </Container>
  );
};

export default Featured;

const Container = styled.div`
  height: 60vh;
  background: #d1411e;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    height: 50vh;
  }
`;
const ArrowContainer = styled.div`
  position: absolute;
  width: 10%;
  height: 20%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  &:first-child {
    left: 0;
  }
  &:last-child {
    right: 0;
  }
`;

const Wrapper = styled.div`
  width: 300vw;
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in-out;
`;
const ImageContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
`;
