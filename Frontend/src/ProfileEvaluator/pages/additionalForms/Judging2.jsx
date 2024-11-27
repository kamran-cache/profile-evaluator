import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addJudging,
  setFormField2,
} from "../../redux/AdditionalForms/JudgingSlice2";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getData } from "../../utils/Data";

const Judging = () => {
  // getting id from the url id = userId and J_id = current judging record Id
  const { id, j_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentForm, judging } = useSelector((state) => state.judgings);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField2({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.organizationName.trim() !== "") {
      const updatedJudging = currentForm;
      const response = await axios.put(
        `http://localhost:5000/api/v1/update/judging/${j_id}`,
        { data: updatedJudging }
      );
      if (response) {
        // dispatch(addJudging()); // Add the current form to experiences
        getData(id, dispatch);
        // setIsOpen(!isOpen);
        const updatedFilteredData = judgingData.judgingRecords.filter(
          (el) => el._id === selectedCategoryId
        );

        if (
          updatedFilteredData.length > 0 &&
          updatedFilteredData[0].main.length > 0
        ) {
          setIsOpen(false); // Close the form if data is complete
        } 
      }
    }
  };

  useEffect(() => {
    if (id) {
      getData(id, dispatch);
      // console.log(store.getState(), "data", "user");
    }
    // console.log(store.getState(), "datauseEffect", "user");
  }, [id, dispatch]);


  // Toggle Experience section visibility
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCategoryId, setSelectedCategoryId] = useState(j_id || null);

  const judgingData = useSelector((state) => state.judging);
  console.log(judgingData, "jdata");

  const filteredData = judgingData.judgingRecords.filter(
    (el) => el._id === selectedCategoryId
  );
  console.log(filteredData, "curr");

  const isDataAvailable = filteredData.length > 0;

  const handleJudgingClick = (j_id) => {
    navigate(`/judging/${id}/${j_id}`);
    setSelectedCategoryId(j_id);
    setIsOpen(false);
  };

  // Update the selectedCategoryId when the URL changes 
  useEffect(() => {
    if (j_id) {
      setSelectedCategoryId(j_id);
    }
  }, [j_id]);

  return (
    <>
      <div className="flex">
        <div className="flex w-[30vw] h-[100vh] justify-center">
          <div className="flex flex-col h-[88vh] mt-[10vh] items-center bg-white px-6 md:pl-[5vw] overflow-y-auto overflow-x-hidden scrollbar-transparent">
            <div className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-blue-700 font-medium text-center text-xl">
              Judging List
            </div>
            {/* Render list of Judging Category*/}
            <div className="w-full">
              {judgingData &&
                judgingData.judgingRecords.map((content, index) => (
                  <div
                    key={content._id}
                    className={`my-3 p-3 border ${
                      selectedCategoryId === content._id
                        ? "border-blue-500 bg-white shadow-lg font-semibold"
                        : "border-gray-300 bg-gradient-to-r from-white to-gray-100"
                    } cursor-pointer rounded-lg text-gray-700`}
                    onClick={() => handleJudgingClick(content._id)}
                  >
                    <div className="flex flex-col justify-center text-lg text-center mt-2">
                      <p className="font-medium">
                        Judged at {content.category}
                      </p>
                      <p className="font-medium text-gray-700">
                        {Array.isArray(content.main) ? content.main.length : 0}/
                        {content.count}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex w-[65vw] h-[88vh] mt-[8vh]">
          <div className="flex flex-col justify-between w-full rounded-xl shadow-[0_8px_10px_-1px_rgba(0,0,0,0.1),0_-6px_10px_-1px_rgba(0,0,0,0.1)] bg-slate-100 ">
            {/* Scrollable form content */}
            <div className="overflow-y-auto overflow-x-hidden w-full h-[85vh] py-4 scrollbar-transparent flex flex-col items-center mt-[1.5vh]">
              {/* Heading */}
              <div className="flex text-2xl border border-gray-300 justify-center w-1/3 py-3 font-semibold mb-[1.5vh] rounded-lg bg-gradient-to-r from-white to-gray-100 shadow-md">
                Judging
              </div>
              {/* Toggle Form Button */}
              {/* <button
                className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Collapse Form" : "Add Projects"}
              </button> */}

              {/* Toggle Form */}
              {isDataAvailable ? (
                (() => {
                  const selectedData = filteredData[0];

                    if (isOpen || selectedData.main.length === 0){
                  return (
                    <form className="w-full px-12 mt-4" onSubmit={handleAddForm}>
                      <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3">
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              Which organization did you judge or review for?
                            </label>
                            <input
                              type="text"
                              name="organizationName"
                              id="organizationName"
                              onChange={handleInputChange}
                              placeholder="e.g., IEEE, National Science Foundation"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                            />
                          </div>
                        </div>
                        <div className="w-full px-3">
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              When did your judging or review start and end?
                            </label>
                            <div className="flex space-x- w-full">
                              <input
                                type="text"
                                name="startDate"
                                placeholder="Start Date"
                                onChange={handleInputChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                              />
                              <span className="p-2 mt-1 font-semibold">
                                {" "}
                                -{" "}
                              </span>
                              <input
                                type="text"
                                name="endDate"
                                placeholder="End Date"
                                onChange={handleInputChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3">
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              Can you provide a link to the organization you
                              judged or reviewed for?
                            </label>
                            <input
                              type="text"
                              name="link"
                              onChange={handleInputChange}
                              placeholder="e.g., https://www.example-organization.com"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                            />
                          </div>
                        </div>

                        <div className="w-full px-3">
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              What were the criteria for selecting the entries
                              you judged or reviewed?
                            </label>
                            <input
                              type="text"
                              name="criteria"
                              id="criteria"
                              onChange={handleInputChange}
                              placeholder="e.g., Innovation, Technical accuracy, Social impact, Creativity"
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
                              Please upload evidence of your Judging
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
                      <button
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        type="submit"
                      >
                        Add Details
                      </button>
                      {filteredData[0].main.length !== 0 && (
                        <button
                        className="mt-2 ml-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Back to List
                      </button>
                      )}
                      
                    </form>
                  )} else {
                     return (
                      <>
                      <div className="grid grid-cols-3 gap-4 w-full mt-4 px-6">
                      {filteredData[0].main.map((item, index) => (
                        <div
                          key={index}
                          className="mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out "
                        >
                          <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                            Judging {index + 1} details
                          </div>
                          <div className="flex flex-col gap-4 justify-center items-center text-lg text-center mt-2">
                            <div className="text-gray-700 font-medium flex">
                              <div className="font-normal "> Organization</div>:{" "}
                              {item.organizationName}
                            </div>
                            <div className="text-gray-700 font-medium flex">
                              <div className="font-normal "> criteria : </div>{" "}
                              {item.criteria}
                            </div>
                            <div className="text-gray-700 font-medium flex">
                              <div className="font-normal "> link: </div>{" "}
                              {item.link}
                            </div>
                          </div>
                        </div>
                      ))}
                      </div>
                      {selectedData.main.length < selectedData.count && (<>
                        <p className="font-medium text-gray-700">Provide details regarding <strong>{selectedData.count - selectedData.main.length}</strong> more <strong>{selectedData.category}</strong> that you have judged at to complete Judging section.</p>
                      <button
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        type="submit"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Add Details
                      </button>
                      </>)}
                      
                      
                      </>)
                  };
                })()
              ) : (
                <p className="text-gray-700">
                  No data available for the selected category.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Judging;
