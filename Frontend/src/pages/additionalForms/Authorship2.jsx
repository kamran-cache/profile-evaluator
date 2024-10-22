import React from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAuthorships,
  setFormField,
} from "../../redux/AdditionalForms/AuthorshipSlice2";


const Authorship2 = () => {

    const [selectedType, setSelectedType] = useState('Paper');
    const handleSelectChange = (e) => {
        setSelectedType(e.target.value); // Update state based on selected option
      };

      const dispatch = useDispatch();

      const { currentForm, authorships } = useSelector((state) => state.authorships);
    
      // Handle input change for form fields
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFormField({ name, value }));
      };
    
      // Add form content to the Redux store
      const handleAddForm = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (currentForm.title.trim() !== "" || currentForm.patentTitle.trim() !== "") {
          dispatch(addAuthorships()); // Add the current form to experiences
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
    <div className="flex">
      <div className="flex w-[30vw] h-[100vh] justify-center">
        <div className="flex flex-col h-[88vh] mt-[10vh] items-center bg-white px-6 md:pl-[5vw] overflow-y-auto overflow-x-hidden scrollbar-transparent">
          <div className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-gray-700 font-medium">
            Authorship List
          </div>
          {/* Render previous forms as collapsed content */}
          {authorships.length > 0 && (
            <div className="mb-4">
              {authorships.map((formContent, index) => (
                <div
                  key={index}
                  className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                >
                  <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                    Authorship {index + 1}
                  </div>
                  <div className="flex justify-center text-lg text-center mt-2">
                    <p className="text-gray-700 font-medium">
                      {formContent.title
                        ? formContent.title
                        : formContent.patentTitle}
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
              Authorship
            </div>
            {/* Toggle Form Button */}
            <button
              className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Collapse Form" : "Add Authorship"}
            </button>

            {/* Toggle Form */}
            {isOpen && (
              <form className="w-full pr-12" onSubmit={handleAddForm}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Select the type of authorship
                      </label>
                      <select
                        name="type"
                        id="type"
                        onChange={handleSelectChange}
                        className="w-full text-center rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      >
                        <option value="Paper"> Paper </option>
                        <option value="Book">Book</option>
                        <option value="Patent">Patent</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Paper and Book */}
                {(selectedType === "Paper" || selectedType === "Book") && (
                  <>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What is the Title of your Paper/Book?
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={handleInputChange}
                            placeholder="e.g., 'The Future of AI in Healthcare'"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Who is the publisher of your paper or book?
                          </label>
                          <div className="flex space-x- w-full">
                            <input
                              type="text"
                              name="publisher"
                              id="publisher"
                              onChange={handleInputChange}
                              placeholder="e.g., Oxford University Press, Springer"
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
                            Can you provide a link to your paper or book?
                          </label>
                          <input
                            type="text"
                            name="link"
                            onChange={handleInputChange}
                            placeholder="e.g., https://www.example.com/my-paper"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            When was your paper or book published?
                          </label>
                          <input
                            type="text"
                            name="dateOfPublishing"
                            id="dateOfPublishing"
                            onChange={handleInputChange}
                            placeholder="e.g., March 15, 2023"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-3 -mx-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Who are the authors of the paper or book?
                        </label>
                        <input
                          type="text"
                          name="authors"
                          id="authors"
                          onChange={handleInputChange}
                          placeholder="e.g., John Doe, Jane Smith, Michael Lee"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
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
                            Please upload evidence of your authorship
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
                  </>
                )}

                {/* Patent */}
                {selectedType === "Patent" && (
                  <>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What is the Title of your Patent?
                          </label>
                          <input
                            type="text"
                            name="patentTitle"
                            id="patentTitle"
                            onChange={handleInputChange}
                            placeholder="e.g., 'The Future of AI in Healthcare'"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            In which country is your patent registered?
                          </label>
                          <div className="flex space-x- w-full">
                            <input
                              type="text"
                              name="patentRegistry"
                              id="patentRegistry"
                              onChange={handleInputChange}
                              placeholder="e.g., United States, Canada, Germany"
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
                            When was your patent granted or registered?
                          </label>
                          <input
                            type="patentDate"
                            name="patentDate"
                            onChange={handleInputChange}
                            placeholder="e.g., June 1, 2022"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What are the key features of your patent?
                          </label>
                          <input
                            type="text"
                            name="keyFeatures"
                            id="keyFeatures"
                            onChange={handleInputChange}
                            placeholder="e.g., Novel mechanism, Energy-efficient design, "
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-3 -mx-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Can you provide a detailed summary of your patent?
                        </label>
                        <input
                          type="text"
                          name="summary"
                          id="summary"
                          onChange={handleInputChange}
                          placeholder="e.g., Describe the invention, its purpose, and applications in detail."
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            How does your patent impact the industry?
                          </label>
                          <input
                            type="impact"
                            name="impact"
                            onChange={handleInputChange}
                            placeholder="e.g., Revolutionizes manufacturing processes, Reduces costs,"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What are the potential use cases for your patent?
                          </label>
                          <input
                            type="text"
                            name="useCases"
                            id="useCases"
                            onChange={handleInputChange}
                            placeholder="e.g., Applicable in automotive industry, Enhancing medical devices"
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
                            Please upload evidence of your authorship
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
                  </>
                )}
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  type="submit"
                >
                  Add Authorship
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



export default Authorship2