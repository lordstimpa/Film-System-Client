import Styled from "styled-components";
import FetchData from "./FetchData";
import { useParams } from "react-router-dom";
import AddMovie from "./AddMovie";

const Main = Styled.div`
    padding: 1em 2.5em;
`;
const MovieParent = Styled.div`
    display: flex;
    justify-content: space-around;
`;
const MovieChild = Styled.div`
    padding: 0.7em;
    margin: 0.5em;
    border: 0.5px solid;
    width: 20em;
    text-align: center;
    font-size: 0.6em;
    & select {
      border: 1px solid;
      padding: 0.5em;
      background: rgba(203, 236, 16, 0.5);
      font-size: 1.1em;
  }
`;

const Movies = () => {
  const { id } = useParams();
  const {
    data: movies,
    isError,
    isLoading,
  } = FetchData("https://localhost:7001/movie/" + id);

  const { data: movierating } = FetchData(
    "https://localhost:7001/movierating/" + id
  );

  const PostRating = (e) => {
    e.preventDefault();
  };

  return (
    <Main>
      <h3>Movies</h3>
      <AddMovie />
      <h4>Movies watched and rated</h4>
      {isLoading && <p className="loading">Loading movies...</p>}
      {isError && <p className="error">ERROR: Not able to fetch movies.</p>}
      <MovieParent>
        {movies &&
          movies.map((movie) => (
            <MovieChild key={movie.id_movie}>
              <h3>{movie.title}</h3>
              {movierating &&
                movierating
                  .filter((rating) => rating.fk_movie === movie.id_movie)
                  .map((rating) => <h3>Rating: {rating.rating} / 10</h3>)}
              {!movierating.some(
                (rating) => rating.fk_movie === movie.id_movie
              ) && (
                <form>
                  <select required onChange={PostRating}>
                    <option hidden disabled selected value>
                      {" "}
                      Rate{" "}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </form>
              )}
            </MovieChild>
          ))}
      </MovieParent>
    </Main>
  );
};

export default Movies;
