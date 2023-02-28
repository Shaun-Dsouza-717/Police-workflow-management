import React from "react";
import FooterComponent from "../Components/Footer";
import Navbar from "../Components/navbar";
import styled from "styled-components";
import MapComp from "../Components/MapComp";
import PieChart from "../Components/Pie";
import PieChartComp from "../Components/Pie";


const MapContainer = styled.div`
  width: 100%;
  height: 1531px;
  background-color: <div id= "FFFFFF" ></div>;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 600;
  text-align: center;
  font-size: 56px;
  margin-top: 29px;
  margin-bottom: 10px;
`;

const MapWrap = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60%;
`;

const PieWrap = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`;

const LabelWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 90%;
  margin-bottom: 90px;
`;

const LabelWrapHeading = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 600;
  text-align: center;
  font-size: 46px;
  margin-top: 29px;
  margin-bottom: 10px;
`;

const LabelContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 85px;
`;

const LabelRow = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
  justify-content: flex-start;
  gap: 20px;
`;

const ColorBlock = styled.div`
  width: 10%;
  height: 50%;
  background-color: ${(props) => props.color};
`;

const LabelText = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 600;
  text-align: center;
  font-size: 36px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SearchBar = styled.input`
  width: 80%;
  height: 10%;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  padding: 10px;
  font-family: "Roboto Slab";
  font-style: normal;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  outline: none;
  &:focus {
    border: 1px solid #000000;
  }
`;

const Map = () => {
  const labelData = [
    {
      color: "red",
      text: "High Criminal Activity",
    },
    {
      color: "yellow",
      text: "Medium Criminal Activity",
    },
    {
      color: "lightgreen",
      text: "Low Criminal Activity",
    },
    {
      color: "lightblue",
      text: "No Criminal Activity",
    },
  ];

  return (
    <div>
      <Navbar />
      <MapContainer>
        <Heading>Map of Mumbai</Heading>
        <MapWrap>
          <MapComp />
          <LabelWrap>
            <LabelWrapHeading>Zone-wise Crime Analysis</LabelWrapHeading>
            <LabelContainer>
              {labelData.map((data) => {
                return (
                  <LabelRow key={data.id}>
                    <ColorBlock color={data.color}></ColorBlock>
                    <LabelText>{data.text}</LabelText>
                  </LabelRow>
                );
              })}
            </LabelContainer>
          </LabelWrap>
        </MapWrap>
        <PieWrap>
          <LabelWrap
            style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
          >
            <LabelWrapHeading>
              Different crime analysis by zone
            </LabelWrapHeading>
            <SearchBar placeholder="Search By Zone" />
                  </LabelWrap>
                  <PieChartComp/>
        </PieWrap>
      </MapContainer>
      <FooterComponent />
    </div>
  );
};

export default Map;
