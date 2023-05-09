import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import AddPerson from "./AddPerson";
import Person from "./Person";
import NotFound from "./NotFound";
import Footer from "./Footer";

const Main = Styled.div`
  max-width: 60em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrap = Styled.div`
  min-height: 100%;
  & > * {
    flex: 1;
  }
`;

function App() {
  return (
    <Router>
      <Main>
        <Nav />
        <Wrap>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-person" element={<AddPerson />} />
            <Route path="/person/:id" element={<Person />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Wrap>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
