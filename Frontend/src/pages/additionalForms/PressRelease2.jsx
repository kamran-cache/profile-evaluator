import React from "react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addPress,
    setFormField,
  } from "../../redux/AdditionalForms/PressReleaseSlice2";

const PressRelease2 = () => {

  const dispatch = useDispatch();

  const { currentForm, press } = useSelector((state) => state.press);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.title.trim() !== "") {
      dispatch(addPress()); // Add the current form to experiences
      setIsOpen(!isOpen);
    }
  };

  // Toggle Experience section visibility
  const [isOpen, setIsOpen] = useState(true);

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

  return (
    <div className="flex p-8 ">
      <div className="flex w-1/3 h-[90vh] justify-center">
        <div className="flex flex-col w-full h-[88vh] items-center bg- px-6 md:pl-[5vw] overflow-y-auto overflow-x-hidden scrollbar-transparent">
          <div className="w-full mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-gray-700 font-medium ">
            Press Release List
          </div>
          {/* Render previous forms as collapsed content */}
          {press.length > 0 && (
              <div className="mb-4">
                {press.map((formContent, index) => (
                  <div
                    key={index}
                    className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                  >
                    <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                      Press Release {index + 1}
                    </div>
                    <div className="flex flex-col justify-center text-lg text-center mt-2">
                      <p className="text-gray-700 font-medium">
                        Title : {formContent.title}
                      </p>
                      <p className="text-gray-700 font-medium">
                        Publisher : {formContent.publisher}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
      <div className="flex w-2/3 h-[88vh]">
        <div className="flex flex-col justify-between w-full pl-12 rounded-xl border shadow-lg bg-white">
          <div className="overflow-y-auto overflow-x-hidden w-full h-[85vh] py-4 scrollbar-transparent flex flex-col items-center mt-[1.5vh]">
            <div className="flex text-2xl font-semibold mb-[1.5vh]">
              Press Release
            </div>
            {/* Toggle Form Button */}
            <button
                className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Collapse Form" : "Add PR"}
              </button>

                {/* Toggle Form */}
              {isOpen && (
                <form className="w-full pr-12" onSubmit={handleAddForm}>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                        What is the title of the press release?
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          onChange={handleInputChange}
                          placeholder="e.g., 'Innovative Startup Disrupts the Healthcare Industry'"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Who published the press release?
                        </label>
                        <div className="flex space-x- w-full">
                          <input
                            type="text"
                            name="publisher"
                            id="publisher"
                            onChange={handleInputChange}
                            placeholder="e.g., Forbes, TechCrunch"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          When was the press release published?
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          placeholder=""
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Can you provide a link to the press release?
                        </label>
                        <div className="flex space-x- w-full">
                          <input
                            type="text"
                            name="link"
                            id="link"
                            onChange={handleInputChange}
                            placeholder="e.g., https://www.example.com/press-release"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Who was the journalist or author of the press release?
                        </label>
                        <input
                          type="text"
                          name="author"
                          onChange={handleInputChange}
                          placeholder="e.g., Jane Doe, Michael Smith"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>

                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Which industry does the press release impact or focus
                          on?
                        </label>
                        <input
                          type="text"
                          name="industry"
                          id="industry"
                          onChange={handleInputChange}
                          placeholder="e.g., Technology, Healthcare"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          What type of article is the press release?
                        </label>
                        <input
                          type="text"
                          name="type"
                          id="type"
                          onChange={handleInputChange}
                          placeholder="e.g., Industry Impact, Feature article, Interview, Opinion piece"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    type="submit"
                  >
                    Add PR
                  </button>
                </form>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default PressRelease2

