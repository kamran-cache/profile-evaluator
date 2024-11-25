import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExperience,
  setFormField,
  addRole,
  removeRole,
  setExperience,
} from "../../redux/experienceSlice";
import { addAward, setAwardsFormField } from "../../redux/awardsSlice";
import {
  addEducation,
  setEducationField,
  setEducation,
} from "../../redux/educationSlice";
import { setJudging, setJudgingField } from "../../redux/judgingSlice";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReportModal = ({ data, company, index, setIsModalOpen }) => {
  // Get the role ID from the data object
  const roleId = data.role;

  // Find the corresponding role in the company's roles array
  const roleDetails = company.roles.find((role) => role._id === roleId);

  console.log("modal data", data, company);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" }); // Get full month name
    return `${month} ${year}`; // Format as "Month Year"
  };

  return (
    <>
      <div className="fixed inset-0 z-20 font-metropolis">
        {/* Backdrop */}
        <div
          className="absolute text-white flex items-center justify-normal inset-0 bg-black opacity-70 z-30  cursor-pointer"
          onClick={() => {
            setIsModalOpen(false);
          }} // Close modal on clicking backdrop
        ></div>

        {/* Modal Content */}
        <div className="fixed inset-0 top-[10%] left-[15%] h-[80%] w-[70%] flex items-center justify-center z-50 ">
          <div className="h-[100%] w-[100%] bg-gradient-to-b from-[#FFFFFFE3] to-[#FFFDF9DE]  flex flex-col rounded-lg relative overflow-y-auto">
            <div className="header bg-white p-2 flex justify-between items-center">
              <div className="title  font-normal text-sm text-[#999999]">
                Project {index + 1}
              </div>
              <div
                className="close cursor-pointer  text-lg rounded-full bg-red-500  h-6 w-6 flex items-center justify-center"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                <p className="text-white ">x</p>
              </div>
            </div>
            <div className="content flex flex-col mt-4 p-6 h-full  ">
              <div className="Company details">
                <div className="company  gap-2 flex flex-row bg-[#F2F2F2]">
                  <p className="text-primary font-semibold">
                    {" "}
                    {company.company},
                  </p>
                  <p>
                    {formatDate(roleDetails.startDate)} -{" "}
                    {formatDate(roleDetails.endDate)}
                  </p>
                </div>
                <div className="projectTitle mt-3 flex flex-col">
                  <p className="text-[#858585]">Project Title:</p>
                  <p className="projectName font-medium text-lg text-black">
                    {data.projectTitle}
                  </p>
                </div>
                <hr className="w-full h-[2px] bg-black text-black mt-2" />

                {/* project Overview */}

                <div className="overview flex flex-col mt-3">
                  <div className="title text-primary texxt-lg font-semibold">
                    Project Overview:
                  </div>
                  <div className="content text-[#484848]">
                    {data.summary ? data.summary : "No description available"}
                  </div>
                </div>

                {/* key responsibilities */}
                <div className="responsibilities flex flex-col">
                  <p className="title text-[#646464] font-semibold text-xl mt-3">
                    Key Responsibilities:
                  </p>
                  <ul
                    style={{ listStyleType: "disc", paddingLeft: "20px" }}
                    className="text-[#484848]"
                  >
                    <li>
                      Contribution: <span>{data.contribution}</span>{" "}
                    </li>
                    <li>
                      Deliverables: <span>{data.deliverables}</span>{" "}
                    </li>
                  </ul>
                </div>
                {/* outcomes */}
                <div className="outcomes flex flex-col">
                  <p className="title text-[#646464] font-semibold text-xl mt-3">
                    Outcomes:
                  </p>
                  <ul
                    style={{ listStyleType: "disc", paddingLeft: "20px" }}
                    className="text-[#484848]"
                  >
                    <li>
                      Niche Impact: <span>{data.nicheImpact}</span>{" "}
                    </li>
                    <li>
                      User Impact: <span>{data.userImpact}</span>{" "}
                    </li>
                    <li>
                      Benifit to company: <span>{data.benefitToCompany}</span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportModal;
