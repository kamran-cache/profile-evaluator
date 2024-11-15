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
        className="absolute w-full 2xl:h-[140vh] xl:h-[148vh] bg-[#FFBFFF]"
        style={{ opacity: 0.22 }}
      />

      {/* Content on top of the background */}
      <div className="flex flex-col items-center opacity-[100%] relative z-10">
        <div className="w-[78.4vw] 2xl:h-[137vh] xl:h-[144vh] border-b-2 border-[#D9D5EC] pt-[2.4rem]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="w-[19.53vw] h-[11vh] font-semibold text-4xl text-black">
                <p className="text-[#007EE8]">Remuneration</p>
                <p>Overview</p>
              </div>
              <div className="w-[19.53vw] h-[2.55vh] font-bold text-xl mt-[1rem]">
                <p>
                  This Remuneration overview provides an overview of [Person’s]
                  remuneration across different companies over [number] years,
                  highlighting salary progression.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex w-[53.45vw] h-[56.7vh] ">
                <div className="w-[33.9vw] h-full relative ">
                  <div className="flex justify-end ">
                    <img src={Rlogo} />
                    <p className="font-semibold text-xl mx-2">
                      Software Engineer
                    </p>
                  </div>
                  <div className="w-[8.65vw] h-[9.8vh] bg-white rounded-md absolute px-3 xl:py-2 2xl:py-4 left-[4.5rem] xl:top-4 2xl:top-9 shadow-custom z-10">
                    <p className="font-medium text-sm text-center text-[#7A7A7A]">
                      Median
                    </p>
                    <p className="font-medium text-xl text-center text-[#242424]">
                      104829.4
                    </p>
                  </div>
                  <div className="w-[8.65vw] h-[9.8vh] bg-white rounded-md absolute px-3 xl:py-2 2xl:py-4 right-32 xl:bottom-[4.5rem] 2xl:bottom-[5.5rem] shadow-custom z-10">
                    <p className="font-medium text-sm text-center text-[#7A7A7A]">
                      High
                    </p>
                    <p className="font-medium text-xl text-center text-[#242424]">
                      145573.50
                    </p>
                  </div>
                  <div className="w-[8.65vw] h-[9.8vh] bg-white rounded-md absolute px-3 xl:py-2 2xl:py-4 2xl:-right-2 xl:right-2 -bottom-1 shadow-custom z-10">
                    <p className="font-medium text-sm text-center text-[#7A7A7A]">
                      Base
                    </p>
                    <p className="font-medium text-xl text-center text-[#242424]">
                      150000.4
                    </p>
                  </div>
                  <img src={Graph1} className="xl:w-[75%] 2xl:w-[88%] 2xl:left-0 xl:left-8 absolute bottom-4 z-0" />
                </div>
                <div className="flex justify-end items-center w-[19.53vw] h-full relative">
                  <div className="absolute top-0">
                    <img src={Calendar} />
                  </div>
                  <div className="w-[18.68vw] h-[26.8vh] space-y-4 2xl:mt-[3rem]">
                    <p className="font-medium text-lg">
                      <span className="font-bold">Base Salary </span>is{" "}
                      <span className="text-green-500 font-bold">
                        $4,425 above
                      </span>{" "}
                      the High Salary
                    </p>
                    <p className="font-medium text-lg">
                      <span className="font-bold">Base + Bonus </span>is{" "}
                      <span className="text-green-500 font-bold">
                        $9,426.4 above
                      </span>{" "}
                      the High Salary
                    </p>
                    <p className="font-medium text-lg">
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
              <div className="w-[55.92vw] border border-1 border-[#CDCDCD] my-[3rem]"></div>
              <div className="flex w-[53.45vw] h-[56.7vh] ">
                <div className="w-[33.9vw] h-full relative ">
                  <div className="flex justify-end ">
                    <img src={Rlogo2} />
                    <p className="font-semibold text-xl mx-2">
                    Data Analytic
                    </p>
                  </div>
                  <div className="w-[8.65vw] h-[9.8vh] bg-white rounded-md absolute px-3 xl:py-2 2xl:py-4 left-[4.5rem] xl:top-6 2xl:top-9 shadow-custom z-10">
                    <p className="font-medium text-sm text-center text-[#7A7A7A]">
                      Median
                    </p>
                    <p className="font-medium text-xl text-center text-[#242424]">
                      104829.4
                    </p>
                  </div>
                  <div className="w-[8.65vw] h-[9.8vh] bg-white rounded-md absolute px-3 xl:py-2 2xl:py-4 right-32 xl:bottom-[4.8rem] 2xl:bottom-[5.5rem] shadow-custom z-10">
                    <p className="font-medium text-sm text-center text-[#7A7A7A]">
                      High
                    </p>
                    <p className="font-medium text-xl text-center text-[#242424]">
                      145573.50
                    </p>
                  </div>
                  <div className="w-[8.65vw] h-[9.8vh] bg-white rounded-md absolute px-3 xl:py-2 2xl:py-4 2xl:-right-2 xl:right-2 -bottom-1 shadow-custom z-10">
                    <p className="font-medium text-sm text-center text-[#7A7A7A]">
                      Base
                    </p>
                    <p className="font-medium text-xl text-center text-[#242424]">
                      150000.4
                    </p>
                  </div>
                  <img src={Graph2} className="xl:w-[75%] 2xl:w-[88%] 2xl:left-0 xl:left-8 absolute bottom-4 z-0" />
                </div>
                <div className="flex justify-end items-center w-[300px] h-full relative">
                  <div className="absolute top-0">
                    <img src={Calendar} alt="" />
                  </div>
                  <div className="w-[18.68vw] h-[26.8vh] space-y-4 mt-[3rem]">
                    <p className="font-medium text-lg">
                      <span className="font-bold">Base Salary </span>is{" "}
                      <span className="text-green-500 font-bold">
                        $4,425 above
                      </span>{" "}
                      the High Salary
                    </p>
                    <p className="font-medium text-lg">
                      <span className="font-bold">Base + Bonus </span>is{" "}
                      <span className="text-green-500 font-bold">
                        $9,426.4 above
                      </span>{" "}
                      the High Salary
                    </p>
                    <p className="font-medium text-lg">
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
