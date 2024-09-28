import React, { useState } from "react";
import Education from "./Education";
import VisaForm from "./Visa";
import Experience from "./Experience";
import BasicDetails from "./BasicDetails";
import Authorship from "./Authorship";

const MultiStepForm = () => {
  // State to track the current form step
  const [step, setStep] = useState(1);
  const totalSteps = 5; // Total number of form steps

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
    <div className=" mt-10 p-6 bg-white shadow-md rounded-lg">
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
        {/* Education */}
        {step === 5 && <Authorship />}
      </div>

      {/* Navigation buttons */}
      <div className="w-1/2 px-12 mt-6 flex justify-between relative z-50">
        {step > 1 && (
          <button
            className="fixed left-4 bottom-4  bg-white hover:shadow-form rounded-md py-3 px-8 text-center text-base font-semibold text-black hover:bg-gray-200 outline outline-1"
            onClick={prevStep}
          >
            Previous
          </button>
        )}

        {step < totalSteps && (
          <button
            className="fixed right-0 bottom-0 flex-end hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            onClick={nextStep}
          >
            Next
          </button>
        )}

        {step === totalSteps && (
          <button
            className="fixed right-0 bottom-0 py-3 px-8 bg-green-500 hover:bg-green-700 text-white rounded-md"
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
