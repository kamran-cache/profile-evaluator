import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExperience,
  setFormField,
  addRole,
  removeRole,
  setExperience,
} from "../../redux/experienceSlice";
import { addAward, setAwardsFormField } from "../../redux/awardsSlice";
import {
  addEducation,
  setEducationField,
  setEducation,
} from "../../redux/educationSlice";
import { setJudging, setJudgingField } from "../../redux/judgingSlice";
import axios from "axios";
import { useParams } from "react-router-dom";

const Modal = ({ setModal, category }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const textareaRef = useRef(null);
  // states import from redux slices
  const { currentForm, experiences, isEdited } = useSelector(
    (state) => state.experience
  );
  const currentAwardsForm = useSelector((state) => state.awards.currentForm);
  const currentEducationForm = useSelector(
    (state) => state.education.currentForm
  );
  const { judgingRecords } = useSelector((state) => state.judging);

  // Add fields to the Redux store
  const handleAddForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (category === "criticalRole") {
      if (currentForm.company.trim() !== "") {
        const experiences = { ...currentForm };
        const response = await axios.post(
          `http://localhost:5000/api/v1/add-data/experience/${id}`,
          { data: { experiences } }
        );
        if (response) {
          dispatch(addExperience());
          dispatch(setExperience(response.data.experiences));
          console.log("success");
          setIsOpen(false);
        }
      }
    } else if (category === "education") {
      if (currentEducationForm.degree.trim() !== "") {
        const educations = { ...currentEducationForm };
        const response = await axios.post(
          `http://localhost:5000/api/v1/add-data/education/${id}`,
          { data: { educations } }
        );
        if (response) {
          dispatch(addEducation());
          dispatch(setEducation(response.data.education));
          console.log("success");
          setIsOpen(false);
        }
      }
    } else if (category === "judging") {
      console.log(judgingRecords, "jr");
      if (judgingRecords.length > 0) {
        // const judging = judgingRecords;

        const newData = [];
        for (const judgingRecord of judgingRecords) {
          if (!judgingRecord._id) {
            newData.push(judgingRecord);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...judgingRecords,
            judgingRecords: newData,
          };

          const response = await axios.post(
            `http://localhost:5000/api/v1/add-data/judging/${id}`,
            { data: filteredData }
          );
          if (response) {
            // dispatch(addEducation());
            dispatch(setJudging(response.data.judging));
            console.log("success");
            setIsOpen(false);
          }
        }
      }
    }
  };

  const handleAwardsForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(currentAwardsForm, "awards");
    if (currentAwardsForm.name.trim() !== "") {
      const awards = { ...currentAwardsForm };
      const response = await axios.post(
        `http://localhost:5000/api/v1/add-data/awards/${id}`,
        { data: { awards } }
      );
      if (response) {
        dispatch(addAward());
        dispatch(setExperience(response.data.awards));
        console.log("success");
        setIsOpen(false);
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (category === "awards") {
      dispatch(setAwardsFormField({ name, value }));
    } else if (category === "criticalRole")
      dispatch(setFormField({ name, value }));
    else if (category === "education")
      dispatch(setEducationField({ name, value }));
  };
  // Handle adding a new role
  const handleAddRole = (e) => {
    e.preventDefault();
    dispatch(addRole());
  };
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const count = checked ? 1 : 0; // Set count to 1 if checked, otherwise 0
    dispatch(setJudgingField({ category: value, count }));
  };

  const handleCountChange = (e, category) => {
    const count = e.target.value; // Update count value
    dispatch(setJudgingField({ category, count }));
  };

  return (
    <>
      <div className="fixed inset-0 z-20">
        {/* Backdrop */}
        <div
          className="absolute text-white flex ites justify-normal inset-0 bg-black opacity-70 z-30  cursor-pointer"
          onClick={() => {
            setModal(false);
          }} // Close modal on clicking backdrop
        ></div>

        {/* Modal Content */}
        <div className="fixed inset-0 top-[10%] left-[15%] h-[80%] w-[70%] flex items-center justify-center z-50 ">
          <div className="h-[100%] w-[100%] bg-neutral-50 p-4 flex flex-col rounded-lg relative overflow-y-auto">
            <div className="header flex justify-between items-center">
              <div className="title  font-semibold text-lg">Hello</div>
              <div
                className="close cursor-pointer  text-lg"
                onClick={() => {
                  setModal(false);
                }}
              >
                X
              </div>
            </div>
            <div className="content mt-4  h-full ">
              {category === "criticalRole" && (
                <>
                  <div className="form">
                    <form className="w-full pr-12" onSubmit={handleAddForm}>
                      <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              Company
                            </label>
                            <input
                              type="text"
                              name="company"
                              placeholder="Company Name"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              value={currentForm.company}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              Location
                            </label>
                            <input
                              type="text"
                              name="location"
                              placeholder="Location"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              value={currentForm.location}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Roles Section */}
                      {currentForm.roles.map((role, index) => (
                        <div
                          key={index}
                          className="border-2 border-gray-400/40 rounded-lg p-4 mb-4"
                        >
                          <div className="w-full px-3">
                            <div className="mb-5">
                              <label className="mb-3 block text-base font-medium text-[#07074D]">
                                Role
                              </label>
                              <input
                                type="text"
                                name={`roles[${index}].jobTitle`}
                                placeholder="Role Title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={role.jobTitle}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3">
                              <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                  Duration
                                </label>
                                <div className="flex space-x- w-full">
                                  <input
                                    type="text"
                                    name={`roles[${index}].startDate`}
                                    placeholder="Start Date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    value={role.startDate}
                                    onChange={handleInputChange}
                                  />
                                  <span className="p-2 mt-1 font-semibold">
                                    {" "}
                                    -{" "}
                                  </span>
                                  <input
                                    type="text"
                                    name={`roles[${index}].endDate`}
                                    placeholder="End Date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    value={role.endDate}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => handleRemoveRole(index)}
                            type="button"
                          >
                            Remove Role
                          </button>
                          <button
                            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={handleAddRole}
                            type="button"
                          >
                            Add More Role
                          </button>
                        </div>
                      ))}

                      <button
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                        type="submit"
                      >
                        Add Experience
                      </button>
                    </form>
                  </div>
                </>
              )}

              {/* ---------------Awards----------------- */}
              {category === "awards" && (
                <>
                  <form className="w-full pr-12" onSubmit={handleAwardsForm}>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font- text-[#07074D]">
                            What is the <strong>Name</strong> of the award or
                            recognition you received?
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="e.g., 'Employee of the Year', 'Best Innovation Award'"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font- text-[#07074D]">
                            Was the award or recognition presented{" "}
                            <strong>Online or Offline</strong>?
                          </label>
                          <select
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            name="mode"
                            id="mode"
                            defaultValue=""
                            onChange={handleInputChange}
                          >
                            <option value="" disabled>
                              -- select mode --
                            </option>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                            <option value="hybrid">Hybrid</option>
                          </select>
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font- text-[#07074D]">
                            <strong>When</strong> did you receive this award or
                            recognition?
                          </label>
                          <input
                            type="date"
                            placeholder=""
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            name="date"
                            id="date"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      type="submit"
                    >
                      Add Award
                    </button>
                  </form>
                </>
              )}

              {/* -------------------Education---------------- */}
              {category === "education" && (
                <>
                  <form className="w-full pr-12" onSubmit={handleAddForm}>
                    <div className="flex text-2xl font-semibold mb-4">
                      Education
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font- text-[#07074D]">
                            What is your{" "}
                            <strong>Degree / Qualification and major?</strong>
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
                            <strong>Where</strong> did you earn your
                            degree/qualification?
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
                </>
              )}

              {/* ---------------------Judging------------------------ */}
              {category === "judging" && (
                <>
                  <form className="w-full pr-12" onSubmit={handleAddForm}>
                    <div className="flex text-2xl font-semibold mb-4">
                      Judging
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <div className="container flex justify-between">
                            <label className="mb-3 block text-base text-[#07074D]">
                              Where did you judge?
                            </label>
                            <label className="mb-3 block text-base text-[#07074D]">
                              How many time did you judge?
                            </label>
                          </div>

                          <div className="bg-white border w-full rounded mt-1 shadow-lg ">
                            {[
                              "awards",
                              "journals",
                              "hackathons",
                              "conferences",
                              "workshops",
                              "external product review",
                              "promotion committee",
                              "workplace peer reviewing",
                              "interview",
                              "business committee",
                              "dissertation committee",
                              "author peer review",
                            ].map((category) => (
                              <div
                                key={category}
                                className="flex items-center justify-between mt-2"
                              >
                                <label className="block flex items-center">
                                  <input
                                    type="checkbox"
                                    name={category}
                                    value={category}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                  />
                                  Judged at {category}
                                </label>
                                <input
                                  type="number"
                                  placeholder="Count"
                                  min="0"
                                  onChange={(e) =>
                                    handleCountChange(e, category)
                                  }
                                  className="border rounded p-1 w-32 text-center"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                      type="submit"
                    >
                      Save Judging Info
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
