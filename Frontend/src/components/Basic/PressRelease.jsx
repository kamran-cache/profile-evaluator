import React, { useState, useRef } from "react";
import Resume from "../../assets/resume.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addPressRelease, setFormField } from "../../redux/pressReleaseSlice";

const PressRelease = () => {
  const textareaRef = useRef(null); // Reference to the textarea
  const dispatch = useDispatch();

  // Access the current form and press releases from the Redux state
  const { currentForm, pressReleases } = useSelector(
    (state) => state.pressRelease
  );

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.title.trim() !== "") {
      dispatch(addPressRelease()); // Add the current form to press releases
      setIsOpen(!isOpen);
    }
  };

  // Toggle Form visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full pt-4">
      <div className="flex justify-center w-1/2 h-full">
        {/* Form component */}
        <div className="flex flex-col justify-between w-full pl-12 bg-white">
          {/* Scrollable form content */}
          <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent flex flex-col items-center">
            {/* Heading */}
            {!isOpen ? (
              <div className="block text-xl font-semibold mb-4  flex-row">
                Has your work been featured in any{" "}
                <strong> press articles </strong>or
                <strong> media outlets?</strong>
              </div>
            ) : (
              ""
            )}

            {/* Render previous forms */}
            {pressReleases.length > 0 && (
              <div className="mb-4">
                {pressReleases.map((formContent, index) => (
                  <div
                    key={index}
                    className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium"
                  >
                    <strong>Press Release {index + 1}:</strong>
                    <p className="text-gray-500">
                      <strong>Title:</strong> {formContent.title}
                    </p>
                    <p className="text-gray-500">
                      <strong>Publication:</strong> {formContent.publication}
                    </p>
                    <p className="text-gray-500">
                      <strong>Type:</strong> {formContent.articleType}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {/* Toggle Form Button */}
            <button
              className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Collapse Form" : "Add Press Info"}
            </button>

            {/* Toggle Form */}
            {isOpen && (
              <form className="w-full pr-12" onSubmit={handleAddForm}>
                <div className="flex text-2xl font-semibold mb-4">
                  Press Release
                </div>
                <div className="flex flex-row items-center">
                  <h3>Article Type:</h3>
                  <label>
                    <input
                      type="radio"
                      value="Online"
                      checked={currentForm.articleType === "Online"}
                      onChange={handleInputChange}
                      name="articleType"
                      className="mt-2 ml-2"
                    />
                    Online
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Print"
                      checked={currentForm.articleType === "Print"}
                      onChange={handleInputChange}
                      name="articleType"
                      className="mt-2 ml-2"
                    />
                    Print
                  </label>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-[#07074D]">
                        What is the <strong>Title or Headline</strong> of the
                        media mention?
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="e.g., 'Innovative Research by John Doe Featured in ABC News'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInputChange}
                        value={currentForm.title}
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-[#07074D]">
                        What is the <strong>Name</strong> of the publication or
                        channel where you were mentioned?
                      </label>
                      <input
                        type="text"
                        name="publication"
                        placeholder="e.g., 'The New York Times'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInputChange}
                        value={currentForm.publication}
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                  type="submit"
                >
                  Add Press Info
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

export default PressRelease;
