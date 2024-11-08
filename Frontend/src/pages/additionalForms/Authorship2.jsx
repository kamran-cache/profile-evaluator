import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import {
  addAuthorships,
  setFormField,
} from "../../redux/AdditionalForms/AuthorshipSlice2";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/Data";
import { store } from "../../redux/store";

const Authorship2 = () => {
  const [selectedType, setSelectedType] = useState("Paper");
  const handleSelectChange = (e) => {
    setSelectedType(e.target.value); // Update state based on selected option
  };

  const dispatch = useDispatch();

  const { currentForm, authorships } = useSelector(
    (state) => state.authorships
  );

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

      const companiesData = [
        {
          companyName: "Papers",
          roles: [
            { roleName: "The Future of AI in healthcare", roleDates: "IEEE"},
            { roleName: "Impact of AI on healthcare", roleDates: "Forbes"}
          ]
        },
        {
          companyName: "Books",
          roles: [
            { roleName: "The Future of AI in healthcare", roleDates: "IEEE"},
            { roleName: "Impact of AI on healthcare", roleDates: "Forbes"}
          ]
        },
        {
          companyName: "Patents",
          roles: [
            { roleName: "Lead Developer", roleDates: "Jan 2019 - Dec 2021" , location: "New York, NY"},
            { roleName: "Engineering Manager", roleDates: "Jan 2022 - Present" , location: "New York, NY"}
          ]
        }
      ];
    
      const [selectedCompany, setSelectedCompany] = useState(companiesData[0]);
    
      const [expandedCompany, setExpandedCompany] = useState(null);
    
      const navigate = useNavigate();
    
      const handleCardClick = () => {
        // Navigate to the details page with the companyId
        navigate('/authorship');
      };
    
      const toggleCompany = (index) => {
        setExpandedCompany(expandedCompany === index ? null : index);
      };    

  // Add form content to the Redux store
  const handleAddForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (
      currentForm.title.trim() !== "" ||
      currentForm.patentTitle.trim() !== ""
    ) {
      dispatch(addAuthorships()); // Add the current form to experiences
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

  // api calling
  // id and authorship id from url
  const { id, au_id } = useParams();
  // calling the api to store the values in the states after the page is refreshed
  useEffect(() => {
    if (id) {
      getData(id, dispatch);
      console.log(store.getState(), "data", "user");
    }
    console.log(store.getState(), "datauseEffect", "user");
  }, [id, dispatch]);

  const authorshipData = useSelector((state) => state.authorship);
  console.log(authorshipData, "jdata");

  const currentAuthorshipData = authorshipData.authorshipData.find(
    (el) => el._id === au_id
  );
  console.log(currentAuthorshipData, "curr");
  return (
    <div className="flex p-8">
      <div className="w-full md:w-1/3 pr-4">
        <div className="flex justify-center mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-2xl font-bold text-blue-600">
            Authorship List
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
              <div
                className="flex justify-between items-center"
                
              >
                <h3 className="text-xl font-semibold text-center w-full">{company.companyName}</h3>
                <span className="text-2xl">{expandedCompany === index ? "-" : "+"}</span>
              </div>
              {/* <p className="text-gray-600">{company.employmentDates}</p> */}

              {/* Display roles only if this company is expanded */}
              {expandedCompany === index && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-blue-600">List:</h4>
                  <div className="mt-2 space-y-2">
                    {company.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className="p-4 rounded-lg bg-white border border-blue-300 shadow-md hover:shadow-xl"
                        onClick={handleCardClick}
                      >
                        <h5 className="text-md font-semibold">{role.roleName}</h5>
                        <p className="text-gray-600">{role.roleDates}</p>
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
        <div className="flex flex-col justify-between w-full  rounded-xl shadow-[0_8px_10px_-1px_rgba(0,0,0,0.1),0_-6px_10px_-1px_rgba(0,0,0,0.1)] bg-slate-100">
          {/* Scrollable form content */}
          <div className="overflow-y-auto overflow-x-hidden w-full h-[88vh] py-4 scrollbar-transparent flex flex-col items-center mt-[1.5vh]">
            {/* Heading */}
            <div className="flex text-2xl font-semibold pl-2 mb-[1.5vh] w-full justify-start">
              {currentAuthorshipData && currentAuthorshipData.authorshipType
                ? currentAuthorshipData.authorshipType
                : ""}
              {/* :{" "} */}
              {currentAuthorshipData && currentAuthorshipData.title
                ? currentAuthorshipData.title
                : "Authorship"}
            </div>
            {/* Toggle Form Button */}
            <button
              className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Collapse Form" : "Add Authorship"}
            </button>

            {!isOpen && (
              <>
                {/* Render previous forms as collapsed content */}
                {authorships.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mt-8">
                    {authorships.map((formContent, index) => (
                      <div
                        key={index}
                        className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                      >
                        <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                          Authorship {index + 1}
                        </div>
                        <div className="flex justify-center text-lg text-center mt-2">
                          <p className="text-gray-700 font-medium">
                            {formContent.title
                              ? formContent.title
                              : formContent.patentTitle}
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
                        Select the type of authorship
                      </label>
                      <select
                        name="type"
                        id="type"
                        onChange={handleSelectChange}
                        className="w-full text-center rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                      >
                        <option value="Paper"> Paper </option>
                        <option value="Book">Book</option>
                        <option value="Patent">Patent</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Paper and Book */}
                {(selectedType === "Paper" || selectedType === "Book") && (
                  <>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What is the Title of your Paper/Book?
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={handleInputChange}
                            placeholder="e.g., 'The Future of AI in Healthcare'"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Who is the publisher of your paper or book?
                          </label>
                          <div className="flex space-x- w-full">
                            <input
                              type="text"
                              name="publisher"
                              id="publisher"
                              onChange={handleInputChange}
                              placeholder="e.g., Oxford University Press, Springer"
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
                            Can you provide a link to your paper or book?
                          </label>
                          <input
                            type="text"
                            name="link"
                            onChange={handleInputChange}
                            placeholder="e.g., https://www.example.com/my-paper"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            When was your paper or book published?
                          </label>
                          <input
                            type="text"
                            name="dateOfPublishing"
                            id="dateOfPublishing"
                            onChange={handleInputChange}
                            placeholder="e.g., March 15, 2023"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-3 -mx-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Who are the authors of the paper or book?
                        </label>
                        <input
                          type="text"
                          name="authors"
                          id="authors"
                          onChange={handleInputChange}
                          placeholder="e.g., John Doe, Jane Smith, Michael Lee"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
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
                            Please upload evidence of your authorship
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
                  </>
                )}

                {/* Patent */}
                {selectedType === "Patent" && (
                  <>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What is the Title of your Patent?
                          </label>
                          <input
                            type="text"
                            name="patentTitle"
                            id="patentTitle"
                            onChange={handleInputChange}
                            placeholder="e.g., 'The Future of AI in Healthcare'"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            In which country is your patent registered?
                          </label>
                          <div className="flex space-x- w-full">
                            <input
                              type="text"
                              name="patentRegistry"
                              id="patentRegistry"
                              onChange={handleInputChange}
                              placeholder="e.g., United States, Canada, Germany"
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
                            When was your patent granted or registered?
                          </label>
                          <input
                            type="patentDate"
                            name="patentDate"
                            onChange={handleInputChange}
                            placeholder="e.g., June 1, 2022"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What are the key features of your patent?
                          </label>
                          <input
                            type="text"
                            name="keyFeatures"
                            id="keyFeatures"
                            onChange={handleInputChange}
                            placeholder="e.g., Novel mechanism, Energy-efficient design, "
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-3 -mx-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Can you provide a detailed summary of your patent?
                        </label>
                        <input
                          type="text"
                          name="summary"
                          id="summary"
                          onChange={handleInputChange}
                          placeholder="e.g., Describe the invention, its purpose, and applications in detail."
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            How does your patent impact the industry?
                          </label>
                          <input
                            type="impact"
                            name="impact"
                            onChange={handleInputChange}
                            placeholder="e.g., Revolutionizes manufacturing processes, Reduces costs,"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#6B7280] shadow-md outline-none focus:border-[#6A64F1] focus:shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3">
                        <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            What are the potential use cases for your patent?
                          </label>
                          <input
                            type="text"
                            name="useCases"
                            id="useCases"
                            onChange={handleInputChange}
                            placeholder="e.g., Applicable in automotive industry, Enhancing medical devices"
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
                            Please upload evidence of your authorship
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
                  </>
                )}
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  type="submit"
                >
                  Add Authorship
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorship2;
