import React from "react";

const Table = ({ data }) => {
  const educationData = {
    education: {
      candidateProfile: "Ph.D. in Computer Science from Regional University",
      successfullA: "Ph.D. in Computer Science from MIT",
      successfullB: "Ph.D. in Data Science from Stanford",
    },
    analysis: {
      candidateProfile:
        "Strong educational background but not from a top-tier institution Strong educational background but not from a top-tier institution",
      successfullA: "Top-tier degree enhances credibility",
      successfullB: "Top-tier degree enhances credibility",
    },
    nextSteps: {
      candidateProfile:
        "Consider additional certifications from reputable platforms or universities to strengthen academic profile",
      successfullA: "-",
      successfullB: "-",
    },
  };

  return (
    <div className="w-full  border-2 border-[#A0A0A0] rounded-lg text-center">
      <table className="">
        <thead>
          <tr>
            <th className="w-[15%] px-4 py-5 border border-[#A0A0A0] ">
              Criteria
            </th>
            <th className="w-[30%] px-4 py-5 border border-[#A0A0A0]  bg-blue-500 text-white">
              Candidate Profile
            </th>
            <th className="w-[30%] px-4 py-5 border border-[#A0A0A0] ">
              Successful Profile A
            </th>
            <th className="w-[25%] px-4 py-5 border border-[#A0A0A0] ">
              Successful Profile B
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(educationData).map(([criteria, values]) => (
            <tr key={criteria}>
              <td
                className={`w-[10%] px-4 py-8 border border-[#A0A0A0] ${
                  criteria === "education" ? "bg-[#E1F1FF] " : ""
                }`}
              >
                {criteria.charAt(0).toUpperCase() + criteria.slice(1)}
              </td>
              <td className="w-[30%] px-4 py-8 border border-[#A0A0A0] bg-blue-500 text-white">
                {values.candidateProfile}
              </td>
              <td className="w-[30%] px-4 py-8 border border-[#A0A0A0]">
                {values.successfullA}
              </td>
              <td className="w-[30%] px-4 py-8 border border-[#A0A0A0]">
                {values.successfullB}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
