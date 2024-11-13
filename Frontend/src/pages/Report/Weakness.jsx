import React from "react";
import Motivation from "../../assets/motivation.png";
import Exclamation from "../../assets/Exclamation.png";

const Weakness = () => {
  const elements = [
    { id: 1, title: "Membership", desc: "fgdf" },
    { id: 2, title: "Membership", desc: "fgdf" },
    { id: 3, title: "Membership", desc: "fgdf" },
    { id: 4, title: "Membership", desc: "fgdf" },
    { id: 4, title: "Membership", desc: "fgdf" },
  ];
  return (
    <div className="h-[43rem] w-full  font-metropolis flex justify-center items-center">
      <div className="w-[85%] p-6 relative bg-gradient-to-b from-[#007EE8] to-[#1641F1] h-[95%] rounded-lg flex flex-col items-center justify-end">
        <div className=" absolute left-16 top-16 header font-semibold text-4xl text-white ">
          Areas of Improvement
        </div>
        <div className="centerElement    flex items-center justify-center   h-[70%] w-full">
          <div className="relative  h-[19rem] w-[25rem] ">
            <div className="relative z-10  h-[15.5rem] w-[25rem] rounded-t-full overflow-hidden">
              {/* Semicircle border */}
              <div className="relative z-10 inset-0 h-[15.5rem] w-[25rem] rounded-t-full border-2 border-white border-b-0 flex items-center justify-center">
                {/* <img src={Motivation} alt="" /> */}
              </div>
            </div>
            {/* Ticks positioned along the top arc */}
            {elements.map((item, index) => {
              // Calculate angle for each tick position along the arc
              const angle = (index / (elements.length - 1)) * Math.PI; // evenly spread on the semicircle
              const borderWidth = 4; // Adjust to match the border width defined in Tailwind

              const radius = 200; // increase radius to align with the outer border edge
              const centerX = 200; // half of the width of the semicircle
              const centerY = 200; // centerY adjusted to lift ticks slightly upward

              let x = centerX + radius * Math.cos(angle); // X position on the arc
              let y = centerY + 3 - radius * Math.sin(angle); // Y position on the arc

              //   content display parameters
              const contentAngle = (index / (elements.length - 1)) * Math.PI; // evenly spread on the semicircle

              const contentRadius = 365; // increase radius to align with the outer border edge
              const contentCenterX = 200; // half of the width of the semicircle
              const contentCenterY = 200; // centerY adjusted to lift ticks slightly upward

              let X = contentCenterX + contentRadius * Math.cos(contentAngle); // X position on the arc
              let Y =
                contentCenterY + 3 - contentRadius * Math.sin(contentAngle);

              return (
                <div className="container inset-0 absolute z-40 h-20 w-40 flex gap-4 ">
                  <div
                    key={item.id}
                    className="absolute z-40 h-16 w-16 flex items-center justify-center rounded-full bg-white"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                    title={item.title} // shows tooltip with the title on hover
                  >
                    <img
                      src={Exclamation}
                      alt={item.title}
                      className="w-6 h-6"
                    />
                  </div>
                  <div
                    key={item.id}
                    className="absolute z-40 flex flex-col items-center text-center w-[16.5rem]  "
                    style={{
                      left: `${X}px`,
                      top: `${Y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                    title={item.title} // shows tooltip with the title on hover
                  >
                    <p className="font-semibold text-[18px] text-white">
                      {item.title}
                    </p>
                    <p className="text-[14px] text-white font-medium">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      In, eveniet magnam! Odio saepe exercitationem ipsum
                      maiores dolorem rerum earum similique!
                    </p>
                    {/* <img src={Tick} alt={item.title} className="w-6 h-6" /> */}
                  </div>
                </div>
              );
            })}
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Weakness;
