import React from "react";
import { useState, useRef } from "react";
import Recognition from '../assets/Recognition.webp';
import { useSelector, useDispatch } from "react-redux";
import { addAward, setFormField } from "../redux/awardsSlice";

const Awards = () => {
  const dispatch = useDispatch();

  const { currentForm, awards } = useSelector((state) => state.education);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.degree.trim() !== "") {
      dispatch(addAward()); // Add the current form to experiences
      setIsOpen(!isOpen);
    }
  };

  // Toggle Experience section visibility
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
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
                <div className="flex text-2xl font-semibold mb-4">
                  Showcase Your Awards & Recognitions
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Name</strong> of the award or
                        recognition you received?
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="e.g., 'Employee of the Year', 'Best Innovation Award'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        Was the award or recognition presented{" "}
                        <strong>Online or Offline</strong>?
                      </label>
                      <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      name='mode'
                      id='mode'
                      >
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
                        <strong>When</strong> did you receive this award or
                        recognition?
                      </label>
                      <input
                        type="date"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        name='date'
                        id='date'
                      />
                    </div>
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
  );
}

export default Awards