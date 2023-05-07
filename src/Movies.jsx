import Styled from "styled-components";
import FetchData from "./FetchData";
import { useParams } from "react-router-dom";

const Main = Styled.div`
    padding: 1em;
`;
const MovieParent = Styled.div`
    display: flex;

`;
const MovieChild = Styled.div`
    padding: 0.7em;
    margin: 0.5em;
    border: 0.5px solid;
    width: 20em;
    text-align: center;
`;

const Genres = () => {
  const { id } = useParams();
  const {
    data: movies,
    isError,
    isLoading,
  } = FetchData("https://localhost:7001/movie/" + id);

  return (
    <Main>
      <h3>Favourite Movies</h3>
      {isLoading && <p className="loading">Loading movies...</p>}
      {isError && <p className="error">ERROR: Not able to fetch movies.</p>}
      <MovieParent>
        {movies &&
          movies.map((movie) => (
            <MovieChild key={movie.id_movie}>
              <h3>{movie.title}</h3>
            </MovieChild>
          ))}
      </MovieParent>
    </Main>
  );
};

export default Genres;
