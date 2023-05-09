import Styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = Styled.div`
  padding: 1em 2.5em;
`;

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 2.5em;
  border-image: linear-gradient(315deg, #D521D0, #1182E1) 30;
  border-width: 0.25em;
  border-style: solid;
  & input[type=text] {
    width: 80%;
    margin: 0.5em 1em;
    padding: 0.5em;
    align-self: center;
    color: white;
    background: rgba(213, 33, 208, .5);
  }
  & input[type=submit] {
    width: 50%;
    margin: 1.5em 1em;
    align-self: center;
    padding: 0.5em;
    font-size: 1.1em;
    transition: 0.5s ease;
    background-color: rgba(17,130,225,1);
    :hover {
      cursor: pointer;
      background-color: rgba(17,130,225,0.5);
      color: white;
    }
  }
  & label {
    width: 80%;
    margin: 1.5em 1em 0 1em;
    align-self: center;
    font-size: 1.1em;
  }
`;

const AddPerson = () => {
  // UseState for assigning data used for post request
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // Loading state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const PostPerson = (e) => {
    e.preventDefault();
    setLoading(true);

    const Movie = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };

    fetch("https://localhost:7001/person", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Movie),
    }).then(() => {
      setLoading(false);
      navigate("/");
    });
  };

  return (
    <>
      <Banner>
        <h2>Add New Person</h2>
      </Banner>
      <Form onSubmit={PostPerson}>
        <label>First name*</label>
        <input
          type="text"
          required
          onChange={(e) => setFirstName(e.target.value)}
        ></input>

        <label>Last name*</label>
        <input
          type="text"
          required
          onChange={(e) => setLastName(e.target.value)}
        ></input>

        <label>Email*</label>
        <input
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        {!loading && <input type="submit" value="Add Person"></input>}
        {loading && (
          <input type="submit" disabled value="Adding Person..."></input>
        )}
      </Form>
    </>
  );
};

export default AddPerson;
