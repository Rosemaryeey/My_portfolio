import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./home/home";
import Mode from "./components/mode";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import { Context } from "./Context";

function App() {
  const [togglebar, setTogglebar] = useState("w-0"); 

  return (
    <>
      <div className="  ">
        <Context.Provider value={{ togglebar, setTogglebar }}>
          <Mode />
          <Header />
        </Context.Provider>
      </div>
      {/* 👇 Home wrapper gets blur when nav is open */}
      <div className={togglebar !== "w-0" ? "blur-sm" : ""}>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
