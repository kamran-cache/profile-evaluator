import { configureStore } from "@reduxjs/toolkit";
import personalInfo from "./personalInfoSlice";
import experienceSlice from "./experienceSlice";
import authorshipSlice from "./authorshipSlice";
import visaSlice from "./visaSlice";
import educationSlice from "./educationSlice";
<<<<<<< HEAD
import awardsSlice from "./awardsSlice";
import scholarshipSlice from "./scholarshipSlice";
=======
import pressReleaseSlice from "./pressReleaseSlice";
import judgingSlice from "./judgingSlice";
>>>>>>> origin/develop

export const store = configureStore({
  reducer: {
    personalInfo: personalInfo,
    experience: experienceSlice,
    authorship: authorshipSlice,
    visa: visaSlice,
    education: educationSlice,
<<<<<<< HEAD
    awards: awardsSlice,
    scholarships: scholarshipSlice,
=======
    pressRelease: pressReleaseSlice,
    judging: judgingSlice,
>>>>>>> origin/develop
  },
});
