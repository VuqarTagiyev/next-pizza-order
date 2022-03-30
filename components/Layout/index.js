import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
