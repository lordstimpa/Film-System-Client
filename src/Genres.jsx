import Styled from "styled-components";
import { useParams } from "react-router-dom";
import FetchData from "./FetchData";
import GenreImages from "./genre-img.json";
import AddGenre from "./AddGenre";

const Main = Styled.div`
    padding: 1em 2.5em;
`;
const GenreParent = Styled.div`
    display: flex;
    justify-content: space-around;
`;
const GenreChild = Styled.div`
    position: relative;
    border: 0.5px solid;
    width: 20em;
    height: 13.5em;
    margin: 0.5em;
    text-align: center;
    background-color: black;
    overflow: hidden;
    & .overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.7em;
        font-size: 0.9em;
        color: #fff;
        box-sizing: border-box;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.7;
      filter: blur(2px);
        -webkit-filter: blur(2px);
        -moz-filter: blur(2px);
        -o-filter: blur(2px);
        -ms-filter: blur(2px);
    }
`;

const Genres = () => {
  const { id } = useParams();
  const {
    data: genres,
    isError,
    isLoading,
  } = FetchData("https://localhost:7001/persongenre/" + id);

  const GetImage = (id) => {
    const imageSrc = GenreImages.GenreImgSrc[id].src;
    if (imageSrc) {
      return imageSrc;
    } else {
      return null;
    }
  };

  return (
    <Main>
      <h3>Genres</h3>
      <AddGenre />
      <h4>Favourite genres</h4>
      {isLoading && <p className="loading">Loading genres...</p>}
      {isError && <p className="error">ERROR: Not able to fetch genres.</p>}
      <GenreParent>
        {genres &&
          genres.map((genre) => (
            <GenreChild key={genre.genre.id_genre}>
              <img
                src={GetImage(genre.genre.id_genre)}
                alt={genre.genre.title}
              />
              <div className="overlay">
                <h3>{genre.genre.title}</h3>
                <p>{genre.genre.description}</p>
              </div>
            </GenreChild>
          ))}
      </GenreParent>
    </Main>
  );
};

export default Genres;
