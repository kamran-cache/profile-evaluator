import React from "react";
import { useState, useRef } from "react";
import Recognition from '../../assets/Recognition.webp';
import { useSelector, useDispatch } from "react-redux";
import { addAward, setFormField } from "../../redux/awardsSlice";

const Awards = () => {
  const dispatch = useDispatch();

  const { currentForm, awards } = useSelector((state) => state.awards);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.name.trim() !== "") {
      dispatch(addAward()); // Add the current form to experiences
      setIsOpen(!isOpen);
    }
  };

  // Toggle Experience section visibility
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // const [isToggle, setIsToggle] = useState(false);
  const [isOpenArray, setIsOpenArray] = useState([]);

  const handleToggle = (index) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index]; // Toggle only the clicked section
    setIsOpenArray(updatedIsOpenArray);
  };

  // const handleToggle = () => {
  //   setIsToggle(!isToggle);
  // };

  return (
    <div className="flex w-full pt-4">
      <div className="flex justify-center w-1/2 h-full">
        {/* Form component */}
        <div className="flex flex-col justify-between w-full pl-12 bg-white">
          {/* Scrollable form content */}
          <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent flex flex-col items-center">
            {/* Heading */}
            <div className="flex text-2xl font-semibold mb-4">Showcase Your Awards & Recognitions</div>

            {/* Render previous forms as collapsed content */}
            {awards.length > 0 && (
              <div className="mb-4">
                {awards.map((formContent, index) => (
                  <div
                    key={index}
                    onClick={() => handleToggle(index)}
                    className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md cursor-pointer"
                  >
                    <div className="flex justify-between">
                      <strong>Award {index + 1}:</strong>
                      <svg
                        className={`fill-current text-blue-700 h-8 w-8 transform transition-transform duration-500 ${
                          isOpenArray[index] ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.076,8.392c0.235-0.235,0.615-0.235,0.851,0l3.312,3.313l3.312-3.313c0.235-0.235,0.615-0.235,0.851,0C14.198,8.611,14.198,8.892,13.962,8.885z" />
                      </svg>
                    </div>
                    <div className="flex">
                      <p className="text-gray-500 mr-[1rem]">
                        <strong>Name:</strong> {formContent.name}
                      </p>
                      <p className="text-gray-500">
                        <strong>Date:</strong> {formContent.date}
                      </p>
                    </div>
                    {isOpenArray[index] && (
                      <>
                        <p className="text-gray-500">
                          <strong>Mode:</strong> {formContent.mode}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
            {/* Toggle Form Button */}
            <button
              className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Collapse Form" : "Add Awards"}
            </button>

            {/* Toggle Form */}
            {isOpen && (
              <form className='w-full pr-12' onSubmit={handleAddForm}>
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
                        onChange={handleInputChange}
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
                      defaultValue=""
                      onChange={handleInputChange}
                      >
                        <option value="" disabled>
                          -- select mode --
                        </option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                        <option value="hybrid">Hybrid</option>
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
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  type="submit"
                >
                  Add Award
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[4rem] w-1/2">
        <div className="sticky top-4">
          <img src={Recognition} className="rounded-xl shadow-md w-[40rem] h-[27rem]" />
          </div>
        </div>
      </div>
  );
};

export default Awards