import React from "react";
import TopPart from "./components/TopContainer";
import MiddlePart from "./components/MiddleContainer";
import BottomPart from "./components/BottomContainer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <TopPart />
      <MiddlePart />
      <BottomPart />
    </div>
  );
}

export default App;
