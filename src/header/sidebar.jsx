import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { MdCancel } from "react-icons/md";

function Sidebar() {
  const { togglebar, setTogglebar } = useContext(Context);
  return (
    <main
      className={`z-50 bg-[#0000005a] sm:w-fit top-0 sm:static sm:bg-transparent fixed ${
        togglebar ? "w-screen" : "w-0"
      } overflow-hidden h-full`}
      onClick={() => setTogglebar(false)}
    >
      <aside
        className={`h-screen ${
          togglebar ? "w-full" : "w-0"
        } bm sm:bg-transparent transition z-50 duration-500 overflow-hidden sm:w-64  sm:static  absolute top-0 sm:h-[90vh] text-yellow-500`}
      >
        {/* border-[1px] border-black   */}
        <div className=" sm:hidden flex items-center justify-between p-10 text-3xl font-serif">
          Protfoilo
          <button
            className="sm:hidden text-2xl"
            onClick={() => setTogglebar(false)}
          >
            <MdCancel />
          </button>
        </div>
        <div
          className={`text-yellow-500 text-xl font-serif h-[70vh] px-5 `}
        >
          <section
            className={
              "sm:hidden flex flex-col justify-around items-start h-[70vh]  "
            }
          >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </section>
        </div>
      </aside>
    </main>
  );
}

export default Sidebar;
