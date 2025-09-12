import React, { useContext } from "react";
import "./header.css";
import { MdMenu, MdClose } from "react-icons/md";
import { Context } from "../Context";
import Mode from "./mode";
function Header() {
  const { setTogglebar, togglebar } = useContext(Context);

const handleToggle = () => {
  setTogglebar(togglebar === "w-0" ? "w-1/2" : "w-0");
};

  return (
    <header className="bg md:h-[15vh] h-[10vh] md:w-screen fixed top-0 left-0 z-50">
      <div className="md:h-[15vh] h-[10vh] flex items-center justify-center">
        <div className="md:h-[12vh] h-[8vh] px-8 md:w-[90vw] w-screen  flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-4xl font-serif">
              R<span className="text-yellow-500">osvic</span>
            </h1>
          </div>

          {/* Hamburger (mobile only) */}
          <button className="sm:hidden block" onClick={handleToggle}>
            {togglebar === "w-0" ? (
              <MdMenu className="text-4xl" />
            ) : (
              <MdClose className="text-4xl" />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex md:w-[45vw] md:h-[6vh]">
            <ul className="flex items-center justify-around md:w-[45vw] w-[60vw] md:h-[6vh]">
              <li>
                <a className="a" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className="a" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="a" href="#project">
                  Project
                </a>
              </li>
              <li>
                <a className="a" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="a" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Nav (slide in) */}
      <div
        className={`sm:hidden fixed top-[10vh] right-0 h-screen bg overflow-hidden transition-all duration-500 ${togglebar}`}
      >
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li>
            <a href="#home" onClick={handleToggle}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleToggle}>
              About
            </a>
          </li>
          <li>
            <a href="#project" onClick={handleToggle}>
              Project
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleToggle}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleToggle}>
              Contact
            </a>
          </li>
        
        </ul>
      </div>
    </header>
  );
}

export default Header;
