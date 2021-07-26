import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import Users from "./components/Users/Users";

const App: React.FC = () => {
  return (
    <Container>
      <Users />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
