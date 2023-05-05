import Styled from "styled-components";

const NotFoundContainer = Styled.div`
  padding: 1em;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h2>Page not found...</h2>
    </NotFoundContainer>
  );
};

export default NotFound;
