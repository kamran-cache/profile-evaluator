import React from 'react'
import { useState, useRef } from "react";
import Resume from '../assets/resume.jpg';

const Education = () => {

    const textareaRef = useRef(null); // Reference to the textarea

  // Function to handle input and resize
  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new height based on scroll height
    setContent(e.target.value); // Update the state with new content
  };

  return (
<>
      <div className="flex w-full pt-4">
        <div className="flex justify-center w-1/2">
          {/* Form component */}
          <div className="flex items-center justify-center px-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form>
                <div className="flex text-2xl font-semibold mb-4">
                  Education
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                      What is your <strong>Degree / Qualification and major?</strong> 
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Bachelor of Technology in Computer Science"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>Where</strong> did you earn your degree/qualification?
                      </label>
                      <div className="flex space-x- w-full">
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="University of California"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>When</strong> did you earn your degree
                      </label>
                      <input
                        type="date"
                        placeholder="Date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>Where</strong> is the institute located?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Los Angeles, CA"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>Additional</strong> information
                      </label>
                      <textarea
                        placeholder="• Awarded full scholarship for 4 years due to good grades"
                        rows="3"
                        className="w-full h-[7rem] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
  )
}

export default Education