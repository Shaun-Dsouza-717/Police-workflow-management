import React, { useState } from "react";
import styled from "styled-components";

// Import Components
import Navbar from "../Components/navbar";
import FooterComponent from "../Components/Footer";

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto Slab", serif;
  padding: 20px;
`;

const Question = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Arrow = styled.div`
  margin-right: 10px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0)")};
  transition: transform 0.3s ease-in-out;
`;

const Answer = styled.p`
  font-size: 16px;
  text-align: justify;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding-left: 10px;
`;

const FAQItem = styled.div`
  width: 80%;
  margin-bottom: 20px;
`;

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <>
      <Navbar />
      <FAQContainer>
        <h1>FAQs</h1>
        <FAQItem>
          <Question onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}>
            <Arrow isOpen={openIndex === 0} />
            What should I do if I need to report a crime?
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt=""
              style={{ width: "2%", marginLeft: 10 }}
            />
          </Question>
          <Answer isOpen={openIndex === 0}>
            If it is an emergency, call 100 immediately. For non-emergency
            situations, you can call the non-emergency police line for your area
            or visit your local police station to report the crime in person.
          </Answer>
        </FAQItem>

        <FAQItem>
          <Question onClick={() => setOpenIndex(openIndex === 1 ? -1 : 1)}>
            <Arrow isOpen={openIndex === 1} />
            How can I obtain a copy of a police report?
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt=""
              style={{ width: "2%", marginLeft: 10 }}
            />
          </Question>
          <Answer isOpen={openIndex === 1}>
            You can request a copy of a police report by visiting your local
            police station or by contacting the records department of the police
            department that responded to the incident. You may need to provide
            identification and pay a fee for the report.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question onClick={() => setOpenIndex(openIndex === 2 ? -1 : 2)}>
            <Arrow isOpen={openIndex === 2} />
            How do I file a complaint against a police officer?
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt=""
              style={{ width: "2%", marginLeft: 10 }}
            />
          </Question>
          <Answer isOpen={openIndex === 2}>
            You can file a complaint against a police officer by visiting your
            local police station or contacting the internal affairs department
            of the police department where the officer works. You may also be
            able to file a complaint online through the police department's
            website.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question onClick={() => setOpenIndex(openIndex === 3 ? -1 : 3)}>
            <Arrow isOpen={openIndex === 3} />
            What are my rights during a traffic stop?
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt=""
              style={{ width: "2%", marginLeft: 10 }}
            />
          </Question>
          <Answer isOpen={openIndex === 3}>
            During a traffic stop, you have the right to remain silent and to
            not incriminate yourself. You also have the right to request a
            lawyer if you are arrested. You should always be respectful and
            follow the officer's instructions.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question onClick={() => setOpenIndex(openIndex === 4 ? -1 : 4)}>
            <Arrow isOpen={openIndex === 4} />
            How do I get my vehicle released from impound?
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt=""
              style={{ width: "2%", marginLeft: 10 }}
            />
          </Question>
          <Answer isOpen={openIndex === 4}>
            To get your vehicle released from impound, you will need to contact
            the impound lot where your vehicle is being held. You may need to
            provide identification and pay a fee to retrieve your vehicle.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question onClick={() => setOpenIndex(openIndex === 5 ? -1 : 5)}>
            <Arrow isOpen={openIndex === 5} />
            How do I obtain a permit for an event?
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt=""
              style={{ width: "2%", marginLeft: 10 }}
            />
          </Question>
          <Answer isOpen={openIndex === 5}>
            To obtain a permit for an event, you should contact the special
            events department of the police department in the area where the
            event will be held. You may need to provide information about the
            event, such as the date, location, and expected attendance, as well
            as any plans for security or traffic control.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question onClick={() => setOpenIndex(openIndex === 6 ? -1 : 6)}>
            <Arrow isOpen={openIndex === 6} />
            What should I do if I am a victim of a crime?
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt=""
              style={{ width: "2%", marginLeft: 10 }}
            />
          </Question>
          <Answer isOpen={openIndex === 6}>
            If you are a victim of a crime, you should report the crime to the
            police as soon as possible. You can also receive assistance and
            support through victim advocacy organizations and local support
            services.
          </Answer>
        </FAQItem>
      </FAQContainer>
      <FooterComponent />
    </>
  );
};

export default FAQPage;
