import Styled from "styled-components";

const Banner = Styled.div`
  padding: 1em 2.5em;
`;

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  background: RGBA(213, 33, 208, .1);
  border-image: linear-gradient(315deg, #D521D0, #1182E1) 30;
  border-width: 0.2em;
  border-style: solid;
  & .TextInput {
    display: flex;
    margin: 1em;
    & label {
      display: inline-block;
      font-size: 1.1em;
      margin-right: 1em;
      padding: 0.5em;
      width: 5.5em;
    }
    & input {
      padding: 0.5em;
      width: 75%;
      background: rgba(17, 130, 225, .5);
    }
  }
  & .Submit {
      width: 40%;
      align-self: center;
      text-align: center;
      margin-bottom: 1em;
      & input {
        width: 100%;
        background: rgba(17, 130, 225, .5);
        border: 1px solid;
        color: inherit;
        padding: 0.5em;
      }
    }
`;

const AddPerson = () => {
  const PostPerson = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Banner>
        <h2>Add New Person</h2>
      </Banner>
      <Form onSubmit={PostPerson}>
        <div className="TextInput">
          <label>First name*</label>
          <input type="text" required></input>
        </div>
        <div className="TextInput">
          <label>Last name*</label>
          <input type="text" required></input>
        </div>
        <div className="TextInput">
          <label>Email*</label>
          <input type="text" required></input>
        </div>
        <div className="Submit">
          <input type="submit" value="Add Person"></input>
        </div>
      </Form>
    </>
  );
};

export default AddPerson;
