import React from "react";
import "./Dashboard.css";
import { useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Sidebar2 from "./Sidebar2";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getData } from "../utils/Data";
import { useDispatch } from "react-redux";
import { setId } from "../redux/applicationSlice";
import { store } from "../redux/store";
const Dashboard2 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("iddddd", id);
  const dispatch = useDispatch();
  dispatch(setId(id));
  useEffect(() => {
   getData(id, dispatch);
   console.log("gggggggggggggggg",store.getState());
  }, [id, dispatch]);
  const authorshipData = useSelector((state) => state.authorship);
console.log("aaaaaaaaaa",authorshipData)
const firstExperienceId = useSelector(
  (state) => state.awards.awards[0]?.experience
);
  const experienceClick = () => {
    // Pass only the roleName, not the event object
    navigate("/role/:id/:c_id/:r_id");
  };

  const authorshipClick = () => {
    // Pass only the roleName, not the event object
    // navigate(`/authorship/${id}/:au_id`);
    navigate(`/authorship/${id}/${store.getState().authorship.authorshipData[0]._id}`);

  };
  const awardsClick = () => {
    // Pass only the roleName, not the event object
    navigate(`/awards/${id}`);
  };

  const judgingClick = () => {
    // Pass only the roleName, not the event object
    navigate("/judging/:id/:j_id");
  };

  const pressReleaseClick = () => {
    // Pass only the roleName, not the event object
    navigate("/pr/:id/:pr_id");
  };

  const exibitionClick = () => {
    // Pass only the roleName, not the event object
    navigate("/exibition/:id/:e_id");
  };

  const meritsClick = () => {
    // Pass only the roleName, not the event object
    navigate("/final/:id/:f_id");
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/6">
          <Sidebar2 />
        </div>
        <div className="flex flex-col justify-cente items-center h-scree w-5/6 font-inter p-8">
          <div className="bg-[#e6f4ff] rounded-lg p-[2rem] w-[70vw]">
            <p className="text-2xl font-medium leading-normal">
              Complete your checklist
            </p>
            <p className="sub-items pb-4">
              Provide us the following information to complete your profile
            </p>
            <div className="main">
              <div className="items">
                <div className="flex">
                  <FaCircleCheck className="text-xl mr-[0.5rem] mt-1 text-green-500" />
                  <div>
                    <p className="font-medium text-medium">
                      Experience Details
                    </p>
                    <p className="sub-items">
                      Please provide a brief overview of your experience,
                      including the roles you've held and key projects you've
                      completed.
                    </p>
                  </div>
                </div>
                <button
                  className="btn bg-blue-500 hover:bg-blue-700"
                  onClick={experienceClick}
                >
                  Complete Now
                </button>
              </div>
              <div className="items">
                <div className="flex">
                  <FaCircleCheck className="text-xl mr-[0.5rem] mt-1 text-gray-400" />
                  <div>
                    <p className="font-medium text-medium">
                      Authorship Details
                    </p>
                    <p className="sub-items">
                      Please provide a brief overview of your authorship,
                      including published papers, books, and acquired patents.
                    </p>
                  </div>
                </div>
                <button
                  className="btn bg-blue-500 hover:bg-blue-700"
                  onClick={authorshipClick}
                >
                  Complete Now
                </button>
              </div>
              <div className="items">
                <div className="flex">
                  <FaCircleCheck className="text-xl mr-[0.5rem] mt-1 text-gray-400" />
                  <div>
                    <p className="font-medium text-medium">Awards Details</p>
                    <p className="sub-items">
                      Please provide a brief overview of your awards.
                    </p>
                  </div>
                </div>
                <button
                  className="btn bg-blue-500 hover:bg-blue-700"
                  onClick={awardsClick}
                >
                  Complete Now
                </button>
              </div>
              <div className="items">
                <div className="flex">
                  <FaCircleCheck className="text-xl mr-[0.5rem] mt-1 text-gray-400" />
                  <div>
                    <p className="font-medium text-medium">Judging Details</p>
                    <p className="sub-items">
                      Please provide details of any judging or review experience
                      you may have.
                    </p>
                  </div>
                </div>
                <button
                  className="btn bg-blue-500 hover:bg-blue-700"
                  onClick={judgingClick}
                >
                  Complete Now
                </button>
              </div>
              <div className="items">
                <div className="flex">
                  <FaCircleCheck className="text-xl mr-[0.5rem] mt-1 text-gray-400" />
                  <div>
                    <p className="font-medium text-medium">Press Release</p>
                    <p className="sub-items">
                      Please provide details of any press release experience,
                      including media coverage, interviews, or publications.
                    </p>
                  </div>
                </div>
                <button
                  className="btn bg-blue-500 hover:bg-blue-700"
                  onClick={pressReleaseClick}
                >
                  Complete Now
                </button>
              </div>
              <div className="items">
                <div className="flex">
                  <FaCircleCheck className="text-xl mr-[0.5rem] mt-1 text-gray-400" />
                  <div>
                    <p className="font-medium text-medium">Exibition Details</p>
                    <p className="sub-items">
                      Please provide details of any exhibition experience,
                      including the events, venues, and any notable works you
                      have showcased.
                    </p>
                  </div>
                </div>
                <button
                  className="btn bg-blue-500 hover:bg-blue-700"
                  onClick={exibitionClick}
                >
                  Complete Now
                </button>
              </div>
              <div className="items">
                <div className="flex">
                  <FaCircleCheck className="text-xl mr-[0.5rem] mt-1 text-gray-400" />
                  <div>
                    <p className="font-medium text-medium">Merits Details</p>
                    <p className="sub-items">
                      Please provide a brief overview of your experience,
                      including the roles you've held and key projects you've
                      completed.
                    </p>
                  </div>
                </div>
                <button
                  className="btn bg-blue-500 hover:bg-blue-700"
                  onClick={meritsClick}
                >
                  Complete Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard2;
