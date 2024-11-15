import React, { useState } from "react";
import Documents from "../../assets/detailSection/Documents.png";
import CircularProgress from "./CircularProgress";
import Steps from "../../assets/Steps.png";
import Membership from "../../assets/membership.png";
import { FaAngleUp } from "react-icons/fa";
const Criteria3 = () => {
  const data = {
    icon: Documents,
    title: "Awards",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt.",
    result: 50,
    status: "Moderate",
  };
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div className="mt-10 font-metropolis  w-full flex flex-col gap-6  ">
      <div className="top p-2 h-[30rem] w-full flex flex-col gap-6 items-center justify-center bg-gradient-to-br from-[#001A5C] to-[#0037C2]">
        <div className="header h-[20%] flex flex-col  ">
          <div className="title text-[#B5B5B5] text-lg font-normal">
            Criteria 3:
          </div>
          <div className="val font-medium text-4xl text-white">
            <span className="text-primary">Published Material</span> About the
            Applicant in Major that
            <p>Require Outstanding Media or Trade Publications </p>
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
            <img src={Membership} alt="" />
          </div>
          <div className="right w-2/3 flex flex-col gap-4 font-normal text-[24px]">
            <p className="text-primary font-medium text-2xl">Explanation</p>
            <ul
              style={{ "list-style-type": "disc" }}
              className="text-xl ml-5 text-[#646464]"
            >
              <li>
                Since no major awards are identified, this criterion has low
                readiness.
              </li>
              <li>
                Since no major awards are identified, this criterion has low
                readiness.
              </li>
            </ul>
          </div>
        </div>
        <hr className=" mt-4 h-[2px] w-[80%]  bg-[#D0D0D0]" />

        <div className="section1 p-4 mt-4 flex flex-row gap-4 w-[80%] ">
          <div className="left">
            <img src={Steps} alt="" />
          </div>
          <div className="right w-2/3 flex flex-col gap-4 font-normal text-[28px]">
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
        </div>

        <div className="section3 flex flex-col  w-[80%]">
          <div className="title  mb-5 flex items-center justify-center text-[#646464] font-semibold text-2xl">
            Frequently Asked Questions
          </div>

          <div className="accrodion flex flex-col space-y-2">
            <div className="accordion-content bg-white rounded-lg shadow-sm border border-neutral-200">
              <div id="headingOne">
                <button
                  className={`${
                    activeElement === "element1"
                      ? "bg-[#D1F7FF] text-primary font-semibold text-xl rounded-b-none"
                      : "bg-white text-neutral-800"
                  } flex items-center justify-between w-full px-5 py-3 rounded-lg transition-colors duration-200   `}
                  type="button"
                  onClick={() => handleClick("element1")}
                  aria-expanded={activeElement === "element1"}
                  aria-controls="collapseOne"
                >
                  Q: What are examples of qualifying associations?
                  <span
                    className={`transform transition-transform duration-200 ${
                      activeElement === "element1" ? "rotate-180" : "rotate-0"
                    } ml-2`}
                  >
                    <FaAngleUp className="text-[#909090] text-2xl" />
                  </span>
                </button>

                {activeElement === "element1" && (
                  <div
                    className="px-6  bg-[#D1F7FF] text-[#646464] font-normal rounded-b-lg transition-all"
                    aria-labelledby="headingOne"
                  >
                    {/* <strong>This is the first item's accordion body.</strong>{" "} */}
                    A: Examples include the American Academy of Arts and
                    Sciences, IEEE Fellowships, and other elite memberships.
                  </div>
                )}
              </div>
            </div>

            <div className="accordion-content bg-white rounded-lg shadow-sm border border-neutral-200">
              <div id="headingOne">
                <button
                  className={`${
                    activeElement === "element2"
                      ? "bg-[#D1F7FF] text-primary font-semibold text-xl rounded-b-none"
                      : "bg-white text-neutral-800"
                  } flex items-center justify-between w-full px-5 py-3 rounded-lg transition-colors duration-200   `}
                  type="button"
                  onClick={() => handleClick("element2")}
                  aria-expanded={activeElement === "element2"}
                  aria-controls="collapseOne"
                >
                  Q: What are examples of qualifying associations?
                  <span
                    className={`transform transition-transform duration-200 ${
                      activeElement === "element2" ? "rotate-180" : "rotate-0"
                    } ml-2`}
                  >
                    <FaAngleUp className="text-[#909090] text-2xl" />
                  </span>
                </button>

                {activeElement === "element2" && (
                  <div
                    className="px-6  bg-[#D1F7FF] text-[#646464] font-normal rounded-b-lg transition-all"
                    aria-labelledby="headingOne"
                  >
                    {/* <strong>This is the first item's accordion body.</strong>{" "} */}
                    A: Examples include the American Academy of Arts and
                    Sciences, IEEE Fellowships, and other elite memberships.
                  </div>
                )}
              </div>
            </div>

            <div className="accordion-content bg-white rounded-lg shadow-sm border border-neutral-200">
              <div id="headingOne">
                <button
                  className={`${
                    activeElement === "element3"
                      ? "bg-[#D1F7FF] text-primary font-semibold text-xl rounded-b-none"
                      : "bg-white text-neutral-800"
                  } flex items-center justify-between w-full px-5 py-3 rounded-lg transition-colors duration-200   `}
                  type="button"
                  onClick={() => handleClick("element3")}
                  aria-expanded={activeElement === "element3"}
                  aria-controls="collapseOne"
                >
                  Q: What are examples of qualifying associations?
                  <span
                    className={`transform transition-transform duration-200 ${
                      activeElement === "element2" ? "rotate-180" : "rotate-0"
                    } ml-2`}
                  >
                    <FaAngleUp className="text-[#909090] text-2xl" />
                  </span>
                </button>

                {activeElement === "element3" && (
                  <div
                    className="px-6  bg-[#D1F7FF] text-[#646464] font-normal rounded-b-lg transition-all"
                    aria-labelledby="headingOne"
                  >
                    {/* <strong>This is the first item's accordion body.</strong>{" "} */}
                    A: Examples include the American Academy of Arts and
                    Sciences, IEEE Fellowships, and other elite memberships.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria3;
