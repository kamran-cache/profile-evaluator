import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import Basicimg from "../../assets/BasicImg.png";
import Basic from "../../assets/Basic.svg";
import { PiUserCircleThin } from "react-icons/pi";

const Section1 = ({ data }) => {
  return (
    <div className="main h-screen w-full font-metropolis ">
      {/* <div className="navbar h-12 w-full bg-white border-b border-gray-400 flex flex-row items-center justify-between">
        <div className="left text-[#C2C2C2] ml-6">
          Section1: Basic Information
        </div>
        <div className="right mr-4">
          <img src={Logo} alt="" className="h-8 w-24" />
        </div>
      </div> */}
      <div className="flex flex-col items-center">
        <div className="container md:mt-[5.5vh] flex flex-col items-start justify-center h-[90%] w-[78.2vw]">
          <div className="text-2xl font-custom text-[#C2C2C2] leading-6">
            Section 1: Basic Information
          </div>
          <div className="border border-[#D7D7D7] mt-[1vh] w-[79vw]"></div>
          <div className="title my-6 mt-[6vh]">
            <p className="text-[#8D8D8D] text-xl font-medium leading-5">
              Section 1{" "}
            </p>
            <p className="font-bold text-2xl mt-[1vh] flex flex-row gap-2">
              <p className="text-black font-semibold text-[40px]">Basic </p>
              <p className="text-[#007EE8] font-semibold text-[40px]">
                Information
              </p>
            </p>
          </div>
          <div className="content h-[68.7vh] w-[78.7vw] bg-[#007EE8] flex flex-row items-center justify-center rounded-lg">
            <div className="left relative w-[54.5%] flex items-center justify-center">
              {/* background: linear-gradient(90deg, #4DDAF3 0%, #009EFF 100%); */}
              {/* <PiUserCircleThin className="absolute opacity-100 h-[15rem] w-[15rem] text-white z-10" />
            <div className=" h-[11.5rem] w-[11.5rem]  bg-gradient-to-r from-[#4DDAF3] to-[#009EFF] rounded-full"></div> */}
              <div className="bg-white w-[37vw] xl:h-[56vh] 2xl:h-[54.2vh] flex justify-center items-center rounded-lg">
                <img src={Basic} className="w-[32.48vw] h-[47.5vh]" />
              </div>
            </div>
            <div className="right w-[45.5%]  ">
              <div className="form flex-col space-y-5 bg-white w-[33vw] xl:h-[56vh] 2xl:h-[54.2vh] p-4 rounded-lg">
                <div className="section flex flex-row items-center justify-center gap-2 ">
                  <div className="title text-[#646464] flex items-center w-1/3 h-[3.4vh] p-2 text-justify font-medium leading-5 border-l-2 border-[#007EE8]">
                    Name
                  </div>
                  <div className="value bg-[#F2F2F2] h-[7.5vh] flex items-center justify-center w-1/2 p-2 text-center rounded-sm ml-3 font-medium leading-5">
                    {data.fName} {data.lName}
                  </div>
                </div>
                <div className="section flex flex-row items-center justify-center gap-2 ">
                  <div className="title text-[#646464] flex items-center h-[3.4vh] font-medium leading-5 w-1/3 p-2 text-justify border-l-2 border-[#007EE8]">
                    Nationality
                  </div>
                  <div className="value bg-[#F2F2F2] w-1/2 p-2 text-center h-[7.5vh] flex items-center justify-center rounded-sm ml-3 font-medium leading-5">
                    {data.nationality}
                  </div>
                </div>
                <div className="section flex flex-row items-center justify-center gap-2 ">
                  <div className="title text-[#646464] flex items-center h-[3.4vh] font-medium leading-5 w-1/3 p-2 text-justify border-l-2 border-[#007EE8]">
                    Gender
                  </div>
                  <div className="value bg-[#F2F2F2] w-1/2 p-2 text-center h-[7.5vh] flex items-center justify-center rounded-sm ml-3 font-medium leading-5">
                    {data.gender}
                  </div>
                </div>
                <div className="section flex flex-row items-center justify-center gap-2 ">
                  <div className="title text-[#646464] flex items-center h-[3.4vh] font-medium leading-5 w-1/3 p-2 text-justify border-l-2 border-[#007EE8]">
                    Maritial status
                  </div>
                  <div className="value bg-[#F2F2F2] w-1/2 p-2 text-center h-[7.5vh] flex items-center justify-center rounded-sm ml-3 font-medium leading-5">
                    {data.maritalStatus}
                  </div>
                </div>
                <div className="section flex flex-row items-center justify-center gap-2">
                  <div className="title text-[#646464] flex items-center h-[3.4vh] font-medium leading-5 w-1/3 p-2 text-justify border-l-2 border-[#007EE8]">
                    Email
                  </div>
                  <div className="value bg-[#F2F2F2] w-1/2 p-2 text-center h-[7.5vh] flex items-center justify-center rounded-sm ml-3 font-medium leading-5">
                    {data.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
