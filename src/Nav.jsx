import { useState } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import SunMoon from "./assets/day-and-night.png";

const NavContainer = Styled.div`
    display: flex;
    align-items: center;
    padding: 1em;
    border-image: linear-gradient(315deg, #1182E1, #D521D0) 30;
    border-width: 0.5em;
    border-style: solid;
    border-top:0;
    border-left:0;
    border-right:0;
`;

const LinkContainer = Styled.div`
    margin-left: auto;
    text-decoration: none;
    & .nav-link {
        text-decoration: none;
        color: inherit;
        margin-right: 2em;
        transition: 0.3s ease;
    }
    & .nav-link:hover {
      color: #D521D0;
    }
`;

const Img = Styled.img`
    max-width: 1.5em;
    filter: invert(${(props) => props.imgColor});
    transition: 0.3s ease;
    :hover {
        cursor: pointer;
    }
`;

const Nav = () => {
  const [colorMode, setColorMode] = useState("light");
  const [imgColor, setImgColor] = useState("0%");

  const handleClick = () => {
    document.body.classList.toggle("dark-mode");
    setColorMode(colorMode === "light" ? "dark" : "light");
    setImgColor(imgColor === "0%" ? "100%" : "0%");
  };

  return (
    <NavContainer>
      <h1>Film System</h1>
      <LinkContainer>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/add-person" className="nav-link">
          Add person
        </Link>
        <Img src={SunMoon} imgColor={imgColor} onClick={handleClick}></Img>
      </LinkContainer>
    </NavContainer>
  );
};

export default Nav;
