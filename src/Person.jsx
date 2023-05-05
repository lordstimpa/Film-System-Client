import Styled from "styled-components";

const PersonContainer = Styled.div`
    padding: 1em;
`;

const Person = () => {
  return (
    <PersonContainer>
      <h2>Person</h2>
    </PersonContainer>
  );
};

export default Person;
