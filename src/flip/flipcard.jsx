import React from "react";
import "./flipcard.css";
import { fliplink } from "./flipcard";

const FlipCard = () => {
  return (
    <div className="flex flex-wrap h-fit sm:w-[90vw] w-[90vw] items-center justify-between md:flex-row flex-col gap-y-10 px-5 sm:px-10 md:p-10 py-20 ">
      {fliplink.map((item, index) => (
        <div
          key={index}
          className="flip-card md:w-[30%] w-[100%] md:h-[60vh] h-[40vh] shadow-yellow-500 shadow-md rounded-xl flex "
        >
          <div className="flip-card-inner ">
            <div className="flip-card-front flex flex-col rounded-xl">
              {/* Set background image here */}
              <div
                className="w-[100%] h-[60%] rounded-t-xl bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <div className="h-[40%] p-3 space-y-3">
                <h1>{item.title}</h1>
                <p className="md:text-[1rem] text-sm">{item.body}</p>
              </div>
            </div>

            <div className="flip-card-back p-5 flex flex-col md:items-start items-center md:justify-around justify-evenly rounded-xl">
              <h3 className="bg-transparent text-xl">
                Click = "{" "}
                <a className="text-red-500" href={item.link}>
                  here
                </a>{" "}" 
                <p> for Details about the project.</p>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
