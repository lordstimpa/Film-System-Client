import Styled from "styled-components";
import People from "./People";

const HomeContainer = Styled.div`
  padding: 1em 2.5em;
`;

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <h2>The Website</h2>
        <p>
          Film System is a website which provides data about peoples favourite
          movies and genres.
        </p>
        <p>As a user, you are able to add a new person to our system.</p>
        <p>
          Each person in our system can add a favourite movie or genre and
          receive information about each topic.
        </p>
      </div>
      <div>
        <h2>People</h2>
        <p>All of the names below are people added to our database.</p>
        <p>Click on any name to view their personal profile.</p>
      </div>
      <People />
    </HomeContainer>
  );
};

export default Home;
