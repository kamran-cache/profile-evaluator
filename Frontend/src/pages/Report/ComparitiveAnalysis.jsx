import React from "react";
import Table from "./Table";

const ComparitiveAnalysis = () => {
  const educationData = {
    education: {
      candidateProfile: "Ph.D. in Computer Science from Regional University",
      successfullA: "Ph.D. in Computer Science from MIT",
      successfullB: "Ph.D. in Data Science from Stanford",
    },

    analysis: {
      candidateProfile:
        "Strong educational background but not from a top-tier institution",
      successfullA: "Top-tier degree enhances credibility",
      successfullB: "Top-tier degree enhances credibility",
    },
    nextSteps: {
      candidateProfile:
        "Consider additional certifications from reputable platforms oruniversities to strengthen academic profile",
      successfullA: "-",
      successfullB: "-",
    },
  };
  return (
    <div className="main font-metropolis  w-full flex flex-col items-center  mt-6 ">
      <div className=" header w-[80%]  flex items-start justify-start">
        <div className="navbar   p-3  mt-5 ">
          <p className="text-[#8D8D8D] text-xl font-medium">Section 3</p>
          <div className="flex flex-row gap-2">
            <p className="title text-black font-semibold text-3xl">
              Comparative{" "}
            </p>
            <p className="title text-[#007EE8] font-semibold text-3xl ">
              Analysis
            </p>
          </div>
        </div>
      </div>

      <div className="body p-3  md:ml-[4.8rem] mt-6 h-[100%] w-[85%]  flex flex-col space-y-4 ">
        <div className="table1 flex flex-col items-center justify-center space-y-6">
          <div className="header flex flex-col items-center justify-center mb-4">
            <div className="title text-[#646464] text-2xl font-semibold">
              Profile Comparison
            </div>
            <p>(Hypothetical case)</p>
          </div>
          <Table data={educationData} />
          <Table data={educationData} />
          <Table data={educationData} />
          <Table data={educationData} />
        </div>
      </div>
    </div>
  );
};

export default ComparitiveAnalysis;
