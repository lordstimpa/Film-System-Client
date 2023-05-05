import { useState } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import SunMoon from "./assets/day-and-night.png";

const NavContainer = Styled.div`
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid;
    padding: 1em;
`;

const LinkContainer = Styled.div`
    margin-left: auto;
    text-decoration: none;

    & .nav-link {
        text-decoration: none;
        color: inherit;
        margin-right: 2em;
    }
    & .nav-link:hover {
        color: #2bff2b;
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
