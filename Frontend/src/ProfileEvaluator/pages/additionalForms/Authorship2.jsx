import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  addAuthorships,
  setFormField,
} from "../../redux/AdditionalForms/AuthorshipSlice2";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/Data";
import { store } from "../../redux/store";
import axios from "axios";

const Authorship2 = () => {
  const [selectedType, setSelectedType] = useState("Paper");
  const handleSelectChange = (e) => {
    setSelectedType(e.target.value); // Update state based on selected option
  };

  const dispatch = useDispatch();

  const { currentForm, authorships } = useSelector(
    (state) => state.authorships
  );
  console.log("authorshipsssss", authorships);
  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  const companiesData = [
    {
      companyName: "Paper",
    },
    {
      companyName: "Book",
    },
    {
      companyName: "Patent",
    },
  ];

  const [selectedCompany, setSelectedCompany] = useState(companiesData[0]);

  const [expandedCompany, setExpandedCompany] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to the details page with the companyId
    navigate("/authorship");
  };

  const toggleCompany = (index) => {
    setExpandedCompany(expandedCompany === index ? null : index);
  };
  const [isOpen, setIsOpen] = useState(true);
  const { id } = useParams();

  // Add form content to the Redux store
  // const handleAddForm = async (e) => {
  //   e.preventDefault(); // Prevent default form submission
  //   if (
  //     currentForm.title.trim() !== "" ||
  //     currentForm.patentTitle.trim() !== ""
  //   ) {
  //     const updatedAuthorship = currentForm;
  //     console.log("auuuuuuuu", au_id);
  //     const response = await axios.put(
  //       `http://localhost:5000/api/v1/update/authorship/${au_id}`,
  //       { data: updatedAuthorship }
  //     );
  //     if (response) {
  //       navigate(`/authorship/${id}`);
  //       console.log("ressssssssssssss", response);
  //       dispatch(addAuthorships()); // Add the current form to experiences
  //       setIsOpen(false);
  //       localStorage.setItem(`isOpen_${au_id}`, "false");
  //     }
  //   }
  // };
  // useEffect(() => {
  //   const savedIsOpen = localStorage.getItem(`isOpen_${au_id}`);
  //   console.log("savedddddd",savedIsOpen)
  //   if (savedIsOpen === "false") {
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(false); // Default to open if not found
  //   }
  // }, [au_id]);

  // const getIsOpenState=(au_id)=>{

  //   return au_id
  // }
  const location = useLocation();
  const au_id = location.state?.au_id;
  useEffect(() => {
    console.log("props", au_id);
    const isSaveId = localStorage.getItem(`isOpen_${au_id}`);
    console.log("isSaved", isSaveId);
    // const savedIsOpen = getIsOpenState();
    // setIsOpen(savedIsOpen);
  }, []);
  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     const savedIsOpen = getIsOpenState(au_id);
  //     setIsOpen(savedIsOpen);
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, [au_id]);
  // Toggle Experience section visibility

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

  // const currentAuthorshipData = authorshipData.authorshipData.find(
  //   (el) => el._id === au_id
  // );
  // console.log(currentAuthorshipData, "curr");
  const [expandedCategory, setExpandedCategory] = useState("Paper"); // Track selected category

  const categories = ["Paper", "Book", "Patent"]; // Available categories

  const handleCategoryClick = (category) => {
    setExpandedCategory(category === expandedCategory ? null : category); // Toggle category
  };

  const handleItems = (authorId) => {
    console.log("formid", authorId);
    navigate(`/authorship/${id}/${authorId}`);
  };
  // const step = useSelector((state) => state.application.step);

  const addAuthor = () => {
    navigate(`/form/${id}`);
  };
  return (
    <div className="flex p-8">
      <div className="w-full md:w-1/3 pr-4">
        <div className="flex justify-center mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out text-2xl font-bold text-blue-600">
          Authorship List
        </div>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md border ${
                expandedCategory === category
                  ? "bg-gradient-to-r from-white to-gray-100 border-blue-400"
                  : "border border-gray-300 bg-gradient-to-r from-white to-gray-100"
              } cursor-pointer hover:shadow-lg transition-all duration-300`}
              onClick={() => handleCategoryClick(category)}
            >
              <h3 className="text-xl font-semibold text-center">{category}</h3>
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
              {/* {currentAuthorshipData && currentAuthorshipData.authorshipType
                ? currentAuthorshipData.authorshipType
                : ""} */}
              {/* :{" "} */}
              {/* {currentAuthorshipData && currentAuthorshipData.title
                ? currentAuthorshipData.title
                : "Authorship"} */}
            </div>
            {/* Toggle Form Button */}
            {/* {
              <button
                className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Collapse Form" : "Add Authorship"}
              </button>
            } */}

            {/* {isOpen !== false && ( */}
            <>
              {/* Render previous forms as collapsed content */}
              {authorshipData.authorshipData.length > 0 && (
                <div className="text-xl font-bold">
                  {categories.map((type) => {
                    const items = authorshipData.authorshipData.filter(
                      (item) => item.authorshipType === type
                    );

                    // If no items are available, display a message
                    if (items.length === 0 && expandedCategory === type) {
                      return (
                        <div key={type} className="text-center mt-4">
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            No {type.toLowerCase()} is available.
                          </h2>
                          <button
                            className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => addAuthor()}
                          >
                            Add Authorship
                          </button>
                        </div>
                      );
                    }

                    // Display the available items
                    return items.length > 0 && expandedCategory === type ? (
                      <div key={type}>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                          {type}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mt-4">
                          {items.map((formContent, index) => (
                            <div
                              key={formContent._id}
                              className="w-[20vw] mb-4 rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 py-4 px-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
                            >
                              <div className="flex justify-center text-xl text-center font-semibold text-blue-600">
                                {`${type} ${index + 1}`}
                              </div>
                              <div className="flex flex-col justify-center text-lg text-center mt-2">
                                <p className="text-gray-700 font-medium">
                                  {formContent.title || formContent.patentTitle}
                                </p>
                                <p className="text-gray-700 font-medium">
                                  {formContent.summary}
                                </p>
                                <p className="text-gray-700 font-medium">
                                  {formContent.publication ||
                                    formContent.patentNumber}
                                </p>
                              </div>
                              <button
                                className={`w-fit mb-4 px-4 py-2 rounded transition-all duration-300 ${
                                  localStorage.getItem(
                                    `isOpen_${formContent._id}`
                                  ) === "true"
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-blue-500 text-white hover:bg-blue-600"
                                }`}
                                onClick={() => handleItems(formContent._id)}
                                disabled={
                                  localStorage.getItem(
                                    `isOpen_${formContent._id}`
                                  ) === "true"
                                }
                              >
                                {localStorage.getItem(
                                  `isOpen_${formContent._id}`
                                ) === "true"
                                  ? "Completed"
                                  : "Fill Application"}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              )}
            </>
            {/* )} */}

            {/* Toggle Form */}
            {/* {isOpen === false && ( */}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorship2;
