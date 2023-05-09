import Styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Main = Styled.div`
  display: flex;
  justify-content: space-between;
  & input,
    select {
    border: 1px solid;
    padding: 0.5em;
    background: rgba(213, 33, 208, .5);
    font-size: 1em;
    min-width: 5em;
  }
  & .ParentContainer {
    display: flex;
    & .ChildContainer {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }
    & input[type=submit] {
      margin-top: auto;
      transition: 0.5s ease;
      background-color: rgba(17,130,225,1);
      :hover {
        cursor: pointer;
        background-color: rgba(17,130,225,0.5);
        color: white;
      }
    }
  }
`;

const AddMovie = () => {
  // UseState for assigning data used for post request
  const [fk_person, setPerson] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  // Loading state
  const [loading, setLoading] = useState(false);
  // Id of person
  const { id } = useParams();

  // Post new movie
  const PostMovie = (e) => {
    setLoading(true);
    setPerson(id);

    const Movie = {
      fk_person: parseInt(id),
      title: title,
      link: link,
    };

    fetch("https://localhost:7001/movie-person", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Movie),
    }).then(() => {
      setLoading(false);
    });
  };

  return (
    <Main>
      <form onSubmit={PostMovie}>
        <p>Add a new movie below:</p>
        <div className="ParentContainer">
          <div className="ChildContainer">
            <label>Movie Title*</label>
            <input
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="ChildContainer">
            <label>TMDB Movie URL*</label>
            <input
              type="text"
              required
              onChange={(e) => setLink(e.target.value)}
            ></input>
          </div>
          <div className="ChildContainer">
            {!loading && <input type="submit" value="Add Movie"></input>}
            {loading && (
              <input type="submit" disabled value="Adding Movie..."></input>
            )}
          </div>
        </div>
        <p>
          Visit{" "}
          <a href="https://www.themoviedb.org/" target="_blank">
            TMDB
          </a>{" "}
          and search for your movie.
        </p>
        <p>
          Copy the webpage URL of your movie and paste it in the{" "}
          <strong>second</strong> input field above.
        </p>
      </form>
    </Main>
  );
};

export default AddMovie;
