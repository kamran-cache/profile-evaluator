import React from "react";
import Graph from "../../assets/Graph.png";
import Membership from "../../assets/detailSection/membership-card.png";
import auction from "../../assets/detailSection/auction.png";
import award from "../../assets/detailSection/award.png";
import documents from "../../assets/detailSection/documents.png";
import Group from "../../assets/detailSection/Group.png";
import money from "../../assets/detailSection/money.png";
import Problem from "../../assets/detailSection/problem-solving.png";
import sales from "../../assets/detailSection/sales.png";
import Success from "../../assets/detailSection/successful-businessman.png";
import Vector from "../../assets/detailSection/Vector.png";
import CircularProgress from "./CircularProgress";

const DetailEvaluation = () => {
  const data = [
    {
      icon: Membership,
      title: "Membership",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 81,
    },
    {
      icon: award,
      title: "award",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 81,
    },
    {
      icon: documents,
      title: "Publication",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 81,
    },
    {
      icon: auction,
      title: "Judging",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 81,
    },
    {
      icon: Problem,
      title: "Original Contribution",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 81,
    },
    {
      icon: money,
      title: "Remuneration",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 81,
    },
    {
      icon: sales,
      title: "Authorship",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 81,
    },
    {
      icon: Vector,
      title: "Leading or Critical role",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 31,
    },
    {
      icon: Success,
      title: "Commercial Success ",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 51,
    },
    {
      icon: Group,
      title: "Exhibition",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
      result: 11,
    },
  ];
  return (
    <div className="main font-metropolis mt-8  w-full  flex flex-col items-center justify-center">
      <div className="contianer h-full w-[80%]  flex flex-col">
        <div className="header h-[8rem]  w-full p-3 flex flex-row justify-between">
          <div className="left flex flex-col ">
            <div className="font-medium text-[#8D8D8D] text-lg">Section5</div>
            <div className="mt-2 font-semibold text-2xl">
              Detailed{" "}
              <span className=" font-semibold text-2xl text-primary">
                Criteria
              </span>{" "}
            </div>
            <p className="font-semibold text-2xl text-primary">Evaluation</p>
          </div>
          <div className="right flex flex-col  ">
            <div className="container ">
              <div className="row1  flex flex-row justify-start items-center gap-2">
                <div className="h-3 w-3 bg-[#00A437]"></div>
                <div className="font-medium text-sm mt-1">High Readiness</div>
              </div>

              <div className="row1  flex flex-row justify-start items-center gap-2">
                <div className="h-3 w-3 bg-primary"></div>
                <div className="font-medium text-sm mt-1">
                  Moderate Readiness
                </div>
              </div>
              <div className="row1  flex flex-row justify-start items-center gap-2">
                <div className="h-3 w-3 bg-[#FF9100]"></div>
                <div className="font-medium text-sm mt-1">Low Readiness</div>
              </div>
              <div className="row1  flex flex-row justify-start items-center gap-2">
                <div className="h-3 w-3 bg-[#E63950]"></div>
                <div className="font-medium text-sm mt-1">Lower Readiness</div>
              </div>
            </div>
          </div>
        </div>
        <div className="body bg-[#F5F7FA] h-full w-full flex-col flex  ">
          <div className="top flex flex-row justify-between p-4 ">
            <div className="left flex flex-col w-1/2">
              <div className="title font-semibold text-[40px] text-[#646464]">
                EB1A Criteria Analysis
              </div>
              <div className="body text-primary font-medium text-[26px] mt-3">
                This section evaluates the client's profile based on the EB1A
                visa's ten criteria. To qualify, the applicant must meet at
                least three of these criteria. Each criterion will be scored for
                readiness and potential improvement areas.
              </div>
            </div>
            <div className="right">
              <img src={Graph} alt="" className="h-[312px]" />
            </div>
          </div>
          <div className="bottom w-full flex flex-row">
            <div className="rowleft space-y-8 p-2 w-1/2 flex flex-col items-center justify-center ">
              {data.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="membership w-[70%]  flex justify-between items-center "
                >
                  <div className="left">
                    <CircularProgress
                      percentage={item.result}
                      icon={item.icon}
                    />
                  </div>
                  <div className="right flex flex-col w-[70%] ">
                    <div className="title font-medium text-lg text-[#646464]">
                      {item.title}
                    </div>
                    <div className="content text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque, sunt.
                    </div>
                    <div className="result flex flex-row gap-2 items-center justify-centers">
                      <p className="text-xs text-[#B9B9B9]">
                        Current Readiness:
                      </p>
                      <p className="text-primary text-lg font-medium">
                        81% Moderate
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rowright w-1/2 p-2 space-y-8 flex flex-col items-center justify-center  ">
              {data.slice(5, 10).map((item, index) => (
                <div
                  key={index}
                  className="membership w-[70%]   flex justify-between items-center "
                >
                  {/* <div className="left h-[7rem] w-[7rem] bg-white rounded-full flex items-center justify-center">
                    <img src={item.icon} alt="" />
                  </div> */}
                  <div className="left">
                    <CircularProgress
                      percentage={item.result}
                      icon={item.icon}
                    />
                  </div>
                  <div className="right flex flex-col w-[70%] ">
                    <div className="title font-medium text-lg text-[#646464]">
                      {item.title}
                    </div>
                    <div className="content text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque, sunt.
                    </div>
                    <div className="result flex flex-row gap-2 items-center justify-centers">
                      <p className="text-xs text-[#B9B9B9]">
                        Current Readiness:
                      </p>
                      <p className="text-primary text-lg font-medium">
                        81% Moderate
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEvaluation;
