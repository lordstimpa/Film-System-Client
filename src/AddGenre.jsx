import Styled from "styled-components";
import { useParams } from "react-router-dom";
import FetchData from "./FetchData";

const Main = Styled.div`
  display: flex;
  justify-content: space-between;
  & select,
    input {
    border: 1px solid;
    padding: 0.5em;
    background: rgba(213, 33, 208, .5);
    font-size: 1em;
  }
  & input[type=submit] {
    cursor: pointer;
  }
  & div {
    display: flex;
    & :nth-child(1) {
      margin-right: 20px;
    }
  }
`;

const AddGenre = () => {
  const { id } = useParams();
  const { data: genres } = FetchData(
    "https://localhost:7001/persongenre/" + id
  );

  const PostGenre = (e) => {
    e.preventDefault();
  };

  return (
    <Main>
      <form onSubmit={PostGenre}>
        <p>Add a new favourite genre below:</p>
        <div>
          <select>
            <option hidden disabled selected value>
              {" "}
              Genres{" "}
            </option>
            {genres &&
              genres.map((genre) => (
                <option value={genre.genre.title} required>
                  {genre.genre.title}
                </option>
              ))}
          </select>
          <input type="submit" value="Add Genre"></input>
        </div>
      </form>
    </Main>
  );
};

export default AddGenre;
