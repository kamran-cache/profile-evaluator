import React from "react";
import Graph1 from "../../assets/graph1.svg";
import Graph2 from "../../assets/graph2.svg"
import Rlogo from "../../assets/Rlogo.svg";
import Rlogo2 from "../../assets/Rlogo2.svg"
import Calendar from "../../assets/Calendar.svg";

const Remuneration = () => {
  return (
    <div className="w-full h-full mt-[4rem] font-metropolis">
      {/* Background with opacity applied */}
      <div
        className="absolute w-full h-[140vh] bg-[#FFBFFF]"
        style={{ opacity: 0.22 }}
      />

      {/* Content on top of the background */}
      <div className="flex flex-col items-center opacity-[100%] relative z-10">
        <div className="w-[78.4vw] h-[137vh]  border-b-2 border-[#D9D5EC] pt-[2.4rem]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="w-[300px] h-[80px] font-semibold text-[40px] leading-[40px] text-black">
                <p className="text-[#007EE8]">Remuneration</p>
                <p>Overview</p>
              </div>
              <div className="w-[300px] h-[203px] font-bold text-[20px] leading-[29px] mt-[1rem]">
                <p>
                  This Remuneration overview provides an overview of [Person’s]
                  remuneration across different companies over [number] years,
                  highlighting salary progression.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex w-[821px] h-[413px]">
                <div className="w-[521px] h-[413px] relative">
                  <div className="flex justify-end ">
                    <img src={Rlogo} />
                    <p className="font-semibold text-[22px] leading-[28px] mx-2">
                      Software Engineer
                    </p>
                  </div>
                  <div className="w-[133px] h-[72px] bg-white rounded-md absolute px-[12px] py-[16px] left-[67px] top-[38px] shadow-custom">
                    <p className="font-medium text-[14px] leading-[19px] text-center text-[#7A7A7A]">
                      Median
                    </p>
                    <p className="font-medium text-[22px] leading-[27.5px] text-center text-[#242424]">
                      104829.4
                    </p>
                  </div>
                  <div className="w-[133px] h-[72px] bg-white rounded-md absolute px-[12px] py-[16px] left-[244px] top-[245px] shadow-custom">
                    <p className="font-medium text-[14px] leading-[19px] text-center text-[#7A7A7A]">
                      High
                    </p>
                    <p className="font-medium text-[22px] leading-[27.5px] text-center text-[#242424]">
                      145573.50
                    </p>
                  </div>
                  <div className="w-[133px] h-[72px] bg-white rounded-md absolute px-[12px] py-[16px] left-[388px] top-[340px] shadow-custom">
                    <p className="font-medium text-[14px] leading-[19px] text-center text-[#7A7A7A]">
                      Base
                    </p>
                    <p className="font-medium text-[22px] leading-[27.5px] text-center text-[#242424]">
                      150000.4
                    </p>
                  </div>
                  <img src={Graph1} className="mt-[90px]" />
                </div>
                <div className="flex justify-end items-center w-[300px] h-full relative">
                  <div className="absolute top-0">
                    <img src={Calendar} alt="" />
                  </div>
                  <div className="w-[287px] h-[188px] space-y-[16px] mt-[3rem]">
                    <p className="font-medium text-[18px] leading-[26px]">
                      <span className="font-bold">Base Salary </span>is{" "}
                      <span className="text-green-500 font-bold">
                        $4,425 above
                      </span>{" "}
                      the High Salary
                    </p>
                    <p className="font-medium text-[18px] leading-[26px]">
                      <span className="font-bold">Base + Bonus </span>is{" "}
                      <span className="text-green-500 font-bold">
                        $9,426.4 above
                      </span>{" "}
                      the High Salary
                    </p>
                    <p className="font-medium text-[18px] leading-[26px]">
                      Total{" "}
                      <span className="font-bold">Base + Bonus + Stocks </span>
                      is{" "}
                      <span className="text-green-500 font-bold">
                        $19,425 above
                      </span>{" "}
                      the high Salary
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[859px] border border-1 border-[#CDCDCD] my-[3rem]"></div>
              <div className="flex w-[821px] h-[413px]">
                <div className="w-[521px] h-[413px] relative">
                  <div className="flex justify-end ">
                    <img src={Rlogo2} />
                    <p className="font-semibold text-[22px] leading-[28px] mx-2">
                    Data Analytic
                    </p>
                  </div>
                  <div className="w-[133px] h-[72px] bg-white rounded-md absolute px-[12px] py-[16px] left-[67px] top-[38px] shadow-custom">
                    <p className="font-medium text-[14px] leading-[19px] text-center text-[#7A7A7A]">
                      Median
                    </p>
                    <p className="font-medium text-[22px] leading-[27.5px] text-center text-[#242424]">
                      104829.4
                    </p>
                  </div>
                  <div className="w-[133px] h-[72px] bg-white rounded-md absolute px-[12px] py-[16px] left-[244px] top-[245px] shadow-custom">
                    <p className="font-medium text-[14px] leading-[19px] text-center text-[#7A7A7A]">
                      High
                    </p>
                    <p className="font-medium text-[22px] leading-[27.5px] text-center text-[#242424]">
                      145573.50
                    </p>
                  </div>
                  <div className="w-[133px] h-[72px] bg-white rounded-md absolute px-[12px] py-[16px] left-[388px] top-[340px] shadow-custom">
                    <p className="font-medium text-[14px] leading-[19px] text-center text-[#7A7A7A]">
                      Base
                    </p>
                    <p className="font-medium text-[22px] leading-[27.5px] text-center text-[#242424]">
                      150000.4
                    </p>
                  </div>
                  <img src={Graph2} className="mt-[90px]" />
                </div>
                <div className="flex justify-end items-center w-[300px] h-full relative">
                  <div className="absolute top-0">
                    <img src={Calendar} alt="" />
                  </div>
                  <div className="w-[287px] h-[188px] space-y-[16px] mt-[3rem]">
                    <p className="font-medium text-[18px] leading-[26px]">
                      <span className="font-bold">Base Salary </span>is{" "}
                      <span className="text-green-500 font-bold">
                        $4,425 above
                      </span>{" "}
                      the High Salary
                    </p>
                    <p className="font-medium text-[18px] leading-[26px]">
                      <span className="font-bold">Base + Bonus </span>is{" "}
                      <span className="text-green-500 font-bold">
                        $9,426.4 above
                      </span>{" "}
                      the High Salary
                    </p>
                    <p className="font-medium text-[18px] leading-[26px]">
                      Total{" "}
                      <span className="font-bold">Base + Bonus + Stocks </span>
                      is{" "}
                      <span className="text-green-500 font-bold">
                        $19,425 above
                      </span>{" "}
                      the high Salary
                    </p>
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

export default Remuneration;
