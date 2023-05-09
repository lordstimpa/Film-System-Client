import Styled from "styled-components";
import FetchData from "./FetchData";
import { useParams } from "react-router-dom";
import AddMovie from "./AddMovie";

const Main = Styled.div`
    margin: 1.5em 2.5em;
    border-image: linear-gradient(315deg, #1182E1, #D521D0) 30;
    border-width: 0.25em;
    border-style: solid;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
`;
const MovieParent = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const MovieChild = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border: 1px solid;
    margin: 1em 0.2em;
    text-align: center;
    width: 9em;
    min-height: 7em;
    & h5 {
      font-size: 0.7em;
    }
    & select {
      border: 1px solid;
      background: rgba(203, 236, 16, 0.5);
      font-size: 0.9em;
      margin-bottom: 1em;
  }
`;

const Movies = () => {
  // Id of person
  const { id } = useParams();
  const {
    data: movies,
    isError,
    isLoading,
  } = FetchData("https://localhost:7001/movie/" + id);

  const { data: movierating } = FetchData(
    "https://localhost:7001/movierating/" + id
  );

  const PostRating = (ratingData) => {
    fetch("https://localhost:7001/movierating", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ratingData),
    }).then(() => {
      window.location.reload();
    });
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
              <h5>{movie.title}</h5>
              {movierating &&
                movierating
                  .filter((rating) => rating.fk_movie === movie.id_movie)
                  .map((rating) => (
                    <h5 key={rating.id_rating}>Rating: {rating.rating} / 10</h5>
                  ))}
              {!movierating.some(
                (rating) => rating.fk_movie === movie.id_movie
              ) && (
                <form>
                  <select
                    required
                    defaultValue=""
                    onChange={(e) => {
                      const ratingData = {
                        fk_movie: movie.id_movie,
                        fk_person: parseInt(id),
                        rating: parseInt(e.target.value),
                      };
                      PostRating(ratingData);
                    }}
                  >
                    <option hidden disabled value="">
                      Rate
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
