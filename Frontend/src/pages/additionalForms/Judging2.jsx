import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addJudging,
  setFormField,
} from "../../redux/AdditionalForms/JudgingSlice2";

const Judging = () => {
  const dispatch = useDispatch();

  const { currentForm, judging } = useSelector((state) => state.judging);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.organizationName.trim() !== "") {
      dispatch(addJudging()); // Add the current form to experiences
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
    <>
      <div className="flex">
        <div className="flex w-[30vw] h-[100vh] justify-center">
          <div className="flex flex-col h-[88vh] mt-[10vh] items-center bg-white px-6 md:pl-[5vw] overflow-y-auto overflow-x-hidden scrollbar-transparent">
            <div className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-gray-700 font-medium">
            Judging List
            </div>
            {/* Render previous forms as collapsed content */}
            {judging.length > 0 && (
              <div className="mb-4">
                {judging.map((formContent, index) => (
                  <div
                    key={index}
                    className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                  >
                    <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                      Judging {index + 1}
                    </div>
                    <div className="flex justify-center text-lg text-center mt-2">
                      <p className="text-gray-700 font-medium">
                        {formContent.organizationName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex w-[65vw] h-[88vh] mt-[8vh]">
          <div className="flex flex-col justify-between w-full pl-12 rounded-xl shadow-[0_8px_10px_-1px_rgba(0,0,0,0.1),0_-6px_10px_-1px_rgba(0,0,0,0.1)] bg-slate-100">
            {/* Scrollable form content */}
            <div className="overflow-y-auto overflow-x-hidden w-full h-[85vh] py-4 scrollbar-transparent flex flex-col items-center mt-[1.5vh]">
              {/* Heading */}
              <div className="flex text-2xl font-semibold mb-[1.5vh]">
                Judging
              </div>
              {/* Toggle Form Button */}
              <button
                className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Collapse Form" : "Add Projects"}
              </button>

              {/* Toggle Form */}
              {isOpen && (
                <form className="w-full pr-12" onSubmit={handleAddForm}>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Which organization did you judge or review for?
                        </label>
                        <input
                          type="text"
                          name="organizationName"
                          id="organizationName"
                          onChange={handleInputChange}
                          placeholder="e.g., IEEE, National Science Foundation"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          When did your judging or review start and end?
                        </label>
                        <div className="flex space-x- w-full">
                          <input
                            type="text"
                            name="startDate"
                            placeholder="Start Date"
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                          />
                          <span className="p-2 mt-1 font-semibold"> - </span>
                          <input
                            type="text"
                            name="endDate"
                            placeholder="End Date"
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Can you provide a link to the organization you judged
                          or reviewed for?
                        </label>
                        <input
                          type="text"
                          name="link"
                          onChange={handleInputChange}
                          placeholder="e.g., https://www.example-organization.com"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>

                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          What were the criteria for selecting the entries you
                          judged or reviewed?
                        </label>
                        <input
                          type="text"
                          name="criteria"
                          id="criteria"
                          onChange={handleInputChange}
                          placeholder="e.g., Innovation, Technical accuracy, Social impact, Creativity"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-1/2 px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Select the type of evidence you are providing
                        </label>
                        <select
                          name="evidenceType"
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        >
                          <option value="">-- select one --</option>
                          <option value="prd">
                            PRD, meeting minutes, JIRA tickets
                          </option>
                          <option value="approvals">
                            Approval/signoff chains
                          </option>
                          <option value="drawings">
                            Architecture Drawings
                          </option>
                          <option value="businessRetrospective">
                            Business Retrospective
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="w-1/2 px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Please upload evidence of your Judging
                        </label>
                        <input
                          type="file"
                          name="evidence"
                          id="evidence"
                          onChange={handleInputChange}
                          placeholder="e.g., 'Increased revenue by 20%, improved workflow, etc.' "
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    type="submit"
                  >
                    Add Project
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Judging;
