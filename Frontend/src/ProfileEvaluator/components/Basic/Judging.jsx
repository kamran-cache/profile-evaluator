import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormField } from "../../redux/judgingSlice";
import Resume from "../../assets/resume.jpg";
import NavigationBtn from "../NavigationBtn";
import { useParams } from "react-router-dom";

const JudgingForm = () => {
  const dispatch = useDispatch();
  const [isFormVisible, setisFormvisible] = useState(true);
  const { judgingRecords } = useSelector((state) => state.judging);
  const judging = useSelector((state) => state.judging);
  const [isJudging, setIsJudging] = useState(true); // Track radio button state
  const { id } = useParams();
  console.log(judgingRecords, "judgin data");

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const count = checked ? 1 : 0; // Set count to 1 if checked, otherwise 0
    dispatch(setFormField({ category: value, count }));
  };

  const handleCountChange = (e, category) => {
    const count = e.target.value; // Update count value
    dispatch(setFormField({ category, count }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisFormvisible(false);
    // No need to call any add action since it's already being stored in the array
  };
  const toggleForm = () => {
    setIsJudging(true);
    setisFormvisible(true);
  };
  return (
    <>
      <div className="flex w-full pt-4">
        <div className="flex justify-center w-1/2 h-full">
          {/* Form component */}
          <div className="flex flex-col justify-between w-full pl-12 bg-white">
            <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent flex flex-col items-center">
              {/* Heading */}
              <div className="font-bold text-3xl mb-2">Judging Details</div>
              {isJudging && (
                <div>
                  <div className="block text-xl font-semibold mb-4">
                    Have you been invited to judge or review others' work?
                  </div>

                  {/* Radio buttons */}
                  <div className="mb-4">
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="judgingOption"
                        value="yes"
                        onChange={() => setIsJudging(true)}
                        checked={isJudging === true}
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="judgingOption"
                        value="no"
                        onChange={() => setIsJudging(false)}
                        checked={isJudging === false}
                      />
                      No
                    </label>
                  </div>
                </div>
              )}

              {/* Display categories and counts */}
              {judgingRecords.length > 0 && (
                <div className="mb-4">
                  {judgingRecords.map((record, index) => (
                    <div
                      key={index}
                      className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium"
                    >
                      <p className="text-gray-500">
                        Judged at <strong>{record.category}</strong>:{" "}
                        {record.count} times
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Show the form if "Yes" is selected */}
              {isJudging && isFormVisible && (
                <form className="w-full pr-12" onSubmit={handleSubmit}>
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
                                onChange={(e) => handleCountChange(e, category)}
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
              )}
              {!isFormVisible ||
                (!isJudging && (
                  <button
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                    type="submit"
                    onClick={toggleForm}
                  >
                    Add Judging Info
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-1/2 h-[38rem]">
          <img src={Resume} className="rounded-xl shadow-md" />
        </div>
      </div>
      <NavigationBtn
        data={judging.isEdited ? judging : ""}
        api={`http://localhost:5000/api/v1/add-data/judging/${id}`}
        section={"judging"}
      />
    </>
  );
};

export default JudgingForm;
