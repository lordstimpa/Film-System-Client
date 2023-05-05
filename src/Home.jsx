import Styled from "styled-components";
import People from "./People";

const HomeContainer = Styled.div`
  padding: 1em;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h2>People</h2>
      <People />
    </HomeContainer>
  );
};

export default Home;
