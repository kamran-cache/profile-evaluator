import React, { useEffect } from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Sidebar from "../Tools/Sidebar";
import { store } from "../../redux/store";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/profileData";
import { getData } from "../../utils/Data";
import { FaAngleDown } from "react-icons/fa6";
import { setId } from "../../redux/applicationSlice";
import { FaPlus } from "react-icons/fa6";

const Dashboard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(setId(id));
  const data = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    getData(id, dispatch);
    console.log(store.getState(), "data", "user");
  }, [id, dispatch]);

  useEffect(() => {
    console.log(data, "data", "user");
  }, [data]);
  const [toggleRoles, setToggleRoles] = useState([]);

  const toggleRole = (index) => {
    setToggleRoles((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const roleClick = (c_id, role_id) => {
    navigate(`/role/${id}/${c_id}/${role_id}`);
  };
  const handleAwardsClick = (a_id) => {
    navigate(``);
  };
  const handleJudgingClick = (j_id) => {
    navigate(`/judging/${id}/${j_id}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`; // Format as YYYY-MM-DD
  };

  console.log(store.getState(), "data");
  return (
    <>
      <Sidebar />
      <div className="main w-full h-screen  flex flex-col items-center justify-center font-inter">
        <div className="title mt-3  p-2 border-b border-gray-300 w-[70%] -ml-[17rem]  text-xl font-bold flex flex-row justify-start">
          {data.personalInfo.personalInfo.fName}{" "}
          {data.personalInfo.personalInfo.lName}{" "}
          <FaAngleDown className="mt-[4px] -rotate-90" />
          <p>Profile Summary</p>
        </div>
        <div className="container ml-12 w-[93%] h-[94%] ">
          <div className="sections h-full p-4 flex flex-row space-x-3 overflow-x-auto overflow-y-auto">
            <div className="section1 bg-green-200/50 h-full w-full p-2 rounded-lg flex flex-col opacity-90 ">
              <div className="heading w-full flex flex-row justify-between p-3 bg-green-200 rounded-lg">
                Critical Role ({data.experience.experiences.length})
                <p>
                  <FaPlus className="mt-1" />
                </p>
              </div>
              {/* State Todo */}
              {/* {data.experience && data.experience.status === "todo" && (
                <> */}
              {/* <div className="state h-full w-full p-2 bg-green-200/50 rounded-lg mt-3"> */}
              {/* <div className="text-center p-1 w-1/4 rounded-lg bg-gray-500/20">
                      Todo
                    </div> */}

              {data.experience &&
                data.experience.status === "todo" &&
                data.experience.experiences.map((content, index) => (
                  <>
                    <div
                      key={content._id}
                      className="cards p-2  w-[20rem] bg-white rounded-lg my-2 flex flex-col"
                    >
                      <p className="font-bold">{content.company}</p>
                      <p>{content.location}</p>
                      <div>
                        <div
                          className=" rounded-lg my-3 flex flex-row cursor-pointer w-20 p-2 bg-green-200/50"
                          onClick={(e) => toggleRole(index)}
                        >
                          <FaAngleDown
                            className={`${
                              toggleRoles[index] ? "mt-1" : "-rotate-90 mt-1"
                            } transition-transform duration-300 `}
                          />
                          Roles:
                        </div>
                        {toggleRoles[index] &&
                          content.roles.map((role, index) => (
                            <div
                              key={role._id}
                              className="p-2 m-2 rounded-lg bg-green-200/50 flex flex-row justify-between "
                              onClick={() => roleClick(content._id, role._id)}
                            >
                              <div>{role.jobTitle}</div>
                              <div>{role.status}</div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                ))}
              {/* </div> */}
              {/* </>
              )} */}
            </div>

            <div className="section1 h-full w-full p-2 bg-indigo-200/50 rounded-lg flex flex-col opacity-90">
              <div className="heading w-full p-3 bg-indigo-200 rounded-lg flex flex-row justify-between">
                Visa Status ({data.visa.forms.length})
                <p>
                  <FaPlus className="mt-1" />
                </p>
              </div>
              {data.visa &&
                data.visa.forms.map((content, index) => (
                  <Link to={`/`}>
                    <div
                      key={content._id}
                      className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col"
                    >
                      <p className="font-bold"> Visa: {content.visaType}</p>
                      <p>
                        Date: {formatDate(content.startDate)} to{" "}
                        {formatDate(content.endDate)}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="section1 h-full w-full p-2 bg-pink-100/50 rounded-lg flex flex-col opacity-90">
              <div className="heading w-full p-3 bg-pink-100 rounded-lg flex flex-row justify-between">
                Education ({data.education.educations.length})
                <p>
                  <FaPlus className="mt-1" />
                </p>
              </div>
              {data.education &&
                data.education.educations.map((content, index) => (
                  <Link to={`/`}>
                    <div
                      key={content._id}
                      className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col"
                    >
                      <p className="font-bold">
                        {content.degree.toUpperCase()}
                      </p>
                      <p>{content.university}</p>
                      <p className="text-sm">{content.location}</p>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="section1 h-full w-full p-2 bg-green-100/50 rounded-lg flex flex-col opacity-90">
              <div className="heading w-full p-3 bg-green-100 rounded-lg flex flex-row justify-between">
                Awards ({data.awards.awards.length})
                <p>
                  <FaPlus className="mt-1" />
                </p>
              </div>

              {data.awards &&
                data.awards.awards.map((content, index) => (
                  <div
                    key={content._id}
                    className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col cursor-pointer"
                    onClick={""}
                  >
                    <p className="font-bold">{content.name}</p>
                    <p>Date: {formatDate(content.date)}</p>
                  </div>
                ))}
            </div>
            <div className="section1 h-full w-full p-2 bg-blue-100/50 rounded-lg flex flex-col opacity-90">
              <div className="heading w-full p-3 bg-blue-100  rounded-lg flex flex-row justify-between">
                Judging ({data.judging.judgingRecords.length} )
                <p>
                  <FaPlus className="mt-1" />
                </p>
              </div>
              {data.judging &&
                data.judging.judgingRecords.map((content, index) => (
                  <div
                    key={content._id}
                    className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col cursor-pointer"
                    onClick={() => handleJudgingClick(content._id)}
                  >
                    <p className="font-bold">Judged at {content.category}</p>
                    <p>{content.count} times</p>
                  </div>
                ))}
            </div>
            <div className="section1 p-2 bg-yellow-100/50  h-full w-full rounded-lg flex flex-col opacity-90">
              <div className="heading w-full p-3 bg-yellow-100 rounded-lg flex flex-row justify-between">
                Exhibition ({data.exhibition.forms.length})
                <p>
                  {" "}
                  <FaPlus className="mt-1" />
                </p>
              </div>
              {data.exhibition &&
                data.exhibition.forms.map((content, index) => (
                  <Link to={`/exibition/${id}/${content._id}`}>
                    <div
                      key={content._id}
                      className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col cursor-pointer"
                    >
                      <p className="font-bold">Role: {content.role}</p>
                      <p>{content.count} times</p>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="section1 p-2 bg-red-100/50 h-full  w-full  rounded-lg flex flex-col   opacity-90 ">
              <div className="heading w-full p-3 bg-red-100 rounded-lg flex flex-row justify-between">
                Authorship ({data.authorship.authorshipData.length})
                <p>
                  <FaPlus className="mt-1" />
                </p>
              </div>
              <div className="opacity-0 bg-white"></div>
              {data.authorship &&
                data.authorship.authorshipData.map((content, index) => (
                  <Link to={`/authorship/${id}/${content._id}`}>
                    <div
                      key={content._id}
                      className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col "
                    >
                      <p className="font-bold ">{content.authorshipType}</p>
                      <p>Title: {content.title}</p>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="section1 p-2 bg-gray-200/50 h-full w-full  rounded-lg flex flex-col   opacity-90 ">
              <div className="heading w-full p-3 bg-gray-200 rounded-lg flex flex-row justify-between">
                Scholarships ({data.scholarships.scholarships.length})
                <p>
                  <FaPlus className="mt-1" />
                </p>
              </div>
              <div className="opacity-0 bg-white"></div>
              {data.scholarships &&
                data.scholarships.scholarships.map((content, index) => (
                  <div
                    key={content._id}
                    className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col "
                  >
                    <p className="font-bold ">{content.name}</p>
                    <p>{content.organisation}</p>
                  </div>
                ))}
            </div>
            <div className="section1 p-2 bg-purple-200/50  w-full  rounded-lg flex flex-col   opacity-90 ">
              <div className="heading w-full p-3 bg-purple-200 rounded-lg flex flex-row justify-between">
                Press Release ({data.pressRelease.pressReleases.length})
                <p>
                  {" "}
                  <FaPlus className="mt-1" />
                </p>
              </div>
              <div className="opacity-0 bg-white"></div>
              {data.pressRelease &&
                data.pressRelease.pressReleases.map((content, index) => (
                  <Link to={`/pr/${id}/${content._id}`}>
                    <div
                      key={content._id}
                      className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col "
                    >
                      <p className="font-bold ">{content.title}</p>
                      <p>{content.articleType}</p>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="section1 p-2 bg-orange-200/50  w-full  rounded-lg flex flex-col   opacity-90 ">
              <div className="heading w-full p-3 bg-orange-200 rounded-lg flex flex-row justify-between">
                Final Merits ({data.finalMerits.forms.length})
                <p>
                  <FaPlus className="mt-1" />
                </p>
              </div>
              <div className="opacity-0 bg-white"></div>
              {data.finalMerits &&
                data.finalMerits.forms.map((content, index) => (
                  <Link to={`/final/${id}/${content._id}`}>
                    <div
                      key={content._id}
                      className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col "
                    >
                      <p className="font-bold ">
                        Public figure: {content.publicFigure ? "Yes" : "No"}
                      </p>
                      <p>
                        National Interest:
                        {content.nationalInterest ? "Yes" : "No"}
                      </p>
                      <div className="flex flex-row gap-2">
                        Contributions:{" "}
                        {content.contributions &&
                          content.contributions.map((item, index) => (
                            <div className="flex flex-row justify-between">
                              {" "}
                              {item},{" "}
                            </div>
                          ))}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="section1 p-2 bg-teal-200/50  w-full  rounded-lg flex flex-col   opacity-90 ">
              <div className="heading w-full p-3 bg-teal-200 rounded-lg flex flex-row justify-between">
                Memberships ({data.membership.forms.length})
                <p>
                  <FaPlus className="mt-1" />
                </p>
              </div>
              <div className="opacity-0 bg-white"></div>
              {data.membership &&
                data.membership.forms.map((content, index) => (
                  <Link to={`/pr/${id}/${content._id}`}>
                    <div
                      key={content._id}
                      className="cards p-2 h-[12rem] w-[20rem] bg-white rounded-lg my-2 flex flex-col "
                    >
                      <p className="font-bold ">{content.name}</p>
                      <p>{content.articleType}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
