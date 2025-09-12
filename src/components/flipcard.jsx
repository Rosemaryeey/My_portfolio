import React from "react";
import "./flipcard.css";
import { fliplink } from "./flipcard";

const FlipCard = () => {
  return (
    <div className=" flex flex-wrap h-fit sm:w-[90vw] w-[90vw] items-center justify-between md:flex-row flex-col gap-y-10 px-5 sm:px-10 md:p-1 py-10 ">
      {fliplink.map((item, index) => (
        <div
          key={index}
          className="C flip-card xl:w-[30%] md:w-[46%] w-[100%] xl:h-[60vh] md:h-[50vh] h-[50vh] shadow-yellow-500 shadow-md rounded-xl flex "
        >
          <div className="flip-card-inner ">
            <div className="flip-card-front flex flex-col rounded-lg">
              {/* Set background image here */}
              <div
                className="w-[100%] h-[60%] rounded-t-xl bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <div className="h-[40%] md:p-6 p-3 space-y-3 md:text-left text-center">
                <h1 className="md:text-2xl text-xl font-semibold  ">{item.title}</h1>
                <p className=" ">{item.body}</p>
              </div>
            </div>

            <div className="flip-card-back p-5 flex flex-col md:items-start items-center md:justify-around justify-evenly rounded-xl">
              <h3 className="bg-transparent text-xl">
                Click = "{" "}
                <a className="text-red-500" href={item.link}>
                  here
                </a>{" "}
                "<p> for Details about the project.</p>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
