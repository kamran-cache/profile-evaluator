import React, { useState, useEffect } from "react";
import Education from "../components/Basic/Education";
import VisaForm from "../components/Basic/Visa";
import Experience from "../components/Basic/Experience";
import BasicDetails from "../components/Basic/BasicDetails";
import Authorship from "../components/Basic/Authorship";
import Awards from "../components/Basic/Awards";
import Scholarships from "../components/Basic/Scholarships";
import Patents from "../components/Basic/Patents";
import OrignalWork from "../components/Basic/OrignalWork";
import MediaMentions from "../components/Basic/MediaMentions";
import Exhibitions from "../components/Basic/Exhibitions";
import FinalMerits from "../components/Basic/FinalMerits";
import JudgingForm from "../components/Basic/Judging";
import PressRelease from "../components/Basic/PressRelease";
import Memberships from "../components/Basic/Memberships";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../redux/personalInfoSlice";
import { setVisa } from "../redux/visaSlice";
import { useParams } from "react-router-dom";
import { store } from "../redux/store";
import axios from "axios";
import { setExperience } from "../redux/experienceSlice";
import { setEducation } from "../redux/educationSlice";
import { setAwards } from "../redux/awardsSlice";
import { setScholarship } from "../redux/scholarshipSlice";
import { setAuthorship } from "../redux/authorshipSlice";
import { setPressRelease } from "../redux/pressReleaseSlice";
import { setJudging } from "../redux/judgingSlice";
import { setExhibition } from "../redux/exhibitionSlice";

const MultiStepForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const totalSteps = 12; // Total number of form steps

  const getData = async () => {
    try {
      const token = window.localStorage.getItem("token");
      console.log(id);
      if (id !== "undefined") {
        const response = await axios.get(
          `http://localhost:5000/api/v1/profile/${id}`
          // {
          //   headers: { token: `Bearer ${token}` },
          // }
        );
        const responseData = response.data;
        // setData(paperData.paper);
        console.log(responseData, 321);
        console.log(responseData.personal_info, "paperData");

        // Update Redux store
        dispatch(setPersonalInfo(responseData.personal_info));
        dispatch(setVisa(responseData.visa));
        dispatch(setExperience(responseData.experience));
        dispatch(setEducation(responseData.education));
        dispatch(setAwards(responseData.awards));
        dispatch(setScholarship(responseData.scholarships));
        dispatch(setAuthorship(responseData.authorships));
        dispatch(setPressRelease(response.data.pressRelease));
        dispatch(setJudging(response.data.judging));
        dispatch(setExhibition(response.data.exhibitions));
        console.log(store.getState(), "updated data");
      }
    } catch (error) {
      console.error("There was an error fetching the paper data!", error);
    }
  };

  useEffect(() => {
    console.log(window.localStorage.getItem("token"));
    if (!window.localStorage.getItem("token")) {
      // console.log()
      navigate("/login");
    }
    getData();
    console.log(store.getState(), 123);
  }, [id]);

  // Progress bar width calculation
  const step = useSelector((state) => state.application.step);
  const getProgress = () => {
    return `${(step / totalSteps) * 100}%`;
  };
  const handleSubmit = (data, api) => {
    console.log("Submitting data for step", step, data, api);
  };
  return (
    <div className=" mt-1 p-6 bg-white rounded-lg">
      <div className="mb-4">
        {/* Progress bar */}
        <div className="relative w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="absolute top-0 h-2.5 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: getProgress() }}
          ></div>
        </div>
      </div>

      {/* Form steps */}
      <div>
        {/* Basic Details */}
        {step === 1 && <BasicDetails />}

        {/* VISA Details */}
        {step === 2 && <VisaForm />}

        {/* Experience */}
        {step === 3 && <Experience />}

        {/* Education */}
        {step === 4 && <Education />}

        {step === 5 && <Awards />}

        {step === 6 && <Scholarships />}

        {step === 7 && <Authorship />}

        {/* {step === 8 && <Patents />} */}

        {/* {step === 8 && <OrignalWork />} */}

        {step === 8 && <PressRelease />}
        {step === 9 && <JudgingForm />}
        {/* {step === 12 && <OrignalWork />} */}

        {/* {step === 11 && <MediaMentions />} */}

        {step === 10 && <Exhibitions />}

        {step === 11 && <FinalMerits />}
        {step === 12 && <Memberships />}
      </div>

      {/* Navigation buttons
      // <div className="w-1/2 px-12 mt-6 flex justify-between z-50 relative">
      //   {step > 1 && (
      //     <button
      //       className="fixed left-[5rem] bottom-[1rem] flex-start bg-white hover:shadow-form rounded-md py-3 px-8 text-center text-base font-semibold text-black hover:bg-gray-200 outline outline-1 "
      //       onClick={prevStep}
      //     >
      //       Previous
      //     </button>
      //   )}

      //   {step < totalSteps && (
      //     <button
      //       className="fixed right-[50rem] bottom-[1rem] flex-end hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
      //       onClick={(data, api) => {
      //         handleSubmit(data, api);
      //         nextStep();
      //       }}
      //     >
      //       Next
      //     </button>
      //   )}

      //   {step === totalSteps && (
      //     <button
      //       className="fixed right-[50rem] bottom-[1rem] py-3 px-8 bg-green-500 hover:bg-green-700 text-white rounded-md"
      //       onClick={() => alert("Form Submitted!")}
      //     >
      //       Submit
      //     </button>
      //   )}
      // </div> */}
    </div>
  );
};

export default MultiStepForm;
