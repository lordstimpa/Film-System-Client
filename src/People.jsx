import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import axios from "axios";

const PeopleContainer = Styled.div`
  padding: 1em;
`;

const People = () => {
  const [people, setPeople] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://localhost:7001/person");
      setPeople(result.people);
    };
    fetchData();
  }, []);

  return (
    <PeopleContainer>
      {people.hits.map((person) => (
        <h3 key={person.id_person}>
          {person.first_name} {person.last_name}
        </h3>
      ))}
    </PeopleContainer>
  );
};

export default People;
