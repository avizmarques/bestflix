import React from "react";
import Highlight from "./component/Highlight";
import Categorie from "./component/Categorie";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Batflix</h1>
      {/* SearchBar */}
      <Highlight />
      {/* Highlight Should have 1 movie displayed.  */}
      <Categorie />
    </div>
  );
}

export default App;
