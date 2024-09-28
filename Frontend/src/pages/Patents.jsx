import React from 'react'
import { useState, useRef } from "react";
import Patent from '../assets/Patent.jpg';
import './index.css';

const Patents = () => {
  return (
    <>
        <div className="flex w-full pt-4 h-[86vh]">
        
        <div className="flex justify-center w-1/2 h-full">
          {/* Form component */}
          <div className="flex flex-col justify-between w-full pl-12 bg-white">
            {/* Scrollable form content */}
            <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent"> 
              <form className='w-full pr-12'>
                <div className="flex text-2xl font-semibold mb-4">
                Your Innovation Journey: Patents & Citations
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Title</strong> of the patent?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g., Method for Improving Battery Efficiency"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Patent Number</strong>?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="e.g., 'US1234567B2'"
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
                        What is the <strong>Filing Date</strong> of the patent?
                      </label>
                      <input
                        type="date"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Grant Date</strong> of the patent?
                      </label>
                      <input
                        type="date"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Current Status</strong> of the patent?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g., 'Issued, Pending, Abandoned'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        In which <strong>Country</strong> was the patent filed?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g.,  United States, India"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Type of Patent</strong>?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g.,  Utility, Design, Plant"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                      What is the <strong>Affiliated Institution</strong> or company for this patent?
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g.,  University of Michigan, Google Inc."
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                      Please list any <strong>Citations</strong> of the patent in high-impact journals.
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g.,  Journal Name, Volume, Issue, Pages, Year"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                      Please list any <strong>International Citations</strong> of the patent.
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g.,  Journal Name, Volume, Issue, Pages, Year "
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-1/2 h-full">
          <div className="sticky top-4"> {/* Sticky image */}
            <img src={Patent} className="rounded-xl shadow-md h-[40rem]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Patents