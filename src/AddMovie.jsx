import Styled from "styled-components";

const Main = Styled.div`
  display: flex;
  justify-content: space-between;
  & input {
    border: 1px solid;
    padding: 0.5em;
    background: rgba(213, 33, 208, .5);
    font-size: 1em;
    cursor: pointer;
  }
  & div {
    display: flex;
  }
`;

const AddMovie = () => {
  return (
    <Main>
      <form>
        <p>Add a new movie below:</p>
        <div>
          <input type="submit" value="Add Movie"></input>
        </div>
      </form>
    </Main>
  );
};

export default AddMovie;
