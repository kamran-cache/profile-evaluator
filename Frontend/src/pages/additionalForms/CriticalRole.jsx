import React from "react";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { store } from "../../redux/store";
import {
  addProjects,
  setFormField,
  setProjects,
} from "../../redux/AdditionalForms/CriticalRoleSlice";
import { setExperience } from "../../redux/experienceSlice";
import Sidebar from "../../components/Tools/Sidebar";
import { FaAngleRight } from "react-icons/fa6";
import { getData } from "../../utils/Data";
import { current } from "@reduxjs/toolkit";
import axios from "axios";

const CriticalRole = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userId = useSelector((state) => state.application.id);
  //console.log("userId", userId);
  const { currentForm, projects } = useSelector((state) => state.projects);
  //console.log(projects, "porj", currentForm);
  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  // Add form content to the Redux store
  const handleAddForm = async (e) => {
    e.preventDefault();
    if (currentForm.projectTitle.trim() !== "") {
      const projects = currentForm;
      //console.log(projects, "updated projects after dispatch");
      const response = await axios.post(
        `http://localhost:5000/api/v1/projects/${c_id}/${r_id}`,
        { data: projects }
      );
      if (response) dispatch(addProjects());
      setIsOpen(!isOpen);
    }
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
  const { id, c_id, r_id } = useParams();
  //console.log(id, r_id, "id", c_id);
  // calling the api to store the values in the states after the page is refreshed
  useEffect(() => {
    if (id) {
      getData(id, dispatch);
      //console.log(store.getState(), "data", "user");
    }
    //console.log(store.getState(), "datauseEffect", "user");
  }, [id, dispatch]);

  const companiesData = useSelector((state) => state.experience.experiences);
  //console.log("store", store.getState());
  //console.log(companiesData, "comanyData");

  const company = companiesData?.find((exp) => exp._id === c_id);
  const role = company?.roles.find((role) => role._id === r_id);

  //console.log("company", company, role);
  // const companiesData = [
  //   {
  //     companyName: "Company A",
  //     employmentDates: "Jan 2022 - Dec 2024",
  //     roles: [
  //       { roleName: "Software Engineer", roleDates: "Jan 2022 - Dec 2023" , location: "New York, NY"},
  //       { roleName: "Senior Engineer", roleDates: "Jan 2023 - Dec 2024" , location: "New York, NY"}
  //     ]
  //   },
  //   {
  //     companyName: "Company B",
  //     employmentDates: "Jan 2019 - Present",
  //     roles: [
  //       { roleName: "Lead Developer", roleDates: "Jan 2019 - Dec 2021" , location: "New York, NY"},
  //       { roleName: "Engineering Manager", roleDates: "Jan 2022 - Present" , location: "New York, NY"}
  //     ]
  //   }
  // ];

  const [selectedCompany, setSelectedCompany] = useState(companiesData[0]);

  const [expandedCompany, setExpandedCompany] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = (c_id, r_id) => {
    // Navigate to the details page with the companyId
    navigate(`/role/${id}/${c_id}/${r_id}`);
  };

  const toggleCompany = (index) => {
    setExpandedCompany(expandedCompany === index ? null : index);
  };

  const getProjects = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/projects/${r_id}`
    );
    if (response) dispatch(setProjects(response.data.projects));
    console.log(response.data, "response");

    console.log(projects, "response");
  };
  useEffect(() => {
    getProjects();
  }, [r_id]);
  return (
    <>
      <div key={id} className="flex p-8 ">
        <Sidebar />
        {/* Timeline */}
        <div className="w-full md:w-1/3 ml-10 pr-4">
          <div className="flex w-[70%] justify-center mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-2 px-3 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-2xl font-bold text-blue-600">
            Companies
          </div>
          <div className="space-y-4">
            {companiesData.map((company, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md border ${
                  expandedCompany === index
                    ? "bg-gradient-to-r from-white to-gray-100 border-blue-400"
                    : "border border-gray-300 bg-gradient-to-r from-white to-gray-100"
                } cursor-pointer hover:shadow-lg transition-all duration-300`}
                onClick={() => toggleCompany(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{company.company}</h3>
                  <span className="text-2xl">
                    {expandedCompany === index ? "-" : "+"}
                  </span>
                </div>
                <p className="text-gray-600">{company.location}</p>

                {/* Display roles only if this company is expanded */}
                {expandedCompany === index && (
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-blue-600">Roles:</h4>
                    <div className="mt-2 space-y-2">
                      {company.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="p-4 rounded-lg bg-white border border-blue-300 shadow-md hover:shadow-xl"
                          onClick={() => handleCardClick(company._id, role._id)}
                        >
                          <h5 className="text-md font-semibold">
                            {role.jobTitle}
                          </h5>
                          <p className="text-gray-600">
                            {role.startDate}-{role.endDate}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-2/3 h-[88vh]">
          <div className="flex flex-col justify-between w-full  rounded-xl border shadow-lg bg-white">
            {/* Scrollable form content */}
            <div className="overflow-y-auto overflow-x-hidden w-full h-[85vh] py-4 scrollbar-transparent flex flex-col items-center mt-[1.5vh]">
              {/* Heading */}
              <div className="text-2xl font-semibold mb-[2vh] flex flex-row items-center justify-start  w-full">
                {company ? company.company : "company"}{" "}
                <FaAngleRight className="mt-1" />
                {role ? role.jobTitle : "role"}{" "}
                <FaAngleRight className="mt-1" />
                <span>Projects</span>
              </div>

              {/* Toggle Form Button */}
              <button
                className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Collapse Form" : "Add Projects"}
              </button>

              {!isOpen && (
                <>
                  {projects.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mt-8">
                      {projects.map((formContent, index) => (
                        <div
                          key={index}
                          className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                        >
                          <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                            Project {index + 1}
                          </div>
                          <div className="flex justify-center text-lg text-center mt-2">
                            <p className="text-gray-700 font-medium">
                              {formContent.projectTitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Toggle Form */}
              {isOpen && (
                <form className="w-full px-12" onSubmit={handleAddForm}>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          What is the Title of your Project?
                        </label>
                        <input
                          type="text"
                          name="projectTitle"
                          id="title"
                          placeholder="e.g., 'Meta AI , etc'"
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          What are your key deliverables for the project?
                        </label>
                        <div className="flex space-x- w-full">
                          <input
                            type="text"
                            name="deliverables"
                            id="deliverables"
                            onChange={handleInputChange}
                            placeholder="e.g., 'System architecture, product roadmap, etc.'"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          What was your contribution to the project?
                        </label>
                        <input
                          type="text"
                          name="contribution"
                          id="contribution"
                          onChange={handleInputChange}
                          placeholder="e.g., 'Backend development, UI design, etc.'"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>

                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          How did the project benefit the company?
                        </label>
                        <input
                          type="text"
                          name="benefitToCompany"
                          id="benefitToCompany"
                          onChange={handleInputChange}
                          placeholder="e.g., 'Increased revenue by 20%, improved workflow, etc.' "
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          What was the principal or user impact of the project?
                        </label>
                        <input
                          type="text"
                          name="userImpact"
                          id="userImpact"
                          onChange={handleInputChange}
                          placeholder="e.g., 'Enhanced user experience, reduced errors, etc.'"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          How did the project impact your niche department?
                        </label>
                        <input
                          type="text"
                          name="nicheImpact"
                          id="nicheImpact"
                          onChange={handleInputChange}
                          placeholder="e.g., 'Streamlined communication, automation of processes, etc.'"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
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
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        >
                          <option value="">-- select one --</option>
                          <option value="prd">
                            PRD, meeting minutes, JIRA tickets
                          </option>
                          <option value="married">
                            Approval/signoff chains
                          </option>
                          <option value="separated">
                            Architecture Drawings
                          </option>
                          <option value="divorced">
                            Business Retrospective
                          </option>
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
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    type="submit"
                  >
                    Add Project
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CriticalRole;
