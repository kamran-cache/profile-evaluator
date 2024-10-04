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
        <div className="flex justify-center w-1/2">
          <div className="flex items-center justify-center px-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form>
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
                          className="pl-3 text-base font-medium text-[#07074D]"
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
                          className="pl-3 text-base font-medium text-[#07074D]"
                        >
                          Female
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
                    htmlFor="address"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Residential Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="House No, Street, City, State, ZIP Code"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex w-1/2">
          <img src={ID} className="rounded-xl" />
        </div>
      </div>
    </>
  );
};

export default BasicDetails;
