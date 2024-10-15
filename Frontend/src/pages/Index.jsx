import React, { useState } from "react";
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

const MultiStepForm = () => {
  // State to track the current form step
  const [step, setStep] = useState(1);
  const totalSteps = 16; // Total number of form steps

  // Handle Next and Previous button clicks
  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Progress bar width calculation
  const getProgress = () => {
    return `${(step / totalSteps) * 100}%`;
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

        {step === 8 && <Patents />}

        {step === 9 && <OrignalWork />}

        {/* {step === 10 && <MediaMentions />} */}
        {step === 10 && <PressRelease />}
        {step === 11 && <JudgingForm />}
        {step === 12 && <OrignalWork />}

        {step === 13 && <MediaMentions />}

        {step === 14 && <Exhibitions />}

        {step === 15 && <FinalMerits />}
        {step === 16 && <Memberships />}
      </div>

      {/* Navigation buttons */}
      <div className="w-1/2 px-12 mt-6 flex justify-between z-50 relative">
        {step > 1 && (
          <button
            className="fixed left-[5rem] bottom-[1rem] flex-start bg-white hover:shadow-form rounded-md py-3 px-8 text-center text-base font-semibold text-black hover:bg-gray-200 outline outline-1 "
            onClick={prevStep}
          >
            Previous
          </button>
        )}

        {step < totalSteps && (
          <button
            className="fixed right-[50rem] bottom-[1rem] flex-end hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            onClick={nextStep}
          >
            Next
          </button>
        )}

        {step === totalSteps && (
          <button
            className="fixed right-[50rem] bottom-[1rem] py-3 px-8 bg-green-500 hover:bg-green-700 text-white rounded-md"
            onClick={() => alert("Form Submitted!")}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
