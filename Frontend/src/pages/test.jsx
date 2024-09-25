import { useState, useRef } from "react";
import Resume from '../assets/resume.jpg';

const DynamicForm = () => {
  const textareaRef = useRef(null); // Reference to the textarea
  const [forms, setForms] = useState([]); // To store form data as sections
  const [currentForm, setCurrentForm] = useState({
    role: "",
    startDate: "",
    endDate: "",
    company: "",
    location: "",
    summary: "",
  }); // Current form input values
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle form visibility

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Add form content to the list and collapse the form
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.role.trim() !== "") {
      setForms([...forms, currentForm]); // Add the current form content to forms list
      setCurrentForm({
        role: "",
        startDate: "",
        endDate: "",
        company: "",
        location: "",
        summary: "",
      }); // Reset the form input
      setIsFormVisible(false); // Collapse the form after adding content
    }
  };

  // Toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  return (
    <div className="flex w-full pt-4">
      <div className="flex justify-center w-1/2">
        <div className="flex items-center justify-center px-12">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            {/* Heading */}
            <div className="flex text-2xl font-semibold mb-4">
                  Experience
                </div>
            
            {/* Render previous forms as collapsed content */}
            {forms.length > 0 && (
              <div className="mb-4">
                {forms.map((formContent, index) => (
                  <div
                    key={index}
                    className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <strong>Experience {index + 1}:</strong>
                    <p className="text-gray-500"><strong>Role:</strong> {formContent.role}</p>
                    <p className="text-gray-500">
                      <strong>Duration:</strong> {formContent.startDate} -{" "}
                      {formContent.endDate}
                    </p>
                    <p className="text-gray-500"><strong>Company:</strong> {formContent.company}</p>
                    <p className="text-gray-500"><strong>Location:</strong> {formContent.location}</p>
                    <p className="text-gray-500"><strong>Summary:</strong> {formContent.summary}</p>
                  </div>
                ))}
              </div>
            )}
            {/* Toggle Form Button */}
            <button
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={toggleFormVisibility}
            >
              {isFormVisible ? "Collapse Form" : "Add Experience"}
            </button>

            {/* Toggle Form */}
            {isFormVisible && (
              <form onSubmit={handleAddForm}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What was your <strong>Role</strong> at the company?
                      </label>
                      <input
                        type="text"
                        name="role"
                        placeholder="Software Developer"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        value={currentForm.role}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>How long</strong> were you with the company?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="startDate"
                          placeholder="Start Date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                          value={currentForm.startDate}
                          onChange={handleInputChange}
                        />
                        <span className="p-2 mt-1 font-semibold"> - </span>
                        <input
                          type="text"
                          name="endDate"
                          placeholder="End Date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                          value={currentForm.endDate}
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
                        For which <strong>Company</strong> did you work?
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Google"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        value={currentForm.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>Where</strong> was the company located?
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="New York, NY"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        value={currentForm.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        Provide a <strong>Summary</strong> of your role at the company
                      </label>
                      <textarea
                        name="summary"
                        placeholder="• Increased website traffic by 25% through SEO strategies
• Collaborated with cross-functional teams to ensure product success"
                        rows="5"
                        className="w-full h-[11rem] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ref={textareaRef}
                        value={currentForm.summary}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                  type="submit"
                >
                  Add Experience
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center w-1/2 h-[40rem]">
        <img src={Resume} className="rounded-xl shadow-md" />
        </div>
    </div>
  );
};

export default DynamicForm;
