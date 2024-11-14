import React from "react";
import award from "../../assets/detailSection/award.png";
import CircularProgress from "./CircularProgress";
import Awards from "../../assets/awards.png";
const Criteria1 = () => {
  const data = {
    icon: award,
    title: "Awards",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
    result: 50,
    status: "Moderate",
  };
  return (
    <div className="mt-10 font-metropolis  w-full flex flex-col gap-6  ">
      <div className="top p-2 h-[30rem] w-full flex flex-col gap-6 items-center justify-center bg-gradient-to-br from-[#001A5C] to-[#0037C2]">
        <div className="header h-[20%] flex flex-col  ">
          <div className="title text-[#B5B5B5] text-lg font-normal">
            Criteria 1:
          </div>
          <div className="val font-medium text-4xl text-white">
            Evidence of Receipt of Major Internationally Recognized
            <p className="text-primary">Awards</p>
          </div>
        </div>
        <div className="content h-[60%]  p-3 w-[80%] flex flex-row items-center justify-center">
          <div className="left w-1/2 flex  items-center justify-center border-r-2 border-r-[#038CFF]">
            <CircularProgress
              percentage={data.result}
              icon={data.icon}
              dimension={9}
            />
            <div className="flex flex-col ml-12 ">
              <p className="text-white font-medium"> Current Readiness:</p>
              <p className="val text-4xl font-medium ">{data.result}%</p>
              <p className="text-white font-medium">{data.status}</p>
            </div>
          </div>
          <div className="right w-1/2 flex flex-col items-center justify-center  ">
            <p className="title -ml-12 font-medium text-3xl text-[#D9D9D9]">
              Interpretation
            </p>
            <p className="val font-normal text-justify text-[20px] text-[#FFFFFF] ">
              No major awards listed,
              <p>but other accomplishments </p>
              <p>may supplement this .</p>
              <p>criterion</p>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom flex flex-col gap-4 items-center justify-center ">
        <div className="section1  p-4 flex flex-row gap-4 w-[80%]  ">
          <div className="left">
            <img src={Awards} alt="" />
          </div>
          <div className="right w-2/3 flex flex-col gap-4 font-normal text-[24px]">
            The EB1A visa emphasizes significant international awards such as
            the Nobel Prize or Pulitzer Prize.
            <p>
              Since no major awards are identified, this criterion has low
              readiness.
            </p>
          </div>
        </div>
        <hr className=" mt-4 h-[2px] w-[80%]  bg-[#D0D0D0]" />

        <div className="section1 p-4 mt-4 flex flex-row gap-4 w-[80%] ">
          <div className="left w-2/3 flex flex-col gap-4 font-normal text-[28px]">
            <div className="title font-bold text-2xl text-[#646464]">
              Opportunities for Improvement
            </div>
            <ul
              className="text-lg text-[#646464] ml-5"
              style={{ "list-style-type": "disc" }}
            >
              <li>
                Focus on field-specific international awards that could be more
                accessible (e.g., awards in academia, industry).
              </li>
            </ul>
            <p className="text-lg text-[#646464] font-medium">Next Steps:</p>
            <ul
              className="text-lg text-[#646464] ml-5"
              style={{ "list-style-type": "disc" }}
            >
              <li>
                Focus on field-specific international awards that could be more
                accessible (e.g., awards in academia, industry).
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={Awards} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria1;
