import { React } from "react";
import styled from "styled-components";

const Text = styled.p`
  padding: 30px 0px 36px;
  margin: 0;
`;

const Footer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterComponent = () => {
  return (
    <Footer>
      <Text>Copyright @2023 Invictus | Developed By - Run Time Terror</Text>
    </Footer>
  );
};

export default FooterComponent;
