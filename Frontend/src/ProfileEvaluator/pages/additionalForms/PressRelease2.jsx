import React from "react";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  addPress,
  setFormField,
} from "../../redux/AdditionalForms/PressReleaseSlice2";
import { store } from "../../redux/store";
import { getData } from "../../utils/Data";
import { useParams } from "react-router-dom";
import axios from "axios";

const PressRelease2 = () => {
  const dispatch = useDispatch();

  const { currentForm, press } = useSelector((state) => state.press);
  const { id, pr_id } = useParams();
  const prData = useSelector((state) => state.pressRelease.pressReleases);
  console.log(prData, "prData");
  const totalLength = prData.length;
  const completedCount = prData.filter(
    (el) => el.status === "completed"
  ).length;
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };
  // Add form content to the Redux store
  const handleAddForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (currentForm.title.trim() !== "") {
      const updatedPr = { ...currentForm, status: "completed" };
      try {
        if (pr_id) {
          await axios.put(`http://localhost:5000/api/v1/update/pr/${pr_id}`, {
            data: updatedPr,
          });
        } else {
          await axios.post(
            `http://localhost:5000/api/v1/add-data/pressrelease/${id}`,
            { data: { pressReleases: updatedPr } }
          );
        }

        // Re-fetch data to update state after submission
        getData(id, dispatch);
        setAlert("FormSubmitted successfully!!!");
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      } catch (error) {
        console.error("Error submitting form:", error.message);
        // Handle errors if needed
      }
    }
  };
  const filteredData = prData.filter((el) => el._id === pr_id);

  // calling the api to store the values in the states after the page is refreshed
  useEffect(() => {
    if (id) {
      getData(id, dispatch);
      console.log(store.getState(), "data", "user");
    }
    console.log(store.getState(), "datauseEffect", "user");
  }, [id, dispatch]);

  const handlePr = (pr_id) => {
    navigate(`/pr/${id}/${pr_id}`);
  };
  const handleNew = () => {
    navigate(`/pr/${id}/`);
  };
  return (
    <div className="flex p-8 ">
      <div className="w-full md:w-1/3 pr-4">
        <div className="flex justify-between mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-2xl font-bold text-blue-600">
          Press Release List{" "}
          <div className="text-gray-400 font-medium ">
            {completedCount} / {totalLength}
          </div>
        </div>
        <div className="space-y-4">
          {prData.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md  
                   border border-gray-300 bg-gradient-to-r from-white to-gray-100
              cursor-pointer hover:shadow-lg transition-all duration-300`}
              onClick={() => handlePr(item._id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{item.title} </h3>
                <div className="status">
                  {item.status === "completed" ? "completed" : "pending"}
                </div>
              </div>
              <div className="text-gray-600">{item.publication}</div>
            </div>
          ))}
          <div
            onClick={handleNew}
            className="addPr p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-300 bg-gradient-to-r from-white to-gray-100"
          >
            Add New Press Release Info
          </div>
        </div>
      </div>
      <div className="flex w-2/3 h-[88vh]">
        <div className="flex flex-col justify-between w-full pl-12 rounded-xl border shadow-lg bg-white">
          <div className="overflow-y-auto overflow-x-hidden w-full h-[85vh] py-4 scrollbar-transparent flex flex-col items-center mt-[1.5vh]">
            <div className="flex text-2xl font-semibold mb-[1.5vh]">
              Press Release
            </div>

            {/* Render previous forms as collapsed content */}
            {filteredData.length > 0 &&
            filteredData[0].status === "completed" ? (
              <div className="flex">
                {filteredData.map((formContent, index) => (
                  <div
                    key={index}
                    className="mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                  >
                    <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                      Press Release {index + 1}
                    </div>
                    <div className="flex flex-col gap-4 justify-center text-lg text-center mt-2">
                      <div className="text-gray-700 font-medium flex ">
                        <div className="font-normal ">Title</div> :{" "}
                        {formContent.title}
                      </div>
                      <div className="text-gray-700 font-medium flex">
                        <div className="font-normal "> Publisher </div> :{" "}
                        {formContent.publication}
                      </div>
                      <div className="text-gray-700 font-medium flex">
                        <div className="font-normal "> Author : </div>{" "}
                        {formContent.author}
                      </div>
                      <div className="text-gray-700 font-medium flex">
                        <div className="font-normal "> link : </div>{" "}
                        {formContent.link}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : !alert ? (
              <form className="w-full pr-12" onSubmit={handleAddForm}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        What is the title of the press release?
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleInputChange}
                        placeholder="e.g., 'Innovative Startup Disrupts the Healthcare Industry'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Who published the press release?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="publication"
                          id="publisher"
                          onChange={handleInputChange}
                          placeholder="e.g., Forbes, TechCrunch"
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
                        When was the press release published?
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder=""
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Can you provide a link to the press release?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="link"
                          id="link"
                          onChange={handleInputChange}
                          placeholder="e.g., https://www.example.com/press-release"
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
                        Who was the journalist or author of the press release?
                      </label>
                      <input
                        type="text"
                        name="author"
                        onChange={handleInputChange}
                        placeholder="e.g., Jane Doe, Michael Smith"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Which industry does the press release impact or focus
                        on?
                      </label>
                      <input
                        type="text"
                        name="industry"
                        id="industry"
                        onChange={handleInputChange}
                        placeholder="e.g., Technology, Healthcare"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        What type of article is the press release?
                      </label>
                      <input
                        type="text"
                        name="type"
                        id="type"
                        onChange={handleInputChange}
                        placeholder="e.g., Industry Impact, Feature article, Interview, Opinion piece"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  type="submit"
                >
                  Add PR
                </button>
              </form>
            ) : (
              <div>{alert}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRelease2;
