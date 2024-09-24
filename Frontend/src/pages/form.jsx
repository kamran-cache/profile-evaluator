import React from 'react'
import Nationality from '../components/Nationality';
import Visa from '../components/Visa';

const FormPage = () => {
  return (
    <>
      <div className="flex w-full pt-8">
        <div className="flex justify-center w-1/2">
          {/* Form component */}
          <div className="flex items-center justify-center px-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="First Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Middle Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                      <label
                        htmlFor="lName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lName"
                        id="lName"
                        placeholder="Last Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="date"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Nationality
                      </label>
                      <Nationality />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="mb-5 w-full px-3 sm:w-1/2">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Gender
                    </label>
                    <div className="flex items-center mt-6 space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton1"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-3 text-base font-medium text-[#07074D]"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton2"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-3 text-base font-medium text-[#07074D]"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="lName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                        type="Email Address"
                        name="lName"
                        id="lName"
                        placeholder="example@gmail.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="guest"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Residential Address
                  </label>
                  <input
                    type="text"
                    name="guest"
                    id="guest"
                    placeholder="House No, Street, City, State, ZIP Code"
                    min={0}
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Current Visa Status
                    </label>
                    <Visa />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Marital Status
                    </label>
                    <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                      <option value="">-- select one --</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="separated">Separated</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                </div>
                </div>

                {/* <div className='flex w-full justify-between'>
                <button className="flex-start hover:shadow-form rounded-md py-3 px-8 text-center text-base font-semibold text-black  outline outline-1 ">
                    Prev
                  </button>
                  <button className="flex-end hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Next
                  </button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 ">world</div>
      </div>
    </>
  );
}

export default FormPage