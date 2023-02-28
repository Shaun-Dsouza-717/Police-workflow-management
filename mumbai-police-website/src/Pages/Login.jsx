import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Import images
import logo from "../images/logo.png";
import title from "../images/title.png";

const LoginContainerWrap = styled.div`
  width: 100%;
  height: 710px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`;

const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 100%;
  justify-content: center;
  border-radius: 15px 0 0 15px;
`;

const Img = styled.img`
  width: 50%;
`;

const LoginWrap = styled.div`
  height: 100%;
  width: 30%;
  color: #fff;
  font-family: "Roboto Slab", serif;
  background: #1fabfa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0 15px 15px 0;
`;

const H1 = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 500;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: 80%;
`;

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: semi-bold;
  margin: 10px 0px;
`;

const CreateButton = styled.button`
  margin: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 15px;
  width: 86px;
  height: 37px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  font-family: "Roboto Slab", serif;
  line-height: 20px;
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover,
  focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.15em);
    background-color: orange;
  }
`;

const A = styled.a`
  padding: 10px 0 15px 0;
`;

const Login = () => {
  const [zoneid, setzoneid] = useState();
  const [password, setPassword] = useState();
  // const history = useHistory();
  const navigate = useNavigate();

  const onLogin = (e) => {
    console.log("this is ", zoneid, password);
    console.log("Login");
    e.preventDefault();
    var urlencoded = new URLSearchParams();
    urlencoded.append("zonal_id", zoneid);
    urlencoded.append("password", password);


    var requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/login/validate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate(`/home`, { replace: true },{state:{isOfficial:true}});
        // history.push("/home");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <LoginContainerWrap>
      <LoginContainer>
        <ImageWrap>
          <Img src={logo} alt="" />
          <Img src={title} alt="" />
        </ImageWrap>
        <LoginWrap>
          <H1>Login</H1>
          <Form>
            {/* Name */}
            <Label htmlFor="" style={{ marginTop: -5 }}>
              Enter Zonal Id:
            </Label>
            <Input
              type="tel"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={zoneid}
              onChange={(e) => setzoneid(e.target.value)}
            />
            {/* Password */}
            <Label htmlFor="">Enter Password:</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form>
          <CreateButton onClick={(e) => { onLogin(e) }}>Submit</CreateButton>
          <A href="/home">Not an Official ? Login as user</A>
        </LoginWrap>
      </LoginContainer>
    </LoginContainerWrap>
  );
};

export default Login;
