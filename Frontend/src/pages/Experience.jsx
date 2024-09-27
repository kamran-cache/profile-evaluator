import React from "react";
import { useState, useRef } from "react";
import Resume from "../assets/resume.jpg";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { addExperience } from "../redux/experienceSlice";

const Experience = () => {
  const textareaRef = useRef(null); // Reference to the textarea

  const dispatch = useDispatch();
  // Function to handle input and resize
  const handleInput = (e) => {
    // const textarea = textareaRef.current;
    // textarea.style.height = "auto"; // Reset height
    // textarea.style.height = `${textarea.scrollHeight}px`; // Set new height based on scroll height
    // setContent(e.target.value); // Update the state with new content
    const { name, value } = e.target;
    dispatch(addExperience({ target: name, value }));
  };

  console.log(store.getState());

  return (
    <>
      <div className="flex w-full pt-4">
        <div className="flex justify-center w-1/2">
          {/* Form component */}
          <div className="flex items-center justify-center px-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form>
                <div className="flex text-2xl font-semibold mb-4">
                  Experience
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What was your <strong>Role</strong> at the company?
                      </label>
                      <input
                        type="text"
                        name="jobName"
                        id="fName"
                        placeholder="Software Developer"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>How long</strong> were you with the company?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="start-date"
                          placeholder="Start Date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                          onChange={handleInput}
                        />
                        <span className="p-2 mt-1 font-semibold"> - </span>
                        <input
                          type="text"
                          name="end-date"
                          placeholder="End Date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        For which <strong>Company</strong> did you work?
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="fName"
                        placeholder="Google"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInput}
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>Where</strong> was the company located?
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="fName"
                        placeholder="New York, NY"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        Provide a <strong>Summary</strong> of your role at the
                        company
                      </label>
                      <textarea
                        placeholder="• Increased website traffic by 25% through SEO strategies
• Collaborated with cross-functional teams to ensure product success"
                        rows="5"
                        name="description"
                        className="w-full h-[11rem] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ref={textareaRef}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-1/2 h-[40rem]">
          <img src={Resume} className="rounded-xl shadow-md" />
        </div>
      </div>
    </>
  );
};

export default Experience;
