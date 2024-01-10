import React from "react";
import MenuBar from "./components/MenuBar.js";
import Banner from "./components/Banner.js";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Banner />
        <MenuBar />
      </header>
      <div></div>
    </div>
  );
}

export default App;
