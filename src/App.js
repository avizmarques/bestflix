import React from "react";
import Highlight from "./component/Highlight";
import MovieItem from "./component/MovieItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Highlight />
      <MovieItem />
    </div>
  );
}

export default App;
