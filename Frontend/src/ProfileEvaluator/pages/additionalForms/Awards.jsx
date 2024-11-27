import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../../utils/Data";
import Sidebar from "../../components/Tools/Sidebar";
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import {
  addProjects,
  setAwardsForm,
  setFormField,
  setProjects,
  addAwards,
  resetAwardForm,
} from "../../redux/AdditionalForms/CriticalRoleSlice";
import { setAwards } from "../../redux/awardsSlice";

const Awards = () => {
  let { id, c_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetching data from Redux store
  const companiesData = useSelector(
    (state) => state.experience.experiences || []
  );
  const awardsData = useSelector((state) => state.awards || { awards: [] });
  console.log(awardsData, "asaeasaa");
  const { currentForm, projects, awards, currentAwardForm } = useSelector(
    (state) => state.projects
  );

  // Component states
  const [selectedCompany, setSelectedCompany] = useState();
  const [filteredAwards, setFilteredAwards] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filter, setFilter] = useState("1");

  // Load data when `id` changes
  useEffect(() => {
    if (id) {
      getData(id, dispatch);
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (filter === "0" && selectedCompany) {
      // Filter by selected company
      const filtered = awardsData.awards.filter(
        (award) => award.experience === selectedCompany._id
      );
      setFilteredAwards(filtered);
    } else if (filter === "1") {
      // Show all awards
      setFilteredAwards(awardsData.awards);
    }
  }, [filter, selectedCompany, awardsData.awards]);

  // Update awards when a company is selected
  // const toggleCompany = (index) => {
  //   const company = companiesData[index];
  //   if (selectedCompany === company) {
  //     setSelectedCompany(null);
  //     setFilteredAwards([]); // Clear awards when deselecting
  //     setFilter("0");
  //   } else {
  //     setSelectedCompany(company);
  //     // Filter awards by the company's experience ID
  //     const filtered = awardsData.awards.filter(
  //       (award) => award.experience === company._id
  //     );
  //     setFilteredAwards(filtered);
  //   }

  //   if (company) {
  //     navigate(`/awards/${id}/${company._id}`);
  //   }
  // };
  const toggleCompany = (index) => {
    const company = companiesData[index];
    setSelectedCompany(company);
    setFilter("0"); // Set filter to "Company" when selecting a company
    const filtered = awardsData.awards.filter(
      (award) => award.experience === company._id
    );
    setFilteredAwards(filtered);

    navigate(`/awards/${id}/${company._id}`);
  };

  const handleAddAwardsForm = async (e) => {
    e.preventDefault();

    try {
      // Prepare the form data
      const formData = currentAwardForm;
      console.log(formData, 12324);

      if (filter === "1") {
        c_id = "undefined";
      }
      // Send the form data to the backend
      const response = await axios.post(
        `http://localhost:5000/api/v1/add-data/Awards/${id}/${c_id}`,
        {
          data: formData,
        }
      );

      if (response.status === 200) {
        alert("Award added successfully!");
        dispatch(resetForm());
        setIsFormOpen(false);
      } else {
        const errorData = await response.json();
        console.error("Error adding award:", errorData);
        alert("Failed to add the award.");
      }
    } catch (error) {
      console.error("Error submitting award:", error);
      alert("An unexpected error occurred.");
    }
  };
  const handleAwardInputChange = (e) => {
    const { name, value, files } = e.target;

    // Handle file input separately
    if (name === "evidence") {
      dispatch(setAwardsForm({ name, value: files[0] }));
    } else {
      dispatch(setAwardsForm({ name, value }));
    }
  };
  console.log("form status", isFormOpen);

  return (
    <div key={id} className="flex p-8">
      <Sidebar />
      <div className="w-full md:w-1/3 ml-10 pr-4">
        <div className="sorting text-xl mb-2 ml-2 font-medium font-metropolis">
          Apply filter to see awards:
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="flex text-xl w-full justify-center mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-2 px-3 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out  font-bold text-blue-600 text-center"
        >
          {/* <option value="">Filter Awards</option> */}
          <option value="0">Company</option>
          <option value="1">All</option>
        </select>
        <div className="space-y-4">
          {filter === "0" && (
            <div>
              {companiesData.map((company, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-md border cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => toggleCompany(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{company.company}</h3>
                  </div>
                  <p className="text-gray-600">{company.location}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* right side container */}
      <div className="flex w-2/3 h-[88vh]">
        <div className="flex flex-col justify-between w-full rounded-xl border shadow-lg bg-white">
          <div className="overflow-y-auto w-full h-[85vh] py-4 px-3 flex flex-col items-center mt-[1.5vh]">
            <div className="text-2xl  font-semibold mb-[2vh] ml-4 flex flex-row items-center justify-start w-full">
              {selectedCompany ? selectedCompany.company : ""}
              {selectedCompany ? <FaAngleRight className="mt-1" /> : ""}

              <span>Awards</span>
            </div>

            {filteredAwards.length > 0 && !isFormOpen ? (
              <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mt-8">
                {filteredAwards.map((award, index) => (
                  <div
                    key={index}
                    className="mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                  >
                    <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                      Award {index + 1}
                    </div>
                    <div className="flex justify-center text-lg text-center mt-2">
                      <p className="text-gray-700 font-medium">
                        {award.awardName}
                      </p>
                    </div>
                    <div className="text-gray-600 text-center mt-1">
                      Presented by: {award.issuingOrganization}
                    </div>
                  </div>
                ))}
                
              </div>
              <div className="addAwards">
                  <button
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className=" px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Add Awards
                  </button>
                </div>
              </>
            ) : (
              <div className="text-gray-500 mt-4 flex flex-col">
                {!isFormOpen && (
                  <div className="flex flex-col items-center justify-center">
                    <p> Select company to view the awards or add one </p>
                    <button
                      className="w-fit px-4 py-2 mt-3 bg-primary text-white"
                      onClick={() => setIsFormOpen(!isFormOpen)}
                    >
                      Add Awards
                    </button>
                  </div>
                )}

                {isFormOpen && (
                  <form className="w-full px-12" onSubmit={handleAddAwardsForm}>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What is the Name of your Award?
                          </label>
                          <input
                            type="text"
                            name="awardName"
                            placeholder="e.g., 'Meta AI Research Award'"
                            onChange={handleAwardInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Who presented the award(s)?
                          </label>
                          <input
                            type="text"
                            name="issuingOrganization"
                            placeholder="e.g., 'Google, Government of XYZ'"
                            onChange={handleAwardInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            When did you receive the award(s)?
                          </label>
                          <input
                            type="date"
                            name="date"
                            onChange={handleAwardInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Scope of the Award
                          </label>
                          <select
                            name="scope"
                            onChange={handleAwardInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          >
                            <option value="">-- select scope --</option>
                            <option value="international">International</option>
                            <option value="national">National</option>
                            <option value="regional">Regional</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What were the criteria for the award?
                          </label>
                          <textarea
                            name="criteria"
                            placeholder="e.g., 'Recognized for exceptional contributions to AI research'"
                            onChange={handleAwardInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            How does this award reflect your impact in your
                            field?
                          </label>
                          <textarea
                            name="nicheImpact"
                            placeholder="e.g., 'Set a benchmark for AI ethics in research'"
                            onChange={handleAwardInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          ></textarea>
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
                            onChange={handleAwardInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          >
                            <option value="">-- select one --</option>
                            <option value="certificate">Certificate</option>
                            <option value="press_release">Press Release</option>
                            <option value="media_coverage">
                              Media Coverage
                            </option>
                            <option value="testimonial">Testimonial</option>
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
                            onChange={handleAwardInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
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
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
