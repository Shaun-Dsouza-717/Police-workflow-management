import React from "react";
import styled from "styled-components";

// Import images here
import image from "../images/commisionermumbai.png";

const ServiceWrap = styled.div`
  height: 75vh;
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto Slab", serif;
  padding: 20px;
  margin: 0;
`;

const Heading = styled.div`
  text-align: center;
`;

const P = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

const ServiceImageWrap = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServiceImage = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 75%;
  height: 400px;
`;

const ServiceImageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40%;
  height: 100%;
`;

const Service = () => {
  return (
    <>
      <Heading>
        <P>About Us</P>
      </Heading>
      <ServiceWrap>
        <ServiceImageText>
          <h3>
            Mumbai Police shall ensure the Rule of Law, enforce the law of the
            land impartially and firmly without fear or favour, and strive to
            create a fear free environment that is conducive to growth and
            development.
          </h3>
          <h3>
            Mumbai Police will remain committed to maintaining public order,
            preventing and detecting crime, maintaining and promoting communal
            harmony, ensuring a smooth flow of traffic, and taking strong action
            against terrorism, organized crime, anti-social / illicit activities
            / elements .
          </h3>
        </ServiceImageText>
        <ServiceImageWrap>
          <ServiceImage />
        </ServiceImageWrap>
      </ServiceWrap>
    </>
  );
};

export default Service;
