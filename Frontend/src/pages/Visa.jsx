import { useState, useRef } from "react";
import Resume from "../assets/resume.jpg";
import OpenPass from "../assets/open-passport1.jpg";
import VisaImg from "../assets/Visa-Image.jpg";
import Visa from "../components/VisaDropdown";

const VisaForm = () => {
  const textareaRef = useRef(null); // Reference to the textarea
  const [forms, setForms] = useState([]); // To store form data as sections
  const [currentForm, setCurrentForm] = useState({
    VISA: "",
    startDate: "",
    endDate: "",
    course: "",
    Institution: "",
    Company: "",
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
    if (currentForm.VISA.trim() !== "") {
      setForms([...forms, currentForm]); // Add the current form content to forms list
      setCurrentForm({
        VISA: "",
        startDate: "",
        endDate: "",
        course: "",
        Institution: "",
        Company: "",
      }); // Reset the form input
      setIsFormVisible(false); // Collapse the form after adding content
    }
  };

  // Toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  // Toggle Experience section visibility
  const [isOpenArray, setIsOpenArray] = useState([]);

  const handleClick = (index) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index]; // Toggle only the clicked section
    setIsOpenArray(updatedIsOpenArray);
  };

  return (
    <div className="flex w-full pt-4">
      <div className="flex justify-center w-1/2">
        <div className="flex items-center justify-center px-12">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            {/* Heading */}
            <div className="flex text-2xl font-semibold mb-4">VISA</div>

            {/* Render previous forms as collapsed content */}
            {forms.length > 0 && (
              <div className="mb-4">
                {forms.map((formContent, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md cursor-pointer"
                  >
                    <div className="flex justify-between">
                      <strong>Experience {index + 1}:</strong>
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
                        <strong>VISA:</strong> {formContent.VISA}
                      </p>
                      {formContent.course && (
                        <p className="text-gray-500">
                          <strong>Course:</strong> {formContent.course}
                        </p>
                      )}
                      {formContent.Company && (
                        <p className="text-gray-500">
                          <strong>Company:</strong> {formContent.Company}
                        </p>
                      )}
                    </div>
                    {isOpenArray[index] && (
                      <>
                        <p className="text-gray-500">
                          <strong>Duration:</strong> {formContent.startDate} -{" "}
                          {formContent.endDate}
                        </p>
                        {formContent.course && (
                          <p className="text-gray-500">
                            <strong>Institution:</strong>{" "}
                            {formContent.Institution}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
            {/* Toggle Form Button */}
            <button
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={toggleFormVisibility}
            >
              {isFormVisible ? "Collapse Form" : "Add VISA"}
            </button>

            {/* Toggle Form */}
            {isFormVisible && (
              <form onSubmit={handleAddForm}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        Select your <strong>VISA</strong> type
                      </label>
                      <Visa
                        name="VISA"
                        value={currentForm.VISA}
                        onChange={handleInputChange}
                      />
                      {/* <input
                        type="text"
                        name="role"
                        placeholder="Software Developer"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        value={currentForm.role}
                        onChange={handleInputChange}
                      /> */}
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>Duration</strong> of Visa
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
                {currentForm.VISA === "F-1" && (
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font- text-[#07074D]">
                          <strong>Degree or Qualification</strong> for Which the
                          Visa Was Issued
                        </label>
                        <input
                          type="text"
                          name="course"
                          placeholder="Specify the degree or qualification for which the visa was granted"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          value={currentForm.course}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font- text-[#07074D]">
                          <strong>Institution</strong> Where
                          Degree/Qualification Was Earned
                        </label>
                        <input
                          type="text"
                          name="Institution"
                          placeholder="University of California"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          value={currentForm.Institution}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentForm.VISA === "H-1B" && (
                  <div className="w-full -mx-3 px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        Name of the <strong>Company</strong> That Issued the
                        Work Visa
                      </label>
                      <input
                        type="text"
                        name="Company"
                        placeholder="Google"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        value={currentForm.Company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                {/* <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        Provide a <strong>Summary</strong> of your role at the
                        company
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
                </div> */}
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                  type="submit"
                >
                  Add VISA
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center w-1/2 h-[35rem]">
        <img src={OpenPass} className="rounded-[220px] shadow-m" />
        <img
          src={VisaImg}
          className="absolute z-10 h-[13rem] w-[19rem] mt-[3rem] rounded-x shadow-m"
        />
      </div>
    </div>
  );
};

export default VisaForm;
