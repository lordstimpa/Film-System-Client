import Styled from "styled-components";

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
      cursor: pointer;
    }
  }
`;

const AddMovie = () => {
  const PostMovie = (e) => {
    e.preventDefault();
  };

  return (
    <Main>
      <form onSubmit={PostMovie}>
        <p>Add a new movie below:</p>
        <div className="ParentContainer">
          <div className="ChildContainer">
            <label>Movie Title*</label>
            <input type="text" required></input>
          </div>
          <div className="ChildContainer">
            <label>TMDB Movie URL*</label>
            <input type="text" required></input>
          </div>
          <div className="ChildContainer">
            <input type="submit" value="Add Movie"></input>
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
          <strong>third</strong> input field above.
        </p>
      </form>
    </Main>
  );
};

export default AddMovie;
