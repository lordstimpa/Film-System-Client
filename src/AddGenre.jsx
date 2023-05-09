import Styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import FetchData from "./FetchData";

// CSS styling
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
  // UseState for assigning data used for post request
  const [fk_genre, setGenre] = useState("");
  const [fk_person, setPerson] = useState("");
  const { id } = useParams();

  // Get all genres
  const { data: genres } = FetchData("https://localhost:7001/genre");
  // Get all genres connected to person
  const { data: personGenres } = FetchData(
    "https://localhost:7001/persongenre/" + id
  );

  // Post new favourite genre
  const PostGenre = (e) => {
    e.preventDefault();
    setPerson(id);

    const selectedGenreId = e.target.querySelector("select").value;

    const Genre = {
      fk_person: parseInt(id),
      fk_genre: parseInt(selectedGenreId),
    };

    fetch("https://localhost:7001/persongenre/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Genre),
    });
  };

  return (
    <Main>
      <form onSubmit={PostGenre}>
        <p>Add a new favourite genre below:</p>
        <div>
          <select
            name="genre"
            defaultValue=""
            onChange={(e) => setGenre(e.target.value)}
          >
            <option hidden disabled value="">
              Genres
            </option>
            {genres &&
              genres.map((genre) => {
                const disabled = personGenres.some(
                  (personGenre) => personGenre.genre.id_genre === genre.id_genre
                );
                return (
                  <option
                    key={genre.id_genre}
                    value={genre.id_genre}
                    disabled={disabled}
                  >
                    {genre.title}
                  </option>
                );
              })}
          </select>
          <input type="submit" value="Add Genre"></input>
        </div>
      </form>
    </Main>
  );
};

export default AddGenre;
