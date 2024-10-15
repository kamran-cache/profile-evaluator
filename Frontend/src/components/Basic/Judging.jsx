// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFormField, addJudgingRecord } from "../redux/judgingSlice";
// import Resume from "../assets/resume.jpg";

// const JudgingForm = () => {
//   const dispatch = useDispatch();
//   const { currentForm, judgingRecords } = useSelector((state) => state.judging);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     dispatch(
//       setFormField({ name, value: type === "checkbox" ? checked : value })
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addJudgingRecord());
//   };

//   // Toggle Form visibility
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="flex w-full pt-4">
//       <div className="flex justify-center w-1/2 h-full">
//         {/* Form component */}
//         <div className="flex flex-col justify-between w-full pl-12 bg-white">
//           {/* Scrollable form content */}
//           <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent flex flex-col items-center">
//             {/* Heading */}
//             {!isOpen ? (
//               <div className="block text-xl font-semibold mb-4  flex-row">
//                 Have you been invited to or <strong> judge </strong>or
//                 <strong> review others' work</strong> (e.g., competitions, peer
//                 reviews)?
//               </div>
//             ) : (
//               ""
//             )}

//             {/* Render previous forms */}
//             {judgingRecords.length > 0 && (
//               <div className="mb-4">
//                 {judgingRecords.map((formContent, index) => (
//                   <div
//                     key={index}
//                     className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium"
//                   >
//                     <strong>Press Release {index + 1}:</strong>
//                     <p className="text-gray-500">
//                       <strong>Title:</strong> {formContent.title}
//                     </p>
//                     <p className="text-gray-500">
//                       <strong>Publication:</strong> {formContent.publication}
//                     </p>
//                     <p className="text-gray-500">
//                       <strong>Type:</strong> {formContent.articleType}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//             {/* Toggle Form Button */}
//             <button
//               className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? "Collapse Form" : "Add Press Info"}
//             </button>

//             {/* Toggle Form */}
//             {isOpen && (
//               <form className="w-full pr-12" onSubmit={handleSubmit}>
//                 <div className="flex text-2xl font-semibold mb-4">Judging</div>

//                 <div className="-mx-3 flex flex-wrap">
//                   <div className="w-full px-3">
//                     <div className="mb-5">
//                       <label className="mb-3 block text-base text-[#07074D]">
//                         How many times have you been a judge or reviewer?
//                       </label>
//                       <input
//                         type="number"
//                         name="title"
//                         placeholder="e.g., 'Innovative Research by John Doe Featured in ABC News'"
//                         className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                         onChange={handleInputChange}
//                         value={currentForm.title}
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-3">
//                     <div className="mb-5">
//                       <label className="mb-3 block text-base text-[#07074D]">
//                         What is the <strong>Name</strong> of the publication or
//                         channel where you were mentioned?
//                       </label>
//                       <input
//                         type="text"
//                         name="publication"
//                         placeholder="e.g., 'The New York Times'"
//                         className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                         onChange={handleInputChange}
//                         value={currentForm.publication}
//                       />

//                       <label className="mb-3 block text-base text-[#07074D]">
//                         Where did you juged at?
//                       </label>
//                       <div className="absolute bg-white border rounded mt-1 w-full shadow-lg z-10">
//           <label>
//             <input
//               type="checkbox"
//               name="awards"
//               checked={selectedOptions.awards}
//               onChange={handleCheckboxChange}
//             />
//             Judged at awards
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="journals"
//               checked={selectedOptions.journals}
//               onChange={handleCheckboxChange}
//             />
//             Judged at journals
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="hackathons"
//               checked={selectedOptions.hackathons}
//               onChange={handleCheckboxChange}
//             />
//             Judged at hackathons
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="conferences"
//               checked={selectedOptions.conferences}
//               onChange={handleCheckboxChange}
//             />
//             Judged at conferences
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="workshops"
//               checked={selectedOptions.workshops}
//               onChange={handleCheckboxChange}
//             />
//             Judged at workshops
//           </label>
//           {/* Add more checkboxes as needed */}
//         </div>

//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
//                   type="submit"
//                 >
//                   Add Judging Info
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center w-1/2 h-[38rem]">
//         <img src={Resume} className="rounded-xl shadow-md" />
//       </div>
//     </div>
//   );
// };

// export default JudgingForm;

// demo2
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFormField, addJudgingRecord } from "../redux/judgingSlice";
// import Resume from "../assets/resume.jpg";

// const JudgingForm = () => {
//   const dispatch = useDispatch();
//   const { currentForm, judgingRecords } = useSelector((state) => state.judging);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     dispatch(
//       setFormField({ name, value: type === "checkbox" ? checked : value })
//     );
//   };

//   const handleCheckboxChange = (e) => {
//     const { value } = e.target;
//     dispatch(setFormField({ name: "judgedCategories", value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addJudgingRecord());
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex w-full pt-4">
//       <div className="flex justify-center w-1/2 h-full">
//         {/* Form component */}
//         <div className="flex flex-col justify-between w-full pl-12 bg-white">
//           {/* Scrollable form content */}
//           <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent flex flex-col items-center">
//             {/* Heading */}
//             {!isOpen ? (
//               <div className="block text-xl font-semibold mb-4  flex-row">
//                 Have you been invited to or <strong> judge </strong>or
//                 <strong> review others' work</strong> (e.g., competitions, peer
//                 reviews)?
//               </div>
//             ) : (
//               ""
//             )}

//             {/* Render previous forms */}
//             {judgingRecords.length > 0 && (
//               <div className="mb-4">
//                 {judgingRecords.map((formContent, index) => (
//                   <div
//                     key={index}
//                     className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium"
//                   >
//                     <strong>Judging Info{index + 1}:</strong>
//                     <p className="text-gray-500">
//                       <strong>Title:</strong> {formContent.title}
//                     </p>
//                     <p className="text-gray-500">
//                       <strong>Publication:</strong> {formContent.publication}
//                     </p>
//                     <p className="text-gray-500">
//                       <strong>Type:</strong> {formContent.articleType}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//             {/* Toggle Form Button */}
//             <button
//               className="w-fit mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? "Collapse Form" : "Add Judging Info"}
//             </button>

//             {/* Toggle Form */}
//             {isOpen && (
//               <form className="w-full pr-12" onSubmit={handleSubmit}>
//                 <div className="flex text-2xl font-semibold mb-4">Judging</div>

//                 <div className="-mx-3 flex flex-wrap">
//                   <div className="w-full px-3">
//                     <div className="mb-5">
//                       <label className="mb-3 block text-base text-[#07074D]">
//                         How many times have you been a judge or reviewer?
//                       </label>
//                       <input
//                         type="number"
//                         name="title"
//                         placeholder=""
//                         className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                         onChange={handleInputChange}
//                         value={currentForm.title}
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-3">
//                     <div className="mb-5">
//                       <label className="mb-3 block text-base text-[#07074D]">
//                         Where did you judge?
//                       </label>
//                       <div className=" bg-white border w-full rounded mt-1 shadow-lg ">
//                         {[
//                           "awards",
//                           "journals",
//                           "hackathons",
//                           "conferences",
//                           "workshops",
//                         ].map((category) => (
//                           <label key={category} className="block">
//                             <input
//                               type="checkbox"
//                               name={category}
//                               value={category}
//                               checked={currentForm.judgedCategories.includes(
//                                 category
//                               )}
//                               onChange={handleCheckboxChange}
//                             />
//                             Judged at {category}
//                           </label>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
//                   type="submit"
//                 >
//                   Add Judging Info
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center w-1/2 h-[38rem]">
//         <img src={Resume} className="rounded-xl shadow-md" />
//       </div>
//     </div>
//   );
// };

// export default JudgingForm;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormField, addJudgingRecord } from "../../redux/judgingSlice";
import Resume from "../../assets/resume.jpg";

const JudgingForm = () => {
  const dispatch = useDispatch();
  const { currentForm, judgingRecords } = useSelector((state) => state.judging);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(
      setFormField({ name, value: type === "checkbox" ? checked : value })
    );
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    dispatch(setFormField({ name: "judgedCategories", value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJudgingRecord());
  };

  const [isJudging, setIsJudging] = useState(null); // New state to track the radio button value

  return (
    <div className="flex w-full pt-4">
      <div className="flex justify-center w-1/2 h-full">
        {/* Form component */}
        <div className="flex flex-col justify-between w-full pl-12 bg-white">
          {/* Scrollable form content */}
          <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent flex flex-col items-center">
            {/* Heading */}
            <div className="block text-xl font-semibold mb-4 flex-row">
              Have you been invited to or <strong>judge</strong> or{" "}
              <strong>review others' work</strong> (e.g., competitions, peer
              reviews)?
            </div>

            {/* Radio buttons */}
            <div className="mb-4">
              <label className="mr-4">
                <input
                  type="radio"
                  name="judgingOption"
                  value="yes"
                  onChange={() => setIsJudging(true)} // Set to true when "Yes" is selected
                  checked={isJudging === true}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="judgingOption"
                  value="no"
                  onChange={() => setIsJudging(false)} // Set to false when "No" is selected
                  checked={isJudging === false}
                />
                No
              </label>
            </div>

            {/* Render previous forms */}
            {judgingRecords.length > 0 && (
              <div className="mb-4">
                {judgingRecords.map((formContent, index) => (
                  <div
                    key={index}
                    className="w-[34rem] mb-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium"
                  >
                    <strong>Judging Info {index + 1}:</strong>
                    <p className="text-gray-500">
                      <strong>Title:</strong> {formContent.title}
                    </p>
                    <p className="text-gray-500">
                      <strong>Publication:</strong> {formContent.publication}
                    </p>
                    <p className="text-gray-500">
                      <strong>Type:</strong> {formContent.articleType}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Show the form only if "Yes" is selected */}
            {isJudging && (
              <form className="w-full pr-12" onSubmit={handleSubmit}>
                <div className="flex text-2xl font-semibold mb-4">Judging</div>

                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-[#07074D]">
                        How many times have you been a judge or reviewer?
                      </label>
                      <input
                        type="number"
                        name="title"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={handleInputChange}
                        value={currentForm.title}
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-[#07074D]">
                        Where did you judge?
                      </label>
                      <div className="bg-white border w-full rounded mt-1 shadow-lg ">
                        {[
                          "awards",
                          "journals",
                          "hackathons",
                          "conferences",
                          "workshops",
                          "external product review",
                          "promotion committee",
                          "workplacee peer reviewing",
                          "interview",
                          "business committee",
                          "dissertion committee",
                          "author peer review",
                        ].map((category) => (
                          <label key={category} className="block">
                            <input
                              type="checkbox"
                              name={category}
                              value={category}
                              checked={currentForm.judgedCategories.includes(
                                category
                              )}
                              onChange={handleCheckboxChange}
                            />
                            Judged at {category}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                  type="submit"
                >
                  Add Judging Info
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-1/2 h-[38rem]">
        <img src={Resume} className="rounded-xl shadow-md" />
      </div>
    </div>
  );
};

export default JudgingForm;
