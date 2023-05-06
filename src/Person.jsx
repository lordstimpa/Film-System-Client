import Styled from "styled-components";
import FetchData from "./FetchData";
import { useParams } from "react-router-dom";

const PersonContainer = Styled.div`
    padding: 1em;
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

const Person = () => {
  // Get id of person from url parameter
  const { id } = useParams();
  const {
    data: people,
    isError,
    isLoading,
  } = FetchData("https://localhost:7001/person");

  // Find the target person from an array of people
  const targetPerson = people.find(
    (person) => person.id_person === parseInt(id)
  );

  return (
    <PersonContainer>
      {isLoading && <div className="loading">Loading person...</div>}
      {isError && (
        <div className="error">ERROR: Not able to fetch person data.</div>
      )}
      {targetPerson && (
        <h2>
          {targetPerson.first_name} {targetPerson.last_name}
        </h2>
      )}
    </PersonContainer>
  );
};

export default Person;
