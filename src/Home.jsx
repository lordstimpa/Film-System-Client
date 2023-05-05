import Styled from "styled-components";
import People from "./People";

const HomeContainer = Styled.div`
  padding: 1em;
`;

const Section = Styled.div`
  margin-bottom: 2.5em;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Section>
        <h2>The Website</h2>
        <p>
          Film System is a website which provides data about peoples favourite
          movies and genres.
        </p>
        <p>
          As a user, you are able to add a new person to our system. Each person
          in our system can add a favourite movie or genre and receive
          information about each topic.
        </p>
      </Section>
      <Section>
        <h2>People</h2>
        <p>All of the names below are people added to our database.</p>
        <p>Click on any name to view their profile.</p>
      </Section>
      <People />
    </HomeContainer>
  );
};

export default Home;
