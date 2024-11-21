import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Check from "../../assets/check.svg";
import Info from "../../assets/info.svg";

const VisaReadiness = () => {
  const eb1aData = [
    {
      name: "Readiness",
      candidateReadiness: 25,
      avgReadiness: 75,
    },
  ];

  const score = 70; // Score out of 100
  const rotation = (score / 100) * 180;

  // Data for the pie chart, representing 70% readiness and 30% remaining
  const data = [
    { name: "Bad", value: 10 },
    { name: "Average", value: 20 },
    { name: "Good", value: 30 },
    { name: "Excellent", value: 40 },
  ];

  const COLORS = ["#E63950", "#4BA8FF", "#FF9100", "#00A437"];

  // Calculate the position of the needle based on the score
  const getNeedlePosition = (score) => {
    const angle = (score / 100) * 180; // Calculate angle in degrees
    const radius = 90; // Radius for the needle
    const radians = (angle - 90) * (Math.PI / 180); // Convert angle to radians, offset for pie chart
    const x = 100 - radius * Math.cos(radians); // X-coordinate based on center at (100, 100)
    const y = 100 - radius * Math.sin(radians); // Y-coordinate based on center at (100, 100)
    console.log(x, y, "val");
    return { x, y };
  };

  const needlePos = getNeedlePosition(score);
  return (
    <div className="main font-metropolis  xl:h-[180vh] 2xl:h-[120vh] w-full 2xl:mt-[4rem] flex flex-col items-center justify-center">
      <div className="header  flex flex-col justify-center   2xl:mt-5 xl:mt-20">
        <p className="text-4xl font-semibold ">Visa Readiness Overview</p>
        <p className="text-lg font-medium mt-3 text-center">
          Candidate’s Eligibility Status Across Visa Types
        </p>
      </div>
      <div className="body h-full mt-8  w-full flex flex-col items-center">
        <div className="topcontent w-[80%] flex flex-row justify-center gap-5  ">
          <div className="left  flex flex-col w-[40%] group">
            <div className="topcontainer border border-[#DADADA]  rounded-3xl w-full p-5 flex flex-row justify-between">
              <div className="left text-3xl font-semibold w-[30%] flex justify-center items-center ">
                EB1A
              </div>

              <div className="right flex flex-row w-[60%]">
                <div className="1 flex flex-col ">
                  <p className="bg-[#007EE8] text-xs text-white font-medium rounded-xl w-fit px-3 py-1">
                    EB1A
                  </p>{" "}
                  <p className="font-semibold text-lg">
                  Readiness 
                  </p>
                  <p className="font-semibold text-lg -mt-2">
                  Score
                  </p>
                </div>
                <div className="traker h-[8rem] pt-[1rem] -ml-[1rem]">
                  {/* Pie Chart */}

                  <PieChart width={170} height={185}>
                    <Pie
                      data={data}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={63}
                      outerRadius={73}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    {/* Needle */}
                    <line
                      x1={85}
                      y1={88}
                      x2={needlePos.x}
                      y2={needlePos.y}
                      stroke="black"
                      strokeWidth="2"
                    />
                    {/* Needle Circle */}
                    <circle cx={85} cy={88} r={4} fill="black" />
                  </PieChart>
                </div>
              </div>
            </div>
            <div className="hoverdiv hidden group-hover:flex  topcontainer border border-[#DADADA]  rounded-3xl w-full p-5 flex flex-col justify-between items-start mt-4">
              <div className="flex">
              <p className="font-bold text-lg text-[#646464]">EB1A Readiness: </p>
              <p className="font-medium text-lg text-[#646464] ml-2">60%</p>
              </div>
              <div className="flex mt-4 ml-2">
                <img src={Check} className="rounded-full mr-2" />
                <p className="font-bold text-lg text-[#646464]">Strengths: </p>
                <p className="font-medium text-lg text-[#646464] ml-2">Publication, Judging Roles.</p>
              </div>
              <div className="flex ml-2 mt-1">
              <img src={Info} className="rounded-full mr-2" />
                <p className="font-bold text-lg text-[#646464]">Weaknesses: </p>
                <p className="font-medium text-lg text-[#646464] ml-2">Major International Awards</p>
              </div>
            </div>
          </div>
          <div className="right ml-[1rem] w-2/3 flex flex-col">
            <div className="top flex w-full gap-3">
              <div className="1box w-[45%] py-4 px-4 rounded-3xl border-2 border-[#C9C9C9] flex items-center justify-between ">
                <p className="ml-3 font-semibold text-3xl">O1A</p>
                <button className=" border-2 border-[#007EE8] rounded-full py-3 px-3.5 text-xs font-medium text-[#007EE8] hover:bg-custom-radial hover:text-white hover:shadow-md">
                  Check Readiness Score
                </button>
              </div>
              <div className="2box w-[50%] py-2 px-3 rounded-3xl border-2 border-[#C9C9C9] flex items-center justify-between ">
                <p className="ml-3 font-semibold text-3xl"> EB2-NIW</p>
                <button className="border-2 border-[#007EE8] rounded-full py-3 px-3.5 text-xs font-medium text-[#007EE8] hover:bg-custom-radial hover:text-white hover:shadow-md">
                  Check Readiness Score
                </button>
              </div>
            </div>

            <div className="ml-3 mt-4 p-2 text-[#646464]">
              <p className="font-bold text-lg">Key Points</p>
              <ul className="ml-[2rem] font-medium" style={{ "list-style-type": "disc" }}>
                <li>
                  The candidate shows the highest readiness for the EB2-NIW visa
                  (80%), suggesting strong educational and work credentials.
                </li>
                <li>
                  {" "}
                  While readiness for EB1A (70%) and O1A (50%) remains moderate
                  and may require additional achievements to improve
                  eligibility.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="carts mt-10 rounded-lg border-2 border-[#C9C9C9] h-[35rem] w-[80%] flex flex-col">
          <div className="header md:h-[8rem]  w-full flex flex-col items-center justify-center">
            <div
              className="title text-3xl text-[#646464] font-semibold
            "
            >
              {" "}
              Comparison Indicator
            </div>
            <div className="tabs flex flex-row text-xs px-4 py-1 gap-4 bg-[#F6F6F6] rounded-full">
              <div className="one py-1 px-2 text-white bg-primary rounded-full">
                EB1A
              </div>
              <div className="two py-1 px-2  rounded-full">O1A</div>
              <div className="three py-1 px-2  rounded-full">EB2-NIW</div>
            </div>
          </div>
          <div className="charts w-full mt-16 h-[22rem] p-3  flex flex-row items-center justify-center">
            {/* Left container with chart */}
            <div className="left w-3/4  h-full">
              <ResponsiveContainer width="100%" height="100%" className="">
                <BarChart
                  data={eb1aData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="candidateReadiness"
                    fill="#007EE8"
                    barSize={70}
                  />
                  <Bar dataKey="avgReadiness" fill="#D9D9D9" barSize={70} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* Right container with text */}
            <div className="right w-1/3 ml-4">
              <p>
                Your EB1A readiness is 15% lower than the average successful
                applicant. Focus on enhancing contributions and peer-reviewed
                publications to increase your score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaReadiness;
