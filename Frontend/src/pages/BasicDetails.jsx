import React from "react";
import Nationality from "../components/Nationality";
import Visa from "../components/VisaDropdown";
import ID from "../assets/IDCard2.jpg";
import { useDispatch } from "react-redux";
import { addInfo } from "../redux/personlInfoSlice";

const BasicDetails = () => {
  const dispatch = useDispatch();

  // Handler to update Redux state
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(addInfo({ target: name, value }));
  };

  return (
    <>
      <div className="flex w-full pt-4">
      <div className="flex justify-center w-1/2 h-full">
          {/* Form component */}
          <div className="flex flex-col justify-between w-full pl-12 bg-white">
            {/* Scrollable form content */}
            <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent"> 
              <form className='w-full pr-12'>
                <div className="flex text-2xl font-semibold mb-4">Basic Details</div>
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
                        onChange={handleChange}
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
                        name="mName"
                        id="mName"
                        placeholder="Middle Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        name="dob"
                        id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Nationality
                      </label>
                      <Nationality onChange={handleChange} />
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
                          name="gender"
                          value="male"
                          id="radioButton1"
                          className="h-5 w-5"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          id="radioButton2"
                          className="h-5 w-5"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          Female
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Other"
                          id="radioButton2"
                          className="h-5 w-5"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          Others
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Marital Status
                      </label>
                      <select
                        name="maritalStatus"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleChange}
                      >
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

                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 ">
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    id="address"
                    placeholder="123 Main Street"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={handleChange}
                  />
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        City and State
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Dallas, TX"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Pincode
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        id="pincode"
                        placeholder="75201"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="-mx-3 flex flex-wrap">
                  <div className="mb-5 w-full px-3">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Do you currently reside in the United States?
                    </label>
                    <div className="flex items-center mt-6 space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="usResident"
                          value="yes"
                          id="radioButton1"
                          className="h-5 w-5"
                          onChange={handleChange}
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
                          name="usResident"
                          value="no"
                          id="radioButton2"
                          className="h-5 w-5"
                          onChange={handleChange}
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

              </form>
            </div>
          </div>
        </div>
        <div className="flex w-1/2">
          <div className="sticky top-4 ml-8">
          <img src={ID} className="rounded-xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicDetails;
