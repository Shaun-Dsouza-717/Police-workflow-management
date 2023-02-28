import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import "../Components/fir.css";
import FooterComponent from "./Footer";
import Navbar from "./navbar";

function Firservice() {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [dob, setDob] = useState();
  const [nation, setNation] = useState(0);
  const [passportNo, setPassportNo] = useState();
  const [dateOfIssue, setDateOfIssue] = useState();
  const [placeOfIssue, setPlaceOfIssue] = useState();
  const [occupation, setOccupation] = useState();
  const [phone, setPhone] = useState();
  const [dateofoffence, setDateofoffence] = useState();
  const [placeofoffence, setPlaceofoffence] = useState();
  const [crimeType, setCrimeType] = useState(0);
  const [act, setAct] = useState();
  const [section, setSection] = useState();
  const [detailOfSuspect, setDetailOfSuspect] = useState();
  const [firContent, setFirContent] = useState();
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  // const navigateToHome = () => {
  //   navigate(`/home`, { replace: true }, { state: { isOfficial: true } });
  // };
    const onSubmit = (e) => {
      console.log("Form Submitted");
      e.preventDefault();
      var urlencoded = new URLSearchParams();
      urlencoded.append("date", date);
      urlencoded.append("full_name", name);
      urlencoded.append("dob", dob);
      urlencoded.append("nationality", nation);
      urlencoded.append("passport_no", passportNo);
      urlencoded.append("date_of_issue", dateOfIssue);
      urlencoded.append("place_of_issue", placeOfIssue);
      urlencoded.append("occupation", occupation);
      urlencoded.append("date_of_offence", dateofoffence);
      urlencoded.append("place_of_offence", placeofoffence);
      urlencoded.append("crime_type", crimeType);
      urlencoded.append("act", act);
      urlencoded.append("section", section);
      urlencoded.append("detail_of_suspect", detailOfSuspect);
      urlencoded.append("fir_contents", firContent);
      urlencoded.append("address", address);
      urlencoded.append("zonal_id", 22);
      urlencoded.append("crime_name", "");


      var requestOptions = {
        method: "POST",
        body: urlencoded,
        redirect: "follow",
      };

      fetch("http://localhost:8000/fir/insertFir", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          navigate(`/home`, { replace: true }, { state: { isOfficial: true } });
          // history.push("/home");
        })
        .catch((error) => console.log("error", error));
    };
  return (
    <div>
      <Navbar />
      <div className="Container">
        <div className="Heading">
          <div className="P">
            <h1>First Information Request(FIR)</h1>
          </div>
        </div>

        <div id="divContainer">
          <label>
            FIR No.:
            <input type="number" />
          </label>

          <label>
            Date:
            <input type="Date" onChange={(e) => setDate(e.target.value)} />
          </label>
        </div>

        <div className="formcontainer">
          <div className="Heading">
            <h3>Complainant Information</h3>
          </div>

          <label className="fullName">
            Full Name:
            <input
              type="text"
              placeholder="Enter your full name"
              id=""
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="fullName">
            Phone No.:
            <input
              type="text"
              placeholder="Enter your phone"
              id=""
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <br />
          <br />

          <label className="DOB">
            DOB:
            <input type="Date" onChange={(e) => setDob(e.target.value)} />
          </label>

          {/* <label className="age">Age:</label> */}

          <br />
          <br />
          <label className="nationality">
            Nationality:
            <select name="" id="" style={{ padding: 10, fontSize: 15 }}>
              <option value="INDIAN">INDIAN</option>

              <option value="NRI">NRI</option>
            </select>
          </label>

          <br />
          <br />
          <label className="pass">
            Passport No.:
            <input
              type="text"
              onChange={(e) => setPassportNo(e.target.value)}
            />
          </label>

          <label className="doi">
            Date of Issue:
            <input
              type="date"
              onChange={(e) => setDateOfIssue(e.target.value)}
            />
          </label>

          <label className="poi">
            Place of Issue:
            <input
              type="text"
              onChange={(e) => setPlaceOfIssue(e.target.value)}
            />
          </label>

          <br />
          <br />
          <label className="occupation">
            Occupation:
            <input
              type="text"
              onChange={(e) => setOccupation(e.target.value)}
            />
          </label>

          <br />
          <br />
          <label className="addr">
            Address:
            <input
              type="textarea"
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <div className="Heading">
            <h3>Suspect Information</h3>
          </div>

          <br />
          <label className="dateOff">
            Date of Offence:
            <input
              type="date"
              onChange={(e) => setDateofoffence(e.target.value)}
            />
          </label>

          <br />
          <br />
          <label className="placeOff">
            Place of Offence:
            <input
              type="text"
              placeholder="Enter the place of offence"
              id=""
              onChange={(e) => setPlaceofoffence(e.target.value)}
            />
          </label>

          <br />
          <br />
          <label className="crime">
            Crime:
            <select name="" id="" style={{ padding: 10, fontSize: 15 }}>
              <option value="Robbery">Robbery</option>

              <option value="Murder">Murder</option>

              <option value="Stealing">Stealing</option>
              <option value="kidnapping">Kidnapping</option>
            </select>
          </label>

          <label className="act">
            Act:
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setAct(e.target.value)}
            />
          </label>

          <label className="section">
            Section:
            <input type="text" onChange={(e) => setSection(e.target.value)} />
          </label>

          <br />
          <br />
          <label className="suspect">
            Details of Suspect:
            <input
              type="textarea"
              onChange={(e) => setDetailOfSuspect(e.target.value)}
            />
          </label>

          <br />
          <br />
          <label className="firContents">
            FIR Contents
            <input
              type="textarea"
              onChange={(e) => setFirContent(e.target.value)}
            />
          </label>

          <br />
          <br />
          <button className="createButton1" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Firservice;
