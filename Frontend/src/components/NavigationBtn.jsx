import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../redux/applicationSlice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { setIsVisaEdited, setVisa } from "../redux/visaSlice";
import { setExperience, setIsExperienceEdited } from "../redux/experienceSlice";
import { store } from "../redux/store";
import { setEducation, setIsEducationEdited } from "../redux/educationSlice";
import { setAwards, setIsAwardEdited } from "../redux/awardsSlice";
import {
  setIsScholarshipEdited,
  setScholarship,
} from "../redux/scholarshipSlice";
import { setAuthorship, setIsAuthorshipEdited } from "../redux/authorshipSlice";
import { setIsPREdited, setPressRelease } from "../redux/pressReleaseSlice";
import { setIsJudgingEdited, setJudging } from "../redux/judgingSlice";
import { setExhibition, setIsExhibitonEdited } from "../redux/exhibitionSlice";
import { setIsMeritEdited, setMerit } from "../redux/finalMeritSlice";

const NavigationBtn = ({ data, api, section }) => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.application.step);
  const totalSteps = 12;
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(data, "!23");
  const handleVisaApiRequest = async () => {
    console.log("inside visa");
    console.log(data, api);
    try {
      let response;

      //---------this is a method to update all the content of the visa ---------------
      if (data.forms.length > 0 && data.isEdited) {
        console.log(store.getState(), "store");
        const newData = [];
        for (const form of data.forms) {
          if (!form._id) {
            newData.push(form);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...data,
            forms: newData,
          };

          response = await axios.post(api, { data: filteredData });

          if (response) {
            if (section === "visa") {
              dispatch(setVisa(response.data.visas));
              dispatch(setIsVisaEdited(false));
            } else if (section === "exhibition") {
              dispatch(setExhibition(response.data.exhibition));
              dispatch(setIsExhibitonEdited(false));
            } else if (section === "finalMerit") {
              dispatch(setMerit(response.data.merits));
              dispatch(setIsMeritEdited(false));
            }
          }
        } else {
          console.log("No new forms to update.");
        }
      } else if (data.isEdited && data.forms.length === 0) {
        // If forms array is empty and isEdited is true, perform POST request

        console.log("first api req", data, api);
        response = await axios.post(api, { data });
        if (response) {
          if (section === "visa") {
            dispatch(setVisa(response.data.visas));
            dispatch(setIsVisaEdited(false));
          } else if (section === "exhibition") {
            dispatch(setExhibition(response.data.exhibition));
            dispatch(setIsExhibitonEdited(false));
          } else if (section === "finalMerit") {
            dispatch(setMerit(response.data.merits));
            dispatch(setIsMeritEdited(false));
          }
        }
      }

      console.log("API Response:", response);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  const handleExperienceApiRequest = async () => {
    console.log("inside experience", data);
    try {
      let response;

      if (data.experiences.length > 1 && data.isEdited) {
        const newData = [];
        for (const form of data.experiences) {
          if (!form._id) {
            newData.push(form);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...data,
            experiences: newData,
          };

          response = await axios.post(api, { data: filteredData });

          if (response) {
            dispatch(setExperience(response.data.experiences));
            dispatch(setIsExperienceEdited(false));
          }
        } else {
          console.log("No new forms to update.");
        }
      } else if (data.isEdited && data.experiences.length === 0) {
        // If forms array is empty and isEdited is true, perform POST request
        console.log("api req", data, api);
        response = await axios.post(api, { data });
        if (response) {
          dispatch(setExperience(response.data.experiences));
          dispatch(setIsExperienceEdited(false));
        }
      }
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  const handleEducationApiRequest = async () => {
    console.log("inside education");
    try {
      let response;

      //---------this is a method to update all the content of the visa ---------------
      if (data.educations.length > 0 && data.isEdited) {
        console.log(store.getState(), "store");
        const newData = [];
        for (const education of data.educations) {
          if (!education._id) {
            newData.push(education);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...data,
            educations: newData,
          };

          response = await axios.post(api, { data: filteredData });

          if (response) {
            dispatch(setEducation(response.data.education));
            dispatch(setIsEducationEdited(false));
          }
        } else {
          console.log("No new forms to update.");
        }
      } else if (data.isEdited && data.forms.length === 0) {
        // If forms array is empty and isEdited is true, perform POST request

        console.log("first api req", data, api);
        response = await axios.post(api, { data });
        if (response) {
          dispatch(setEducation(response.data.education));
          dispatch(setIsEducationEdited(false));
        }
      }

      // console.log("API Response:", response);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  const handleAwardsApiRequest = async () => {
    console.log("inside awards");
    try {
      let response;

      //---------this is a method to update all the content of the visa ---------------
      if (data.awards.length > 0 && data.isEdited) {
        console.log(store.getState(), "store");
        const newData = [];
        for (const award of data.awards) {
          if (!award._id) {
            newData.push(award);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...data,
            awards: newData,
          };

          response = await axios.post(api, { data: filteredData });

          if (response) {
            dispatch(setAwards(response.data.awards));
            dispatch(setIsAwardEdited(false));
          }
        } else {
          console.log("No new forms to update.");
        }
      } else if (data.isEdited && data.awards.length === 0) {
        // If forms array is empty and isEdited is true, perform POST request

        console.log("first api req", data, api);
        response = await axios.post(api, { data });
        if (response) {
          dispatch(setAwards(response.data.education));
          dispatch(setIsAwardEdited(false));
        }
      }

      // console.log("API Response:", response);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  const handleScholarshipApiRequest = async () => {
    console.log("inside scholarship");
    try {
      let response;

      //---------this is a method to update all the content of the visa ---------------
      if (data.scholarships.length > 0 && data.isEdited) {
        console.log(store.getState(), "store");
        const newData = [];
        for (const scholarship of data.scholarships) {
          if (!scholarship._id) {
            newData.push(scholarship);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...data,
            scholarships: newData,
          };

          response = await axios.post(api, { data: filteredData });

          if (response) {
            dispatch(setScholarship(response.data.scholarships));
            dispatch(setIsScholarshipEdited(false));
          }
        } else {
          console.log("No new forms to update.");
        }
      } else if (data.isEdited && data.scholarships.length === 0) {
        // If forms array is empty and isEdited is true, perform POST request

        console.log("first api req", data, api);
        response = await axios.post(api, { data });
        if (response) {
          dispatch(setScholarship(response.data.scholarships));
          dispatch(setIsScholarshipEdited(false));
        }
      }

      // console.log("API Response:", response);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  const handleAuthorshipApiRequest = async () => {
    console.log("inside authorship", data);
    try {
      let response;

      //---------this is a method to update all the content of the visa ---------------
      if (data.authorshipData.length > 0 && data.isEdited) {
        console.log(store.getState(), "store");
        const newData = [];
        for (const authorship of data.authorshipData) {
          if (!authorship._id) {
            newData.push(authorship);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...data,
            authorships: newData,
          };

          response = await axios.post(api, { data: filteredData });

          if (response) {
            dispatch(setAuthorship(response.data.authorships));
            dispatch(setIsAuthorshipEdited(false));
          }
        } else {
          console.log("No new forms to update.");
        }
      } else if (data.isEdited && data.authorshipData.length === 0) {
        // If forms array is empty and isEdited is true, perform POST request

        console.log("first api req", data, api);
        response = await axios.post(api, { data });
        if (response) {
          dispatch(setAuthorship(response.data.authorships));
          dispatch(setIsAuthorshipEdited(false));
        }
      }

      // console.log("API Response:", response);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  // PR
  const handlePRApiRequest = async () => {
    console.log("inside PR", data);
    try {
      let response;

      //---------this is a method to update all the content of the visa ---------------
      if (data.pressReleases.length > 0 && data.isEdited) {
        console.log(store.getState(), "store");
        const newData = [];
        for (const pressRelease of data.pressReleases) {
          if (!pressRelease._id) {
            newData.push(pressRelease);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...data,
            pressReleases: newData,
          };

          response = await axios.post(api, { data: filteredData });

          if (response) {
            dispatch(setPressRelease(response.data.pressRelease));
            dispatch(setIsPREdited(false));
          }
        } else {
          console.log("No new forms to update.");
        }
      } else if (data.isEdited && data.pressReleases.length === 0) {
        // If forms array is empty and isEdited is true, perform POST request

        console.log("first api req", data, api);
        response = await axios.post(api, { data });
        if (response) {
          dispatch(setPressRelease(response.data.pressRelease));
          dispatch(setIsPREdited(false));
        }
      }

      // console.log("API Response:", response);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  // judging
  const handleJudgingApiRequest = async () => {
    console.log("inside judging", data);
    try {
      let response;

      //---------this is a method to update all the content of the visa ---------------
      if (data.judgingRecords.length > 0 && data.isEdited) {
        console.log(store.getState(), "store");
        const newData = [];
        for (const judgingRecord of data.judgingRecords) {
          if (!judgingRecord._id) {
            newData.push(judgingRecord);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...data,
            judgingRecords: newData,
          };

          response = await axios.post(api, { data: filteredData });

          if (response) {
            dispatch(setJudging(response.data.judging));
            dispatch(setIsJudgingEdited(false));
          }
        } else {
          console.log("No new forms to update.");
        }
      } else if (data.isEdited && data.pressReleases.length === 0) {
        // If forms array is empty and isEdited is true, perform POST request

        console.log("first api req", data, api);
        response = await axios.post(api, { data });
        if (response) {
          dispatch(setJudging(response.data.judging));
          dispatch(setIsJudgingEdited(false));
        }
      }

      // console.log("API Response:", response);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  const handleApiRequest = async () => {
    try {
      let response;
      if (section === "basicDetails") {
        if (id) {
          response = await axios.put(api, { data });
        } else {
          response = await axios.post(api, { data });
        }
      }

      const responseData = response.data;
      if (section === "basicDetails" && responseData._id) {
        navigate(`/${responseData._id}`);
      }
      console.log("API Response:", responseData);
    } catch (error) {
      console.error("Error in API request:", error);
      // You can set an error state here and display a message to the user
    }
  };

  const handleNextStep = async () => {
    if (data?.isEdited) {
      if (
        section === "visa" ||
        section === "exhibition" ||
        section === "finalMerit"
      ) {
        await handleVisaApiRequest();
      } else if (section === "experience") {
        await handleExperienceApiRequest();
      } else if (section === "education") {
        await handleEducationApiRequest();
      } else if (section === "awards") {
        await handleAwardsApiRequest();
      } else if (section === "scholarship") {
        await handleScholarshipApiRequest();
      } else if (section === "authorship") {
        await handleAuthorshipApiRequest();
      } else if (section === "pressRelease") {
        await handlePRApiRequest();
      } else if (section === "judging") {
        await handleJudgingApiRequest();
      } else if (section === "basicDetails") {
        await handleApiRequest();
      }
    }

    // Ensure the API request was successful before moving to the next step
    if (step < totalSteps) {
      dispatch(nextStep({ step }));
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      dispatch(prevStep());
    }
  };

  const handleSubmit = async () => {
    console.log("inside visa");
    console.log(data, "hello", api);
    try {
      let response;

      //---------this is a method to update all the content of the visa ---------------
      if (data.forms.length > 0 && data.isEdited) {
        console.log(store.getState(), "store");
        const newData = [];
        for (const form of data.forms) {
          if (!form._id) {
            newData.push(form);
          }
        }
        // console.log("newdata", newData);

        if (newData.length > 0) {
          const filteredData = {
            ...data,
            forms: newData,
          };

          response = await axios.post(api, { data: filteredData });

          if (response) {
            alert("form submitted!!");
          }
        } else {
          console.log("No new forms to update.");
        }
      }

      console.log("API Response:", response);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  return (
    <div className="w-1/2 px-12 mt-6 flex justify-between z-50 relative">
      {step > 1 && (
        <button
          className="fixed left-[5rem] bottom-[1rem] flex-start bg-white hover:shadow-form rounded-md py-3 px-8 text-center text-base font-semibold text-black hover:bg-gray-200 outline outline-1"
          onClick={handlePrevStep}
        >
          Previous
        </button>
      )}

      {step < totalSteps && (
        <button
          className="fixed right-[50rem] bottom-[1rem] flex-end hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
          onClick={handleNextStep}
        >
          Next
        </button>
      )}

      {step === totalSteps && (
        <button
          className="fixed right-[50rem] bottom-[1rem] py-3 px-8 bg-green-500 hover:bg-green-700 text-white rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default NavigationBtn;
