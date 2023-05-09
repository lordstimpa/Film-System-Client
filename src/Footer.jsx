import Styled from "styled-components";
import tmdbImg from "./assets/tmdb.svg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Main = Styled.div`
  flex-shrink: 0;
  min-height: 10em;
  background: linear-gradient(180deg, rgba(213,33,208, 0.5), rgba(17,130,225, 0.5));
  & .Parent {
    display: flex;
    justify-content: center;
    padding-top: 1em;
  }
  & .Child {
    padding: 1em;
    margin: 0 4vw;
    text-align: left;
  }
  & img {
    width: 100px;
  }
  & .pLink {
    margin: 0 0.5vw;
  }
`;

const Footer = () => {
  return (
    <Main>
      <div className="Parent">
        <div className="Child">
          <a href="https://www.themoviedb.org/">
            <img src={tmdbImg}></img>
          </a>
        </div>
        <div className="Child">
          <p>© 2023 Steven Dalfall,</p>
          <p>All Rights reserved.</p>
        </div>
        <div className="Child">
          <a href="https://github.com/lordstimpa" className="pLink">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/steven-dalfall-54223b131/"
            className="pLink"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </Main>
  );
};

export default Footer;
