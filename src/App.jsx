import React from "react";
import "./App.css";
import Header from "./header/header";
import Home from "./home/home";
import Mode from "./mode/mode";
import Sidebar from "./header/sidebar";
import { useState } from "react";
import { Context } from "./Context";

function App() {
  const [togglebar, setTogglebar] = useState(false);
  return (
    <>
      <div className="h-[5vh]  ">
        <Context.Provider value={{ togglebar, setTogglebar }}>
          <Header />
          <Mode />
          <Sidebar />
        </Context.Provider>
      </div>
      <Home />
    </>
  );
}

export default App;
