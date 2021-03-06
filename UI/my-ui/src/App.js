import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const myUrl = "https://helloworld-kjernzpriq-ue.a.run.app/test/json";
// Home page for my app
function App() {
  const [page, setPage] = useState(null);

  // This piece was part of my attempt at getting my own cloud API working, the idea was to just fetch
  // a piece of json for proof of concept, but I couldn't figure out how to get Spring Boot to properly
  // return json on a request
  const getUrl = async () => {
    const res = await fetch(myUrl);
    const j = await res.json;
    console.log(j);
    //setPage(res);
  };

  useEffect(() => {
    getUrl();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link className="App-link" to="/">
            Home
          </Link>{" "}
          |
          <Link className="App-link" to="/tictactoe">
            Tic-Tac-Toe
          </Link>{" "}
          |
          <Link className="App-link" to="/bible">
            Bible Verse
          </Link>
        </nav>
        <Box className="App-intro">Welcome to my webpage!</Box>
        <Box className="App-intro">Made by David Gurge</Box>
      </header>
    </div>
  );
}

export default App;
