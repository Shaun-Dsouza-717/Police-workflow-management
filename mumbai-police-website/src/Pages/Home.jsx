import { React, useState } from "react";
import styled from "styled-components";

// Import Components
import Navbar from "../Components/navbar";
import Service from "../Components/service-component";
import FooterComponent from "../Components/Footer";

// Import images
import aboutimg from "../images/aboutimg.png";
import station from "../images/station.png";
import AdminNavbar from "../Components/adminnavbar";
import { useParams } from "react-router";

const Hero = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5rem 2rem;
  ::before {
    content: "";
    position: absolute;
    top: 29%;
    left: 30%;
    width: 0.2%;
    height: 12%;
    background-color: #D0D0D0;
  }
`;

const Image = styled.img`
  width: 44%;
`;

const Home = (props) => {
  const  isOfficial  = 1;

  
  return (
    <div>
      {isOfficial ? <AdminNavbar/> : <Navbar /> }
      <Hero>
        <Image src={aboutimg} alt="No image" />
        <Image src={station} alt="No image" />
      </Hero>
      <Service />
      <FooterComponent />
    </div>
  );
};

export default Home;
