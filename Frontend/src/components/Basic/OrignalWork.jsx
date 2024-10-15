import React from 'react'
import { useState, useRef } from "react";
import Recognition from '../../assets/Recognition.webp';

const OrignalWork = () => {

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
                Share Your Original Work and Contributions
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                      What is the Title of your work?
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="e.g., 'The Future of AI in Healthcare'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                         What was your Critical Role in the creation of this original work
                      </label>
                      <div className="flex space-x- w-full">
                      <input
                        type="text"
                        name="criticalRole"
                        id="criticalRole"
                        placeholder="e.g., 'Lead Author', 'Project Designer'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        In which Areas has your original work had a high impact?
                      </label>
                      <input
                        type="text"
                        name="areaOfImpact"
                        placeholder="e.g., 'Healthcare innovation'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Have you received any Letters of Appreciation for your original work?
                      </label>
                      <input
                        type="text"
                        name="loa"
                        id="loa"
                        placeholder="e.g., 'Received LOA from XYZ Organization for outstanding contribution"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 -mx-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Have you received any Letters of Reccomendation for your original work?
                      </label>
                      <input
                        type="text"
                        name="lor"
                        id="lor"
                        placeholder="e.g., 'LOR from Professor John Smith for research excellence'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 -mx-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Did you hold any Leadership Roles related to your original work?
                      </label>
                      <input
                        type="text"
                        name="leadershipRoles"
                        id="leadershipRoles"
                        placeholder="e.g., 'LOR from Professor John Smith for research excellence'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 -mx-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Have you been involved in Judging or evaluating the work of others?
                      </label>
                      <input
                        type="text"
                        name="judging"
                        id="judging"
                        placeholder="e.g., 'LOR from Professor John Smith for research excellence'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[4rem] w-1/2">
        <div className="sticky top-4">
          <img src={Recognition} className="rounded-xl shadow-md w-[40rem] h-[27rem]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default OrignalWork