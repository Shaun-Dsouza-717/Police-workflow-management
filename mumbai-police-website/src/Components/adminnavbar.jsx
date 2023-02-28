import { React } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Import images
import logo from "../images/logo.png";
import title from "../images/title.png";

const NavbarWrap = styled.div`
  width: 94%;
  height: 50px;
  padding: 8px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-family: "Roboto Slab", serif;
`;

const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 18%;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: space-evenly;
`;

const Ul = styled.ul`
  display: flex;
  font-size: 18px;
  width: 100%;
  display: contents;
`;

const Li = styled.li`
  list-style: none;
  color: black;
`;

const StyledLinks = styled(Links)``;

const AdminNavbar = () => {
  return (
    <NavbarWrap>
      <ImageWrap>
        <Img src={logo} alt="" />
        <Img src={title} alt="" />
      </ImageWrap>
      <Links>
        <Ul>
          <Li>
            <div className="logo">
              <Link
                to="/map"
                style={{ textDecoration: "none", color: "black" }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                Map
              </Link>
            </div>
          </Li>
          <Li>
            <Link to="/fir" style={{ textDecoration: "none", color: "black" }}>
              FIR
            </Link>
          </Li>
          <Li>
            <Link
              to="/pending_case"
              style={{ textDecoration: "none", color: "black" }}
            >
              Cases
            </Link>
          </Li>
          <Li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Logout
            </Link>
          </Li>
        </Ul>
      </Links>
    </NavbarWrap>
  );
};

export default AdminNavbar;
