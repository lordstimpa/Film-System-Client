import FetchData from "./FetchData";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const PersonOuterContainer = Styled.div`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    & .person-inner-container {
        padding-bottom: 1em;
    }
    & .person-link {
        text-decoration: none;
        color: inherit;
        font-size: 1.2em;
    } 
    & .person-link:hover {
        color: #2bff2b;
    }
    & .loading {
        color: #2bff2b;
        text-align: center;
        font-size: 1.2em;
        padding-top: 2em;
    }
    & .error {
        color: #ff2b2b;
        text-align: center;
        font-size: 1.2em;
        padding-top: 2em;
    }
`;

const People = () => {
  const {
    data: people,
    isError,
    isLoading,
  } = FetchData("https://localhost:7001/person");

  return (
    <PersonOuterContainer>
      {isLoading && <div className="loading">Loading people...</div>}
      {isError && (
        <div className="error">ERROR: Not able to fetch people data.</div>
      )}
      {people &&
        people.map((item) => (
          <div key={item.id_person} className="person-inner-container">
            <Link to={`/person/${item.id_person}`} className="person-link">
              <CgProfile /> {item.first_name} {item.last_name}
            </Link>
          </div>
        ))}
    </PersonOuterContainer>
  );
};

export default People;
