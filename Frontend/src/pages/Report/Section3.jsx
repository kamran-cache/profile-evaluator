// import React from "react";
// import Logo from "../../assets/logo.png";
// import Student from "../../assets/Student.png";
// import { FaStar } from "react-icons/fa";
// import Star from "../../assets/Star1.png";
// const Section3 = ({ data }) => {
//   console.log("education", data);
//   return (
//     <div className="main h-[1247px] bg-slate-50 w-full flex items-center justify-center flex-col space-y-7  font-metropolis  ">
//       <div className="navbar p-4 h-12 w-[95%] md:mb-6 bg-white border-b border-gray-400 flex flex-row items-center justify-between">
//         <div className="left font-normal text-2xl text-[#C2C2C2] ml-6">
//           Section2: Education Background
//         </div>
//         <div className="right mr-4">
//           <img src={Logo} alt="" className="h-8 w-24" />
//         </div>
//       </div>

//       <div className="maincontent h-[1247px]  relative flex flex-row ">
//         <div className="left h-full w-[484px] bg-primary flex flex-col">
//           <div className="header text-white text-xl  font-medium mt-4 ml-8">
//             Section2:
//           </div>
//           <p className="title text-3xl text-white  font-semibold ml-8">
//             Education{" "}
//           </p>
//           <p className="text-3xl text-white  font-semibold ml-8">Background</p>
//         </div>
//         <div className="right h-full  w-[470px]  ">
//           <div className="headerimage  h-[207px] w-[470px]  ">
//             <img src={Student} alt="" className="h-[207px] w-[470px]" />
//           </div>
//         </div>
//         <div className="centercomponent absolute bg-white left-[20%] top-[17.5%] h-[75%] w-[80%] overflow-y-auto overflow-x-hidden">
//           <div className="header mt-6 ml-[5rem] font-medium text-2xl ">
//             Degree/Certifications
//           </div>
//           <div className="edcontent flex flex-row  mt-6 ">
//             <div className="leftprogressbar ml-[2.5rem] ">
//               <div className="relative h-full bg-[#007EE8] w-2 border-2 rounded-lg">
//                 {data &&
//                   data.map((_, index) => (
//                     <div
//                       key={index}
//                       className="absolute circle bg-white border-4 border-[#007EE8]  h-6 w-6 rounded-full mt-2 "
//                       style={{
//                         top: `${(index / data.length) * 100}%`,
//                         transform: "translateY(-50%)",
//                         left: "-0.59rem", // Position the circles to the left of the progress bar
//                       }}
//                     ></div>
//                   ))}
//               </div>
//             </div>
//             <div className="centercontent  ml-8">
//               {data &&
//                 data.map((item, index) => (
//                   <div
//                     key={index}
//                     className="card flex flex-col py-3 px-2  mb-3 w-[15rem] bg-slate-100 "
//                   >
//                     <div className="title font-semibold ">{item.degree}</div>
//                     <div className="date">{item.completionDate}</div>
//                     <div className="date">{item.university}</div>
//                     <div className="date">{item.location}</div>
//                     <div className="date">{item.information}</div>
//                   </div>
//                 ))}
//             </div>
//             {/* <div className="right relative bg-black"> */}
//             <div className="rightcontent relative w-[350px] h-[500px] bg-[#D7D7D7] ml-16 mt-16 flex flex-col">
//               <div className="top bg-[#0B0550] w-full flex flex-row items-center">
//                 <FaStar className=" text-yellow-400 ml-2" />{" "}
//                 <p className="text-white ml-3 mt-1">Achievements</p>
//               </div>
//               <div className="star absolute -right-28 top-[60%]   overflow-x-hidden ">
//                 <img src={Star} alt="" className="w-full" />
//               </div>
//             </div>

//             {/* </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section3;

// demo2

import React from "react";
import Logo from "../../assets/logo.png";
import Student from "../../assets/Student.svg";
import { FaStar } from "react-icons/fa";
import Star from "../../assets/Star1.png";
const Section3 = ({ data }) => {
  console.log("education", data);
  return (
    <div className="main h-[1247px]  w-full flex items-center justify-center flex-col space-y-7  font-metropolis mt-[20vh] ">
      <div className="navbar w-[79vw] md:mb-4 bg-white flex flex-col ">
        <div className="text-2xl font-custom text-[#C2C2C2] leading-6 ">
          Section2: Education Background
        </div>
        <div className="border border-[#D7D7D7] mt-[1vh] w-[79vw]"></div>
      </div>
      

      <div className="maincontent h-[1247px] w-[78.9vw]  relative flex flex-row">
        <div className="left h-full w-[34.3vw] bg-primary flex flex-col">
          <div className="header text-white text-xl leading-5  font-medium mt-14 ml-16">
            Section2:
          </div>
          <p className="title text-[40px] leading-[40px] mt-[14px] text-white  font-semibold ml-16">
            Education{" "}
          </p>
          <p className="text-[40px] leading-[40px] text-white  font-semibold ml-16">Background</p>
        </div>
        <div className="right h-full w-[44.7vw]  ">
          <div className="headerimage  h-[307px] w-full  ">
            <img src={Student} alt="" className="h-[307px] w-full" />
          </div>
        </div>
        <div className="centercomponent absolute bg-white rounded-md left-[20%] top-[25%] h-[75%] w-[80%] overflow-y-auto overflow-x-hidden">
          <div className="header mt-6 ml-[5rem] font-medium text-2xl ">
            Degree/Certifications
          </div>
          <div className="edcontent flex flex-row  mt-6 ">
            <div className="leftprogressbar ml-[2.5rem] ">
              <div className="relative h-full bg-[#007EE8] w-2 border-2 rounded-lg">
                {data &&
                  data.map((_, index) => (
                    <div
                      key={index}
                      className="absolute circle bg-white border-4 border-[#007EE8]  h-6 w-6 rounded-full mt-2 "
                      style={{
                        top: `${(index / data.length) * 100}%`,
                        transform: "translateY(-50%)",
                        left: "-0.59rem", // Position the circles to the left of the progress bar
                      }}
                    ></div>
                  ))}
              </div>
            </div>
            <div className="centercontent  ml-8">
              {data &&
                data.map((item, index) => (
                  <div
                    key={index}
                    className="card flex flex-col py-3 px-2  mb-3 w-[15rem] bg-slate-100 "
                  >
                    <div className="title font-semibold ">{item.degree}</div>
                    <div className="date">{item.completionDate}</div>
                    <div className="date">{item.university}</div>
                    <div className="date">{item.location}</div>
                    <div className="date">{item.information}</div>
                  </div>
                ))}
            </div>
            {/* <div className="right relative bg-black"> */}
            <div className="rightcontent relative w-[350px] h-[500px] bg-[#D7D7D7] ml-32 mt-16 flex flex-col">
              <div className="top bg-[#0B0550] w-full flex flex-row items-center">
                <FaStar className=" text-yellow-400 ml-2" />{" "}
                <p className="text-white ml-3 mt-1">Achievements</p>
              </div>
              <div className="star absolute -right-28 top-[60%]   overflow-x-hidden ">
                <img src={Star} alt="" className="w-full" />
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
