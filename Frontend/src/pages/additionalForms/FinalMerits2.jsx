import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addMerits,
  setFormField,
} from "../../redux/AdditionalForms/FinalMeritsSlice2";

const FinalMerits2 = () => {
  const [selectedType, setSelectedType] = useState("");
  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
    const { name, value } = e.target;
    dispatch(setFormField({ name, value })); 
  };

  const dispatch = useDispatch();

  const { currentForm, merits } = useSelector((state) => state.merits);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (
      currentForm.name.trim() !== "" ||
      currentForm.organization.trim() !== ""
    ) {
      dispatch(addMerits()); // Add the current form to experiences
      setIsOpen(!isOpen);
    }
    setSelectedType("");
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
            Merits List
          </div>
          {/* Render previous forms as collapsed content */}
          {merits.length > 0 && (
            <div className="mb-4">
              {merits.map((formContent, index) => (
                <div
                  key={index}
                  className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                >
                  <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                    {/* Merits {index + 1} */}
                    {formContent.type}
                  </div>
                  <div className="flex justify-center text-lg text-center mt-2">
                    <p className="text-gray-700 font-medium">
                      {formContent.name
                        ? formContent.name
                        : formContent.organization}
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
              Final Merits
            </div>
            {/* Toggle Form Button */}
            <button
              className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Collapse Form" : "Add Merits"}
            </button>
            {/* Toggle Form */}
            {isOpen && (
              <form className="w-full pr-12" onSubmit={handleAddForm}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Select the type of merits
                      </label>
                      <select
                        name="type"
                        id="type"
                        onChange={handleSelectChange}
                        className="w-full text-center rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      >
                        <option value="">-- select one --</option>
                        <option value="LOR">Letter of Recommendation</option>
                        <option value="Mentor">Mentor</option>
                        <option value="Volunteer">
                          Volunteer / Social Activity
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* LOR */}
                {selectedType === "LOR" && (
                  <>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What is the name of the recommender who wrote your
                            LOR?
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                            placeholder="e.g., Dr. John Smith, Prof. Emily Brown"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Can you provide the LinkedIn profile link of your
                            recommender?
                          </label>
                          <div className="flex space-x- w-full">
                            <input
                              type="text"
                              name="linkedIn"
                              id="linkedIn"
                              onChange={handleInputChange}
                              placeholder="e.g., https://www.linkedin.com/in/johnsmith"
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
                            What is the current designation of your recommender?
                          </label>
                          <input
                            type="text"
                            name="designation"
                            onChange={handleInputChange}
                            placeholder="e.g., Senior Researcher, Professor of Computer Science, Head of Marketing"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What was the main topic or focus of the LOR?
                          </label>
                          <input
                            type="text"
                            name="topic"
                            id="topic"
                            onChange={handleInputChange}
                            placeholder="e.g., Academic achievements, Research contributions, Leadership skills"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What is your professional relationship with the
                            recommender?
                          </label>
                          <input
                            type="text"
                            name="relationship"
                            id="relationship"
                            onChange={handleInputChange}
                            placeholder="e.g., Former professor, Research supervisor, Work colleague"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            "Which industry does the recommender's letter
                            highlight as being impacted by your work or
                            contributions?
                          </label>
                          <input
                            type="text"
                            name="industry"
                            id="industry"
                            onChange={handleInputChange}
                            placeholder="e.g., Healthcare, Software development, Renewable energy"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedType === "Mentor" && (
                  <>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Which organization facilitated or sponsored the
                            mentorship?
                          </label>
                          <input
                            type="text"
                            name="organization"
                            id="organization"
                            onChange={handleInputChange}
                            placeholder="e.g., Google Developers, Women in Tech"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Can you provide a link related to the mentorship
                            program or event?
                          </label>
                          <div className="flex space-x- w-full">
                            <input
                              type="text"
                              name="link"
                              id="link"
                              onChange={handleInputChange}
                              placeholder="e.g., https://www.example.com/mentorship-details"
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
                            What was your position or role in the mentorship
                            event?
                          </label>
                          <input
                            type="text"
                            name="position"
                            onChange={handleInputChange}
                            placeholder="e.g., Mentor, Mentee, Co-facilitator"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What impact did the mentorship event have on you or
                            others involved?
                          </label>
                          <input
                            type="text"
                            name="impact"
                            id="impact"
                            onChange={handleInputChange}
                            placeholder="e.g., Improved skills, Increased confidence, Expanded professional network"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Can you provide a brief description of the
                            mentorship event?
                          </label>
                          <input
                            type="text"
                            name="relationship"
                            id="relationship"
                            onChange={handleInputChange}
                            placeholder="e.g., 'A one-on-one mentorship session focused on career growth and skill development.'"
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
                            <option value="loa">Letter of Appreciation</option>
                            <option value="Emails">Emails</option>
                            <option value="Certificates">Certificates</option>
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
                  </>
                )}
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  type="submit"
                >
                  Add Merits
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalMerits2;
