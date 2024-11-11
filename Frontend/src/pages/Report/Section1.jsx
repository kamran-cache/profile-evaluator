import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import { PiUserCircleThin } from "react-icons/pi";

const Section1 = ({ data }) => {
  return (
    <div className="main  h-screen w-full  font-metropolis ">
      <div className="navbar h-12 w-full bg-white border-b border-gray-400 flex flex-row items-center justify-between">
        <div className="left text-[#C2C2C2] ml-6">
          Section1: Basic Information
        </div>
        <div className="right mr-4">
          <img src={Logo} alt="" className="h-8 w-24" />
        </div>
      </div>
      <div className="container md:mt-5 flex flex-col items-start justify-center h-[90%] w-full px-[8rem] ">
        <div className="title  ml-12 my-6">
          <p className="text-[#8D8D8D] text-[20px] font-medium">Section1: </p>
          <p className="font-bold text-2xl flex flex-row gap-2">
            <p className="text-black font-semibold text-[40px]">Personal </p>
            <p className="text-[#007EE8] font-semibold text-[40px]">
              Information
            </p>
          </p>
        </div>
        <div className="content h-[80%] w-full bg-[#007EE8] flex flex-row items-center justify-center rounded-lg">
          <div className="left relative w-1/2 flex items-center justify-center">
            {/* background: linear-gradient(90deg, #4DDAF3 0%, #009EFF 100%); */}
            <PiUserCircleThin className="absolute opacity-100 h-[15rem] w-[15rem] text-white  " />
            <div className=" h-[11.5rem] w-[11.5rem]  bg-gradient-to-r from-[#4DDAF3] to-[#009EFF] rounded-full"></div>
          </div>
          <div className="right w-1/2  ">
            <div className="form flex-col space-y-8 bg-white w-[70%] p-4 rounded-lg">
              <div className="section flex flex-row items-center justify-center gap-2 my-2">
                <div className="title  w-1/3 p-2 text-justify  border-l-2 border-[#007EE8]">
                  Name
                </div>
                <div className="value bg-[#F2F2F2] w-1/2 p-2 text-center rounded-lg ml-3 font-medium">
                  {data.fName} {data.lName}
                </div>
              </div>
              <div className="section flex flex-row items-center justify-center gap-2 my-2">
                <div className="title  w-1/3 p-2 text-justify border-l-2 border-[#007EE8]">
                  Nationality
                </div>
                <div className="value bg-[#F2F2F2] w-1/2 p-2 text-center rounded-lg ml-3 font-medium">
                  {data.nationality}
                </div>
              </div>
              <div className="section flex flex-row items-center justify-center gap-2 my-2">
                <div className="title  w-1/3 p-2 text-justify border-l-2 border-[#007EE8]">
                  Gender
                </div>
                <div className="value bg-[#F2F2F2] w-1/2 p-2 text-center rounded-lg ml-3 font-medium">
                  {data.gender}
                </div>
              </div>
              <div className="section flex flex-row items-center justify-center gap-2 my-2">
                <div className="title  w-1/3 p-2 text-justify border-l-2 border-[#007EE8]">
                  Maritial status
                </div>
                <div className="value bg-[#F2F2F2] w-1/2 p-2 text-center rounded-lg ml-3 font-medium">
                  {data.maritalStatus}
                </div>
              </div>
              <div className="section flex flex-row items-center justify-center gap-2  ">
                <div className="title  w-1/3 p-2 text-justify border-l-2 border-[#007EE8]">
                  Email
                </div>
                <div className="value bg-[#F2F2F2] w-1/2 p-2 text-center rounded-lg ml-3 font-medium">
                  {data.email}
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
