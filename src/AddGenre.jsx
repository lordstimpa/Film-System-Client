import Styled from "styled-components";

const Main = Styled.div`
  display: flex;
  justify-content: space-between;
  & select,
    input {
    border: 1px solid;
    padding: 0.5em;
    background: rgba(213, 33, 208, .5);
    font-size: 1em;
    cursor: pointer;
  }
  & select {
    width: 100%;
  }
  & div {
    display: flex;
    & :nth-child(1) {
      margin-right: 20px;
    }
  }
`;

const AddGenre = () => {
  return (
    <Main>
      <form>
        <p>Add a new favourite genre below:</p>
        <div>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <input type="submit" value="Add Genre"></input>
        </div>
      </form>
    </Main>
  );
};

export default AddGenre;
