// import { setPersonalInfo } from "../redux/personalInfoSlice";
// import { setVisa } from "../redux/visaSlice";
// import { useParams, useNavigate } from "react-router-dom";
// import { store } from "../redux/store";
// import axios from "axios";
// import { setExperience } from "../redux/experienceSlice";
// import { setEducation } from "../redux/educationSlice";
// import { setAwards } from "../redux/awardsSlice";
// import { setScholarship } from "../redux/scholarshipSlice";
// import { setAuthorship } from "../redux/authorshipSlice";
// import { setPressRelease } from "../redux/pressReleaseSlice";
// import { setJudging } from "../redux/judgingSlice";
// import { setExhibition } from "../redux/exhibitionSlice"; // Adjust based on where your actions are located
// import { useDispatch } from "react-redux";

// export const getData = async (id, dispatch) => {
//   try {
//     const token = window.localStorage.getItem("token");
//     console.log(id);
//     if (id !== "undefined") {
//       const response = await axios.get(
//         `http://localhost:5000/api/v1/profile/${id}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       const responseData = response.data;
//       // console.log(responseData, 321);
//       // console.log(responseData.personal_info, "paperData");

//       // Update Redux store
//       dispatch(setPersonalInfo(responseData.personal_info));
//       dispatch(setVisa(responseData.visa));
//       dispatch(setExperience(responseData.experience));
//       dispatch(setEducation(responseData.education));
//       dispatch(setAwards(responseData.awards));
//       dispatch(setScholarship(responseData.scholarships));
//       dispatch(setAuthorship(responseData.authorships));
//       dispatch(setPressRelease(response.data.pressRelease));
//       dispatch(setJudging(response.data.judging));
//       dispatch(setExhibition(response.data.exhibitions));
//       // console.log(store.getState(), "updated data");
//     }
//   } catch (error) {
//     console.error("There was an error fetching the data!", error);
//   }
// };

// demo
import axios from "axios";
import { setPersonalInfo } from "../redux/personalInfoSlice";
import { setVisa } from "../redux/visaSlice";
import { setExperience } from "../redux/experienceSlice";
import { setEducation } from "../redux/educationSlice";
import { setAwards } from "../redux/awardsSlice";
import { setScholarship } from "../redux/scholarshipSlice";
import { setAuthorship } from "../redux/authorshipSlice";
import { setPressRelease } from "../redux/pressReleaseSlice";
import { setJudging } from "../redux/judgingSlice";
import { setExhibition } from "../redux/exhibitionSlice";
import { setMerit } from "../redux/finalMeritSlice";
import { setMemberships } from "../redux/membershipSlice";

export const getData = async (id, dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    if (id !== "undefined") {
      const response = await axios.get(
        `http://localhost:5000/api/v1/profile/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const responseData = response.data;
      console.log(responseData, "Fetched data");

      // Dispatch actions to update Redux store
      dispatch(setPersonalInfo(responseData.personal_info));
      dispatch(setVisa(responseData.visa));
      dispatch(setExperience(responseData.experience));
      dispatch(setEducation(responseData.education));
      dispatch(setAwards(responseData.awards));
      dispatch(setScholarship(responseData.scholarships));
      dispatch(setAuthorship(responseData.authorships));
      dispatch(setPressRelease(responseData.pressRelease));
      dispatch(setJudging(responseData.judging));
      dispatch(setExhibition(responseData.exhibitions));
      dispatch(setMerit(responseData.merits));
      dispatch(setMemberships(responseData.membership));
    }
  } catch (error) {
    console.error("There was an error fetching the data!", error);
  }
};
