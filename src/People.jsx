import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import axios from "axios";
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
    }
    
    & .person-link:hover {
        color: #2bff2b;
    }
`;

const People = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://localhost:7001/person");
      console.log(result);
      setData(result.data);
    };

    fetchData();
  }, []);

  const handleClick = () => {};

  return (
    <PersonOuterContainer>
      {data.map((item) => (
        <div key={item.id_person} className="person-inner-container">
          <Link
            to={`/person/${item.id_person}`}
            className="person-link"
            onClick={handleClick}
          >
            <CgProfile /> {item.first_name} {item.last_name}
          </Link>
        </div>
      ))}
    </PersonOuterContainer>
  );
};

export default People;
