import React from "react";
import "./mode.css";
import { MdNightlight, MdSunny } from "react-icons/md";

function Mode() {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <label className="switch p-2">
        <input type="checkbox" onChange={switchTheme} />
        <span className="slider rounded-sm  flex justify-around items-center">
          <MdSunny className="text-yellow-400" />
          <MdNightlight className="text-black" />
        </span>
      </label>
    </div>
  );
}

export default Mode;
