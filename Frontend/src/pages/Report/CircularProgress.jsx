import React from "react";

const CircularProgress = ({ percentage, icon, dimension }) => {
  const getColor = (percentage) => {
    if (percentage >= 1 && percentage <= 30) return "#E63950";
    if (percentage >= 31 && percentage <= 60) return "#FF9100";
    if (percentage >= 61 && percentage <= 80) return "#007EE8";
    if (percentage > 80) return "#00A437";
    return "gray"; // Default color if percentage is 0 or undefined
  };

  // Set color based on the percentage
  const color = getColor(percentage);

  return (
    // <div
    //   className="relative h-[7rem] w-[7rem] rounded-full flex items-center justify-center"
    //   style={{
    //     background: `conic-gradient(${color} ${percentage}%, white ${percentage}% 100%)`,
    //   }}
    // >
    //   {/* Center Icon */}
    //   <div className="absolute h-[6.5rem] w-[6.5rem] bg-white rounded-full flex items-center justify-center">
    //     <img src={icon} alt="icon" className="" />
    //   </div>
    // </div>

    <div
      className="relative rounded-full flex items-center justify-center"
      style={{
        height: dimension ? `${dimension}rem` : "7rem",
        width: dimension ? `${dimension}rem` : "7rem",
        background: `conic-gradient(${color} ${percentage}%, white ${percentage}% 100%)`,
      }}
    >
      {/* Center Icon */}
      <div
        className="absolute bg-white rounded-full flex items-center justify-center"
        style={{
          height: dimension ? `${dimension - 0.7}rem` : "6.5rem",
          width: dimension ? `${dimension - 0.7}rem` : "6.5rem",
        }}
      >
        <img src={icon} alt="icon" className={`${dimension ? "h-[6rem] w-[6rem]" : "h-[3rem] w-[3rem]"} `} />
      </div>
    </div>
  );
};

export default CircularProgress;
