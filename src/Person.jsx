import Styled from "styled-components";
import { useParams } from "react-router-dom";
import FetchData from "./FetchData";
import Genres from "./Genres";
import Movies from "./Movies";
import { AiOutlineMail } from "react-icons/ai";

const PersonParent = Styled.div`
    padding: 1em 2.5em;
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
    & p {
      font-size: 0.9em;
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
    <>
      <PersonParent>
        {isLoading && <div className="loading">Loading person...</div>}
        {isError && (
          <div className="error">ERROR: Not able to fetch person data.</div>
        )}
        {targetPerson && (
          <div className="personbanner">
            <h2>
              {targetPerson.first_name} {targetPerson.last_name}
            </h2>
            <p>
              <AiOutlineMail /> {targetPerson.email}
            </p>
          </div>
        )}
      </PersonParent>

      <Genres />
      <Movies />
    </>
  );
};

export default Person;
