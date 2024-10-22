import React from "react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExibition,
  setFormField,
} from "../../redux/AdditionalForms/ExibitionSlice";

const Exibition2 = () => {
  const dispatch = useDispatch();

  const { currentForm, exibition } = useSelector((state) => state.exibition);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.title.trim() !== "") {
      dispatch(addExibition()); // Add the current form to experiences
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
    <div className="flex p-8">
      <div className="flex w-1/3 h-[90vh] justify-center">
        <div className="flex flex-col w-full h-[88vh] items-center bg- px-6 md:pl-[5vw] overflow-y-auto overflow-x-hidden scrollbar-transparent">
          <div className="w-full mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-gray-700 font-medium ">
          Exibitions List
          </div>
          {/* Render previous forms as collapsed content */}
          {exibition.length > 0 && (
            <div className="mb-4">
              {exibition.map((formContent, index) => (
                <div
                  key={index}
                  className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                >
                  <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                    Exibition {index + 1}
                  </div>
                  <div className="flex justify-center text-lg text-center mt-2">
                    <p className="text-gray-700 font-medium">
                      {formContent.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-2/3 h-[90vh]">
        <div className="flex flex-col justify-between w-full pl-12 rounded-xl border shadow-lg bg-white">
          <div className="overflow-y-auto overflow-x-hidden w-full h-[85vh] py-4 scrollbar-transparent flex flex-col items-center mt-[1.5vh]">
            <div className="flex text-2xl font-semibold mb-[1.5vh]">
              Exibitions
            </div>
            {/* Toggle Form Button */}
            <button
              className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Collapse Form" : "Add Exibition"}
            </button>

            {/* Toggle Form */}
            {isOpen && (
              <form className="w-full pr-12" onSubmit={handleAddForm}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        What is the title of the exhibition or conference?
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleInputChange}
                        placeholder="e.g., 'Global Tech Innovation Summit 2024'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Which organization hosted the exhibition or conference?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="organization"
                          id="organization"
                          onChange={handleInputChange}
                          placeholder="e.g., American Medical Association, Tech Innovations Inc."
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
                        Can you provide a link to the exhibition or conference
                        details?
                      </label>
                      <input
                        type="text"
                        name="link"
                        onChange={handleInputChange}
                        placeholder="e.g., https://www.example.com/conference-details"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        What were the criteria for selecting participants or
                        exhibitors?
                      </label>
                      <input
                        type="text"
                        name="criteria"
                        id="criteria"
                        onChange={handleInputChange}
                        placeholder="e.g., Innovation, Relevance to theme, Quality of submission"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Can you describe the activity you participated in during
                        the exhibition or conference?
                      </label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={handleInputChange}
                        placeholder="e.g., Presented a research paper, Led a workshop on emerging technologies"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-1/2 px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Evidence Type
                      </label>
                      <select
                        name="evidenceType"
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      >
                        <option value="">-- select one --</option>
                        <option value="prd">
                          PRD, meeting minutes, JIRA tickets
                        </option>
                        <option value="married">Approval/signoff chains</option>
                        <option value="separated">Architecture Drawings</option>
                        <option value="divorced">Business Retrospective</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-1/2 px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Upload Evidence
                      </label>
                      <input
                        type="file"
                        name="evidence"
                        id="evidence"
                        onChange={handleInputChange}
                        placeholder="e.g., 'Increased revenue by 20%, improved workflow, etc.' "
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  type="submit"
                >
                  Add Exibition
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exibition2;
