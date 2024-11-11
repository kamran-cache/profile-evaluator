import React from "react";

const Strength = () => {
  return (
    <div className="h-[43rem] w-full bg-yellow-400 font-metropolis flex justify-center items-center">
      <div className="w-[75%] relative bg-gradient-to-b from-[#007EE8] to-[#1641F1] h-[90%] rounded-lg flex flex-col items-center justify-end">
        <div className=" absolute left-16 top-16 header font-semibold text-4xl text-white bg-green-500">
          Strengths
        </div>
        <div className="centerElement flex items-center justify-center  bg-pink-400 h-[80%] w-full">
          <div className="center relative bg-pink-900 h-[25rem] w-[25rem] rounded-full">
            {/* <div className="circle relative h-44 w-44 bg-black rounded-full"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
