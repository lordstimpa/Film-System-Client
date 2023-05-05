import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import AddPerson from "./AddPerson";
import NotFound from "./NotFound";

const Main = Styled.div`
  max-width: 60em;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <Main>
        <Nav />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-person" element={<AddPerson />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Main>
    </Router>
  );
}

export default App;
