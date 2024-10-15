import React from 'react'
import { useState, useRef } from "react";
import Recognition from '../../assets/Recognition.webp';

const FinalMerits = () => {
    const [merits, setMerits] = useState(false);
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
                Public Recognition and Merits
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="mb-5 w-full px-3">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Have you received public recognition or other merits for your sustained contributions to your field?
                    </label>
                    <div className="flex items-center mt-2 space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="merit"
                          value="yes"
                          id="radioButton1"
                          className="h-5 w-5"
                          onChange={() => {
                            setMerits(true);
                          }}
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="merit"
                          value="no"
                          id="radioButton2"
                          className="h-5 w-5"
                          onChange={() => {
                            setMerits(false);
                          }}
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {merits && (
                    <>
                        <div className="-mx-3 flex flex-wrap">
                  <div className="mb-5 w-full px-3">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Have you been recognized as a public figure for your contributions to your field?
                    </label>
                    <div className="flex items-center mt-2 space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="publicFigure"
                          value="yes"
                          id="radioButton1"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="publicFigure"
                          value="no"
                          id="radioButton2"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="-mx-3 flex flex-wrap">
                  <div className="mb-5 w-full px-3">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Have your contributions been recognized as benefiting the US national interest?
                    </label>
                    <div className="flex items-center mt-2 space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="nationalInterest"
                          value="yes"
                          id="radioButton1"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="nationalInterest"
                          value="no"
                          id="radioButton2"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="-mx-3 flex flex-wrap">
                  <div className="mb-5 w-full px-3">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Have you contributed through any of the following activities?
                    </label>
                    <div className="flex items-center mt-2 space-x-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          value="Mentorship"
                          className="h-5 w-5"
                        />
                        <label
                          className="pl-2 text-base font-medium text-[#07074D]"
                        >
                          Mentorship
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          value="Volunteering"
                          className="h-5 w-5"
                        />
                        <label
                          className="pl-2 text-base font-medium text-[#07074D]"
                        >
                          Volunteering
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          value="socialActivities"
                          className="h-5 w-5"
                        />
                        <label
                          className="pl-2 text-base font-medium text-[#07074D]"
                        >
                          Social Activities
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                    </>
                )}
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

export default FinalMerits