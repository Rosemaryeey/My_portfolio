import React, { useState, useEffect } from "react";

const CountdownSection = () => {
  const [countdown, setCountdown] = useState(10); // Initial countdown value
  const [total, setTotal] = useState(0); // Total sum

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setTotal(total + countdown);
    }
  }, [countdown, total]);

  return (
    <section className="text md:w-[40vw] w-[90vw] md:h-[60vh] h-[60vh] p-5 flex flex-col items-center justify-around">
      <div className="md:w-[35vw] w-[90vw] flex md:flex-col flex-row sm:items-start items-center justify-around md:h-[60vh] h-[35vh]">
        <aside className="flex items-center justify-around md:w-[40vw] w-[58vw] md:h-[20vh] h-[30vh]">
          <div className="shadow-md shadow-yellow-500 bo md:w-[15vw] w-[22vw] md:h-[25vh] h-[25vh] rounded-2xl flex flex-col p-6 justify-around items-center border-white border-2">
            <span className="text-yellow-500 text-3xl">{countdown}</span>
            Seconds Remaining
          </div>
          <div className="border-white border-2 md:w-[15vw] w-[22vw] md:h-[25vh] h-[25vh] rounded-2xl flex flex-col p-6 justify-around items-center shadow-md shadow-yellow-500">
            <span className="text-yellow-500 text-3xl">{total}</span>
            Total Sum
          </div>
        </aside>
        <aside className="flex items-center justify-around md:w-[20vw] w-[25vw] md:h-[20vh] h-[30vh]">
          <div className="border-white border-2 md:w-[15vw] w-[22vw] md:h-[25vh] h-[25vh] rounded-2xl flex flex-col p-6 justify-around items-center md:ml-[1vw] ml-0 shadow-md shadow-yellow-500">
            <span className="text-yellow-500 text-3xl">3+</span>
            ipsam animi?jugig
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CountdownSection;
