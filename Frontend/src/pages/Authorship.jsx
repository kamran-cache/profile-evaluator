import { useState, useRef } from "react";
import Resume from "../assets/resume.jpg";
import Paper from "../assets/Paper.jpg";
import PaperForm from "../components/PaperForm";
import BookForm from "../components/BookForm";
import PatentForm from "../components/PatentForm";
import { useSelector } from "react-redux";

const Authorship = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Paper");
  const formData = useSelector((state) => state.authorship.authorshipData);

  console.log(formData, 123);
  const handleDropdown = (e) => {
    console.log(e.target);
    setDropdownValue(e.target.value);
    console.log(dropdownValue);
  };
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  // Toggle Experience section visibility
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex w-full pt-4">
        <div className="flex justify-center w-1/2">
          <div className="flex items-center justify-center px-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              {/* Heading */}
              <div className="flex text-2xl font-semibold mb-4">
                Authorship Details
              </div>

              {/* Render previous forms as collapsed content */}
              {formData.length > 0 && (
                <div className="mb-4">
                  {formData.map((formContent, index) =>
                    formContent.section === "Paper" ||
                    formContent.section === "Book" ? (
                      <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md cursor-pointer"
                      >
                        <div className="flex justify-between">
                          <strong>
                            Authorship {index + 1}: {formContent.section}
                          </strong>
                          <svg
                            className={`fill-current text-blue-700 h-8 w-8 transform transition-transform duration-500 ${
                              isOpen === index ? "rotate-180" : ""
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.076,8.392c0.235-0.235,0.615-0.235,0.851,0l3.312,3.313l3.312-3.313c0.235-0.235,0.615-0.235,0.851,0C14.198,8.611,14.198,8.892,13.962,8.885z" />
                          </svg>
                        </div>
                        <div className="flex">
                          <p className="text-gray-500 mr-[1rem]">
                            <strong>Role:</strong> {formContent.title}
                          </p>
                          <p className="text-gray-500">
                            <strong>Authors:</strong> {formContent.authors}
                          </p>
                        </div>
                        {isOpen && (
                          <>
                            <p className="text-gray-500">
                              <strong>Publication:</strong>{" "}
                              {formContent.publication}
                            </p>
                            <p className="text-gray-500">
                              <strong>Publication Date:</strong>{" "}
                              {formContent.publicationDate}
                            </p>
                            <p className="text-gray-500">
                              <strong>Summary:</strong> {formContent.summary}
                            </p>
                          </>
                        )}
                      </div>
                    ) : (
                      <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md cursor-pointer"
                      >
                        <div className="flex justify-between">
                          <strong>
                            Authorship {index + 1}: {formContent.section}
                          </strong>
                          <svg
                            className={`fill-current text-blue-700 h-8 w-8 transform transition-transform duration-500 ${
                              isOpen === index ? "rotate-180" : ""
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.076,8.392c0.235-0.235,0.615-0.235,0.851,0l3.312,3.313l3.312-3.313c0.235-0.235,0.615-0.235,0.851,0C14.198,8.611,14.198,8.892,13.962,8.885z" />
                          </svg>
                        </div>
                        <div className="flex">
                          <p className="text-gray-500 mr-[1rem]">
                            <strong>Role:</strong> {formContent.title}
                          </p>
                          <p className="text-gray-500">
                            <strong>Authors:</strong> {formContent.authors}
                          </p>
                        </div>
                        {isOpen && (
                          <>
                            <p className="text-gray-500">
                              <strong>Date:</strong> {formContent.date}
                            </p>
                            <p className="text-gray-500">
                              <strong>Date Granted:</strong>{" "}
                              {formContent.date_granted}
                            </p>
                            <p className="text-gray-500">
                              <strong>Summary:</strong> {formContent.summary}
                            </p>
                          </>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}

              {/* Toggle Form Button */}
              <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={toggleFormVisibility}
              >
                {isFormVisible ? "Collapse Form" : "Add Authorship"}
              </button>

              {/* Toggle Form */}
              {isFormVisible && (
                <>
                  <div className="w-full ">
                    <div>
                      <strong>Select the type of authorship:</strong>
                    </div>
                    <select
                      name="type"
                      id=""
                      className="w-full my-3  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      onChange={handleDropdown}
                    >
                      <option value="Paper">Paper</option>
                      <option value="Book">Book</option>
                      <option value="Patent">Patent</option>
                    </select>
                  </div>

                  {dropdownValue === "Paper" && <PaperForm />}
                  {dropdownValue === "Book" && <BookForm />}
                  {dropdownValue === "Patent" && <PatentForm />}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center w-1/2 h-[40rem]">
          <img
            src={Paper}
            className="rounded-xl shadow-md"
            alt="Resume Preview"
          />
        </div>
      </div>
    </>
  );
};

export default Authorship;
