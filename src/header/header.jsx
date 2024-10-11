import React, { useContext } from "react";
import "../header/header.css";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import Mode from "../mode/mode";

function Header() {
  const { setTogglebar, togglebar } = useContext(Context);
  const handleToggle = () => {
    togglebar === "w-0" ? setTogglebar("w-1/2") : setTogglebar("w-0");
  };

  return (
    <div>
      <header className=" bg md:h-[15vh] h-[10vh] md:w-screen fixed z-10  ">
        {" "}
        { /*z-50 */ }
        <div className=" md:h-[15vh] h-[10vh] flex items-center justify-center">
          <div
            className=" te md:h-[12vh] h-[8vh] px-8
            md:w-[90vw] w-screen  text-white  flex items-center justify-between"
          >
            <div>
              <h1 className=" te text-4xl font-serif ">
                R<span className="span text-yellow-500 bo">osvic</span>
              </h1>
            </div>
            <button className=" ">
              <MdMenu
                className="MdMenu text-4xl sm:hidden block  "
                onClick={handleToggle}
              />
            </button>
            <nav
              className=" nav
             md:w-[45vw] md:h-[6vh]
             "
            >
              <li className=" te flex items-center justify-around md:w-[45vw] w-[60vw] md:h-[6vh] ">
                <a className="a" href="/home">
                  {" "}
                  Home
                </a>
                <a className="a" href="#about">
                  About
                </a>
                <a className="a" href="#project">
                  Project
                </a>
                <a className="a" href="#services">
                  Services
                </a>
                <a className="a" href="#contact">
                  Contact
                </a>
              </li>
            </nav>
          </div>
          {/* <Mode /> */}
        </div>
      </header>
    </div>
  );
}

export default Header;
