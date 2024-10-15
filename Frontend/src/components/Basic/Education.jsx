import React from "react";
import { useState, useRef } from "react";
import Resume from "../../assets/resume.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addEducation, setFormField } from "../../redux/educationSlice";


const Education = () => {
  const textareaRef = useRef(null); // Reference to the textarea
  const dispatch = useDispatch();

  // Access the current form and experiences from the Redux state
  const { currentForm, educations } = useSelector((state) => state.education);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.degree.trim() !== "") {
      dispatch(addEducation()); // Add the current form to experiences
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

  // Function to handle input and resize
  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new height based on scroll height
    setContent(e.target.value); // Update the state with new content
  };

  return (
    <div className="flex w-full pt-4">
      <div className="flex justify-center w-1/2 h-full">
        {/* Form component */}
        <div className="flex flex-col justify-between w-full pl-12 bg-white">
          {/* Scrollable form content */}
          <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent flex flex-col items-center">
            {/* Heading */}
            <div className="flex text-2xl font-semibold mb-4">Education</div>

            {/* Render previous forms as collapsed content */}
            {educations.length > 0 && (
              <div className="mb-4">
                {educations.map((formContent, index) => (
                  <div
                    key={index}
                    onClick={handleToggle}
                    className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md cursor-pointer"
                  >
                    <div className="flex justify-between">
                      <strong>Education {index + 1}:</strong>
                      <svg
                        className={`fill-current text-blue-700 h-8 w-8 transform transition-transform duration-500 ${
                          isToggle ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.076,8.392c0.235-0.235,0.615-0.235,0.851,0l3.312,3.313l3.312-3.313c0.235-0.235,0.615-0.235,0.851,0C14.198,8.611,14.198,8.892,13.962,8.885z" />
                      </svg>
                    </div>
                    <div className="flex">
                      <p className="text-gray-500 mr-[1rem]">
                        <strong>Degree:</strong> {formContent.degree}
                      </p>
                      <p className="text-gray-500">
                        <strong>University:</strong> {formContent.university}
                      </p>
                    </div>
                    {isToggle && (
                      <>
                        <p className="text-gray-500">
                          <strong>Date:</strong> {formContent.completionDate}
                        </p>
                        <p className="text-gray-500">
                          <strong>Location:</strong> {formContent.location}
                        </p>
                        <p className="text-gray-500">
                          <strong>Information:</strong> {formContent.information}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
            {/* Toggle Form Button */}
            <button
              className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Collapse Form" : "Add Education"}
            </button>

            {/* Toggle Form */}
            {isOpen && (
              <form className='w-full pr-12' onSubmit={handleAddForm}>
                <div className="flex text-2xl font-semibold mb-4">
                  Education
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                      What is your <strong>Degree / Qualification and major?</strong> 
                      </label>
                      <input
                        type="text"
                        name="degree"
                        id="degree"
                        placeholder="Bachelor of Technology in Computer Science"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>Where</strong> did you earn your degree/qualification?
                      </label>
                      <div className="flex space-x- w-full">
                      <input
                        type="text"
                        name="university"
                        id="university"
                        placeholder="University of California"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInputChange}
                      />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>When</strong> did you earn your degree
                      </label>
                      <input
                        name="completionDate"
                        type="date"
                        placeholder="Date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>Where</strong> is the institute located?
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Los Angeles, CA"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>Additional</strong> information
                      </label>
                      <textarea
                        name="information"
                        placeholder="• Awarded full scholarship for 4 years due to good grades"
                        rows="3"
                        className="w-full h-[7rem] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ref={textareaRef}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                  type="submit"
                >
                  Add Education
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-1/2 h-[38rem]">
        <img src={Resume} className="rounded-xl shadow-md" />
        </div>
      </div>
  );
};

export default Education;
