import React from "react";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExibition,
  setFormField,
} from "../../redux/AdditionalForms/ExibitionSlice";
import { store } from "../../redux/store";
import { getData } from "../../utils/Data";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Exibition2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, e_id } = useParams();
  const { currentForm, exibition } = useSelector((state) => state.exibition);

  const exhibitionData = useSelector((state) => state.exhibition.forms);
  const filteredData = exhibitionData.filter((el) => el._id === e_id);
  const isDataAvailable = filteredData.length > 0;
  console.log(filteredData, "data");

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.title.trim() !== "") {
      const updatedExhibition = currentForm;
      const response = await axios.put(
        `http://localhost:5000/api/v1/update/exhibition/${e_id}`,
        { data: updatedExhibition }
      );
      if (response) {
        dispatch(addExibition()); // Add the current form to experiences
        getData(id, dispatch);
        // setIsOpen(!isOpen);
        const updatedFilteredData = exhibitionData.filter(
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

  // Toggle Experience section visibility
  const [isOpen, setIsOpen] = useState(true);

  const [selectedCategoryId, setSelectedCategoryId] = useState(e_id || null);

  // calling the api to store the values in the states after the page is refreshed
  useEffect(() => {
    if (id) {
      getData(id, dispatch);
      console.log(store.getState(), "data", "user");
    }
    console.log(store.getState(), "datauseEffect", "user");
  }, [id, dispatch]);

  const handleExhibition = (exhibition_id) => {
    console.log(exhibition_id);
    navigate(`/exibition/${id}/${exhibition_id}`);
    setSelectedCategoryId(exhibition_id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (e_id) {
      setSelectedCategoryId(e_id);
    }
  }, [e_id]);

  return (
    <div className="flex p-8">
      <div className="flex w-[30vw] h-[90vh] justify-center">
        <div className="flex flex-col w-full h-[88vh] items-center bg- px-6 md:pl-[5vw] overflow-y-auto overflow-x-hidden scrollbar-transparent">
          <div className="w-full mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-gray-700 font-medium ">
            Exhibition List
          </div>
          {/* Render previous forms as collapsed content */}
          {exhibitionData.length > 0 && (
            <div className="mb-4 w-[80%]">
              {exhibitionData.map((formContent, index) => (
                <div
                  key={index}
                  onClick={() => handleExhibition(formContent._id)}
                  className={`my-3 p-3 border ${
                    selectedCategoryId === formContent._id
                      ? "border-blue-500 bg-white shadow-lg font-semibold"
                      : "border-gray-300 bg-gradient-to-r from-white to-gray-100"
                  } cursor-pointer rounded-lg text-gray-700`}
                >
                  <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                    Exhibition {index + 1}
                  </div>
                  <div className="flex justify-center text-lg text-center mt-2">
                    <p className="text-gray-700 font-medium">
                      {formContent.role} {formContent.main.length}/
                      {formContent.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-2/3 h-[90vh]">
        <div className="flex flex-col justify-between w-full pl rounded-xl border shadow-lg bg-slate-100">
          <div className="overflow-y-auto overflow-x-hidden w-full h-[85vh] py-4 scrollbar-transparent flex flex-col items-center mt-[1.5vh]">
            <div className="flex text-2xl border border-gray-300 justify-center w-1/3 py-3 font-semibold mb-[1.5vh] rounded-lg bg-gradient-to-r from-white to-gray-100 shadow-md">
               Exhibition
            </div>

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
                        What is the title of the exhibition or conference?
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleInputChange}
                        placeholder="e.g., 'Global Tech Innovation Summit 2024'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Which organization hosted the exhibition or conference?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="organization"
                          id="organization"
                          onChange={handleInputChange}
                          placeholder="e.g., American Medical Association, Tech Innovations Inc."
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
                        Can you provide a link to the exhibition or conference
                        details?
                      </label>
                      <input
                        type="text"
                        name="link"
                        onChange={handleInputChange}
                        placeholder="e.g., https://www.example.com/conference-details"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        What were the criteria for selecting participants or
                        exhibitors?
                      </label>
                      <input
                        type="text"
                        name="criteria"
                        id="criteria"
                        onChange={handleInputChange}
                        placeholder="e.g., Innovation, Relevance to theme, Quality of submission"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Can you describe the activity you participated in during
                        the exhibition or conference?
                      </label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={handleInputChange}
                        placeholder="e.g., Presented a research paper, Led a workshop on emerging technologies"
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
                        <option value="prd">
                          PRD, meeting minutes, JIRA tickets
                        </option>
                        <option value="married">Approval/signoff chains</option>
                        <option value="separated">Architecture Drawings</option>
                        <option value="divorced">Business Retrospective</option>
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
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  type="submit"
                >
                  Add Exhibition
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
            ) } else {
              return (
                <>
                <div className="grid grid-cols-3 gap-4 w-full mt-4 px-6">
                {filteredData[0].main.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                >
                  <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                    Exhibition {index + 1} details:
                  </div>
                  <div className="flex flex-col gap-4 justify-center items-center text-lg mt-2">
                    <div className="text-gray-700 font-medium flex ">
                      <div className="font-normal ">Title</div> : {item.title}
                    </div>
                    <div className="text-gray-700 font-medium flex">
                      <div className="font-normal">Organization</div>:{" "}
                      {item.organization}
                    </div>
                    <div className="text-gray-700 font-medium flex">
                      <div className="font-normal "> criteria : </div>{" "}
                      {item.criteria}
                    </div>
                    <div className="text-gray-700 font-medium flex">
                      <div className="font-normal "> link : </div> {item.link}
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
  );
};

export default Exibition2;
