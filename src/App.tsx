import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons";
import LeftPanel from "./components/LeftPanel";

function App() {
  return (
    <>
      <Navbar />
      <LeftPanel />
      <SocialIcons />
    </>
  );
}

export default App;
