// import React from "react";
// import { useState, useRef } from "react";
// import Recognition from "../../assets/Recognition.webp";
// import NavigationBtn from "../NavigationBtn";

// const Memberships = () => {
//   const [merits, setMerits] = useState(false);
//   const [number, setNumber] = useState(0);
//   const [membership, setMembership] = useState("");
//   return (
//     <>
//       <div className="flex w-full pt-4">
//         <div className="flex justify-center w-1/2 h-full">
//           {/* Form component */}
//           <div className="flex flex-col justify-between w-full pl-12 bg-white">
//             {/* Scrollable form content */}
//             <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent">
//               <form className="w-full pr-12">
//                 <div className="flex text-2xl font-semibold mb-4">
//                   Memberships
//                 </div>
//                 <div className="-mx-3 flex flex-wrap">
//                   <div className="mb-5 w-full px-3">
//                     <label className="mb-3 block text-base font-medium text-[#07074D]">
//                       Are you a member of any professional organizations or
//                       societies?
//                     </label>
//                     <div className="flex items-center mt-2 space-x-6">
//                       <div className="flex items-center">
//                         <input
//                           type="radio"
//                           name="merit"
//                           value="yes"
//                           id="radioButton1"
//                           className="h-5 w-5"
//                           onChange={() => {
//                             setMerits(true);
//                           }}
//                         />
//                         <label
//                           htmlFor="radioButton1"
//                           className="pl-1 text-base font-medium text-[#07074D]"
//                         >
//                           Yes
//                         </label>
//                       </div>
//                       <div className="flex items-center">
//                         <input
//                           type="radio"
//                           name="merit"
//                           value="no"
//                           id="radioButton2"
//                           className="h-5 w-5"
//                           onChange={() => {
//                             setMerits(false);
//                           }}
//                         />
//                         <label
//                           htmlFor="radioButton2"
//                           className="pl-1 text-base font-medium text-[#07074D]"
//                         >
//                           No
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {merits && (
//                   <>
//                     <div className="-mx-3 flex flex-wrap">
//                       <div className="mb-5 w-full px-3">
//                         <label className="mb-3 block text-base font-medium text-[#07074D]">
//                           How many memberships do you hold?
//                         </label>
//                         <div className="flex items-center mt-2 space-x-6">
//                           <div className="flex items-center">
//                             <input
//                               type="number"
//                               name="publicFigure"
//                               value={number}
//                               id="radioButton1"
//                               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                               placeholder="eg. 4"
//                               onChange={(e) => setNumber(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="-mx-3 flex flex-wrap">
//                       <div className="mb-5 w-full px-3">
//                         <label className="mb-3 block text-base font-medium text-[#07074D]">
//                           Name of memberships you hold?
//                         </label>
//                         <div className="flex items-center mt-2 space-x-6">
//                           <div className="flex items-center">
//                             <input
//                               type="text"
//                               name="nationalInterest"
//                               value={membership}
//                               id="radioButton1"
//                               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                               placeholder="membership name"
//                               onChange={(e) => setMembership(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center mt-[4rem] w-1/2">
//           <div className="sticky top-4">
//             <img
//               src={Recognition}
//               className="rounded-xl shadow-md w-[40rem] h-[27rem]"
//             />
//           </div>
//         </div>
//       </div>
//       <NavigationBtn />
//     </>
//   );
// };

// export default Memberships;

// demo2
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMembershipCount,
  setMembershipName,
} from "../../redux/membershipSlice"; // Import actions
import Recognition from "../../assets/Recognition.webp";
import NavigationBtn from "../NavigationBtn";
import { useParams } from "react-router-dom";

const Memberships = () => {
  const [merits, setMerits] = useState(false);
  const { id } = useParams();
  const number = useSelector((state) => state.membership.forms.length); // Get count from Redux
  const memberships = useSelector((state) => state.membership.forms); // Get membership list
  const membershipData = useSelector((state) => state.membership);
  console.log(membershipData, "datameme");
  const dispatch = useDispatch();

  const handleNumberChange = (e) => {
    let value = Math.min(20, Math.max(0, Number(e.target.value))); // Ensure value is between 0 and 20
    dispatch(setMembershipCount(value));
  };

  const handleMembershipChange = (index, value) => {
    dispatch(setMembershipName({ index, name: value }));
  };

  return (
    <>
      <div className="flex w-full pt-4">
        <div className="flex justify-center w-1/2 h-full">
          <div className="flex flex-col justify-between w-full pl-12 bg-white">
            <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent">
              <form className="w-full pr-12">
                <div className="flex text-2xl font-semibold mb-4">
                  Memberships
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="mb-5 w-full px-3">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Are you a member of any professional organizations or
                      societies?
                    </label>
                    <div className="flex items-center mt-2 space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="merit"
                          value="yes"
                          id="radioButton1"
                          className="h-5 w-5"
                          onChange={() => setMerits(true)}
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="merit"
                          value="no"
                          id="radioButton2"
                          className="h-5 w-5"
                          onChange={() => setMerits(false)}
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-1 text-base font-medium text-[#07074D]"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {merits && (
                  <>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="mb-5 w-full px-3">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          How many memberships do you hold? (Max 20)
                        </label>
                        <div className="flex items-center mt-2 space-x-6">
                          <input
                            type="number"
                            value={number}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="eg. 4"
                            onChange={handleNumberChange}
                            min={0}
                            max={20}
                          />
                        </div>
                      </div>
                    </div>

                    {memberships.map((membership, index) => (
                      <div className="-mx-3 flex flex-wrap" key={index}>
                        <div className="mb-5 w-full px-3">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Membership {index + 1} name:
                          </label>
                          <input
                            type="text"
                            value={membership.name}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Enter membership name"
                            onChange={(e) =>
                              handleMembershipChange(index, e.target.value)
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[4rem] w-1/2">
          <div className="sticky top-4">
            <img
              src={Recognition}
              className="rounded-xl shadow-md w-[40rem] h-[27rem]"
            />
          </div>
        </div>
      </div>
      <NavigationBtn
        data={membershipData.isEdited ? membershipData : ""}
        api={`http://localhost:5000/api/v1/add-data/membership/${id}`}
        section={"membership"}
      />
    </>
  );
};

export default Memberships;
