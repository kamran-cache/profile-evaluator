import React from 'react'
import { useState, useRef } from "react";
import Scholarship from '../assets/scholarship.webp';

const Scholarships = () => {
  return (
    <>
        <div className="flex w-full pt-4">
        <div className="flex justify-center w-1/2 h-full">
          {/* Form component */}
          <div className="flex flex-col justify-between w-full pl-12 bg-white">
            {/* Scrollable form content */}
            <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent"> 
              <form className='w-full pr-12'>
                <div className="flex text-2xl font-semibold mb-4">
                Share Your Scholarships & Grants
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Name</strong> of the scholarship or grant you received?
                      </label>
                      <input
                        type="text"
                        name="Name"
                        id="fName"
                        placeholder="e.g., 'National Merit Scholarship'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        Which <strong>Organization</strong> awarded the scholarship or grant?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="Issuing Organisation"
                          id="fName"
                          placeholder="e.g., 'University of XYZ', 'National Science Foundation'"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Duration</strong> of the scholarship or grant?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="startDate"
                          placeholder="Start Date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                        />
                        <span className="p-2 mt-1 font-semibold"> - </span>
                        <input
                          type="text"
                          name="endDate"
                          placeholder="End Date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                      In which <strong>Mode</strong> did you apply for the scholarship?{" "}
                        
                      </label>
                      <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                        <option value="" disabled>
                          -- select mode --
                        </option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        In which <strong>Country</strong> is the issuing organization located?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g., 'United States', 'Canada'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Total Amount</strong> awarded for the scholarship or grant?
                      </label>
                      <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex text-base font-medium  items-center pl-3">
                      $
                    </span>
                      <input
                        type="number"
                        name="fName"
                        id="fName"
                        placeholder="Enter Amount"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                      />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Purpose</strong> of the scholarship or grant?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g., 'Tuition assistance', 'Research funding'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is your <strong>Field of study</strong> or research associated with the scholarship or grant?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g., 'Computer Science', 'Biology'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What were the <strong>Eligibility Criteria</strong> for this scholarship or grant?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g., 'GPA of 3.5 or higher'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What <strong>Type of Grant</strong> did you receive?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g., 'Merit-based', 'Need-based'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[3rem] w-1/2 ">
            <div className="sticky top-4">
          <img src={Scholarship} className="rounded-xl shadow-md w-[40rem] h-[30rem]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Scholarships