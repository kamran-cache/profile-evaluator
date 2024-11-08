// import React, { useState } from "react";
// import Ministar from "../../assets/ministar.png";
// import Sticker from "../../assets/Sticker.png";
// import Trophy from "../../assets/Trophy.png";

// const Work = ({ data }) => {
//   console.log(data, "experience");
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = date.toLocaleString("default", { month: "long" }); // Get full month name
//     return ` ${year}`; // Format as "Month Year"
//   };
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   return (
//     <div className="main h-[120vh] bg-blue-400 flex flex-col font-metropolis">
//       <div className="navbar w-[90%] bg-white p-3 md:ml-10 mt-5">
//         <p className="text-[#8D8D8D] text-xl font-medium">Section 3</p>
//         <div className="flex flex-row gap-2">
//           <p className="title text-black font-semibold text-3xl">Work</p>
//           <p className="title text-[#007EE8] font-semibold text-3xl ">
//             Experience
//           </p>
//         </div>
//       </div>

//       <div className="body md:ml-10 mt-6 h-[100%] bg-green-300 flex flex-col space-y-4 overflow-y-auto">
//         {data &&
//           data.map((item, index) => (
//             <div className="rows flex flex-row items-center justify-between gap-3">
//               <div className="cardleft p-3 w-[20rem] h-[20rem] bg-yellow-300 rounded-lg">
//                 <p className="font-semibold text-xl">{item.company}</p>
//                 <p>{item.location}</p>
//                 <div className="roles space-y-2 overflow-y-auto">
//                   Roles:
//                   {item.roles.map((role, roleIndex) => (
//                     <div key={roleIndex} className="ml-3">
//                       <div
//                         className="bg-slate-50  px-2 py-3 flex flex-row justify-between rounded-lg "
//                         onClick={() => {
//                           if (role.projects && role.projects.length > 0) {
//                             setCurrentRoleIndex(roleIndex);
//                           } else {
//                             setCurrentRoleIndex(-1);
//                           }
//                         }}
//                       >
//                         <p> {role.jobTitle} </p>
//                         <p>
//                           {" "}
//                           {formatDate(role.startDate)} -{" "}
//                           {formatDate(role.endDate)}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="cardright w-2/3 h-[20rem] bg-blue-300 rounded-lg mr-2 flex flex-col">
//                 <div className="header w-full bg-[#F4F4F4] p-3 rounded-t-lg">
//                   {" "}
//                   <span className="text-primary font-semibold text-lg">
//                     Accomplishments
//                   </span>{" "}
//                   (Awards, Recognitions, Notable Projects)
//                 </div>
//                 <div className="awards flex flex-row items-center  p-3 gap-1 bg-pink-400">
//                   <div className="left flex flex-row items-center">
//                     <img src={Trophy} alt="" className="h-[16px] w-[18px] " />
//                     <p className="font-medium text-[16px] mt-1 ml-1 text-[#646464]">
//                       Awards:
//                     </p>
//                   </div>
//                   <div className="right flex flex-row items-center gap-2 ml-1">
//                     <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
//                       Award1
//                     </div>
//                     <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
//                       Award1
//                     </div>
//                     <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
//                       Award1
//                     </div>
//                     <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
//                       Award1
//                     </div>
//                   </div>
//                 </div>

//                 {/* --------------projects----------------- */}

//                 <div className="projects awards flex flex-col items-center  p-3 gap-1 bg-violet-400">
//                   <div className="header  w-full flex flex-row items-center">
//                     <img src={Ministar} alt="" className="h-[19px] w-[18px]" />
//                     <p className="font-medium  text-[16px] mt-1 ml-1 text-[#646464]">
//                       Notable Projects:
//                     </p>
//                   </div>
//                   <div className="projects w-full flex flex-row gap-3 justify-start">
//                     {currentRoleIndex === -1 && (
//                       <div className="p-2 bg-primary">
//                         You have not added project for this role
//                       </div>
//                     )}
//                     {currentRoleIndex !== -1 &&
//                       item.roles[currentRoleIndex] &&
//                       item.roles[currentRoleIndex].projects &&
//                       item.roles[currentRoleIndex].projects.map(
//                         (project, index) => (
//                           <div key={index} className="p-2 bg-primary">
//                             {project.projectTitle}
//                           </div>
//                         )
//                       )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Work;

// /demo
import React, { useState } from "react";
import Ministar from "../../assets/ministar.png";
import Trophy from "../../assets/Trophy.png";
import Sticker from "../../assets/Sticker.png";
import { BsArrowRightCircle } from "react-icons/bs";
import "./report.css";
import ReportModal from "./ReportModal";
const Work = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState("");
  const [company, setCompany] = useState("");
  const [project, setProject] = useState("");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" }); // Get full month name
    return ` ${year}`; // Format as "Month Year"
  };

  return (
    <>
      {/* {modal } */}
      {isModalOpen && (
        <>
          <div className="relative">
            <ReportModal
              data={project}
              company={company}
              index={index}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </>
      )}
      <div className="main h-[120vh] mt-6 flex flex-col items-center justify-center font-metropolis">
        <div className="w-[80%]  flex items-start justify-start">
          <div className="navbar   p-3  mt-5">
            <p className="text-[#8D8D8D] text-xl font-medium">Section 3</p>
            <div className="flex flex-row gap-2">
              <p className="title text-black font-semibold text-3xl">Work</p>
              <p className="title text-[#007EE8] font-semibold text-3xl ">
                Experience
              </p>
            </div>
          </div>
        </div>

        <div className="body  md:ml-[4.8rem] mt-6 h-[100%] w-[85%]  flex flex-col space-y-4 overflow-y-auto">
          {data &&
            data.map((companyData) => {
              // Flatten all projects across all roles for the company
              const allProjects = companyData.roles.flatMap(
                (role) => role.projects || []
              );
              console.log(allProjects, "projects");

              return (
                <div
                  key={companyData._id}
                  className="rows  flex flex-row items-center justify-between  gap-3"
                >
                  <div className="cardleft p-3 w-[20rem] h-[20rem] bg-[#E8FEFD] rounded-lg">
                    <p className="font-semibold text-xl">
                      {companyData.company}
                    </p>
                    <p>{companyData.location}</p>
                    <div className="roles space-y-2 overflow-y-auto">
                      Roles:
                      {companyData.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="ml-3">
                          <div
                            className="bg-slate-50  px-2 py-3 flex flex-row justify-between rounded-lg "
                            onClick={() => {
                              if (role.projects && role.projects.length > 0) {
                                setCurrentRoleIndex(roleIndex);
                              } else {
                                setCurrentRoleIndex(-1);
                              }
                            }}
                          >
                            <p> {role.jobTitle} </p>
                            <p>
                              {" "}
                              {formatDate(role.startDate)} -{" "}
                              {formatDate(role.endDate)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="cardright  w-2/3 h-[20rem]  rounded-lg mr-4 flex flex-col shadow-neutral-300 shadow-lg">
                    <div className="header h-[15%] w-full bg-[#F4F4F4] p-3 rounded-t-lg">
                      <span className="text-primary font-semibold text-lg">
                        Accomplishments
                      </span>{" "}
                      (Awards, Recognitions, Notable Projects)
                    </div>

                    {/* -----------------------Awards------------------------------- */}
                    <div className="awards h-[25%] flex flex-row items-center  p-3 gap-1 ">
                      <div className="left flex flex-row items-center">
                        <img
                          src={Trophy}
                          alt=""
                          className="h-[16px] w-[18px] "
                        />
                        <p className="font-medium text-[16px] mt-1 ml-1 text-[#646464]">
                          Awards:
                        </p>
                      </div>
                      <div className="right flex flex-row items-center gap-2 ml-1">
                        <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
                          Award1
                        </div>
                        <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
                          Award1
                        </div>{" "}
                        <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
                          Award1
                        </div>
                        <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
                          Award1
                        </div>
                      </div>
                    </div>

                    {/* -------------projects-------------- */}
                    <div className="projects h-[35%] awards flex flex-col items-center p-3 gap-1 bg-[#F4F4F4]">
                      <div className="header w-full flex flex-row items-center">
                        <img
                          src={Ministar}
                          alt=""
                          className="h-[19px] w-[18px]"
                        />
                        <p className="font-medium text-[16px] mt-1 ml-1 text-[#646464]">
                          Notable Projects:
                        </p>
                      </div>
                      <div className="projects mt-2 w-full flex flex-row gap-3 justify-start overflow-x-auto">
                        {allProjects.length > 0 ? (
                          allProjects.map((project, index) => (
                            <div
                              key={index}
                              className="hover-effect py-2 px-3 bg-primary rounded-lg gap-2 flex flex-row items-center justify-center"
                              onClick={() => {
                                setIsModalOpen(!isModalOpen);
                                setCompany(companyData);
                                setProject(project);
                                setIndex(index);
                              }}
                            >
                              <BsArrowRightCircle className="text-white" />
                              <p className="font-normal text-xs text-white">
                                {/* {project.projectTitle} */}
                                Project {index + 1}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div className="p-2 bg-primary rounded-lg">
                            No projects available
                          </div>
                        )}
                      </div>
                    </div>

                    {/* -------------recognition-------------- */}
                    <div className="recognition h-[25%] flex flex-row items-center  p-3 gap-1 ">
                      <div className="left flex flex-row items-center">
                        <img
                          src={Sticker}
                          alt=""
                          className="h-[16px] w-[18px] "
                        />
                        <p className="font-medium text-[16px] mt-1 ml-1 text-[#646464]">
                          Recognition:
                        </p>
                      </div>
                      <div className="right flex flex-row items-center gap-2 ml-1">
                        <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
                          Award1
                        </div>
                        <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
                          Award1
                        </div>{" "}
                        <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
                          Award1
                        </div>
                        <div className="aw1 bg-slate-200 px-3 py-1 rounded-lg">
                          Award1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Work;
