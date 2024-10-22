import { configureStore } from "@reduxjs/toolkit";
import personalInfo from "./personalInfoSlice";
import experienceSlice from "./experienceSlice";
import authorshipSlice from "./authorshipSlice";
import visaSlice from "./visaSlice";
import educationSlice from "./educationSlice";
import awardsSlice from "./awardsSlice";
import scholarshipSlice from "./scholarshipSlice";
import pressReleaseSlice from "./pressReleaseSlice";
import judgingSlice from "./judgingSlice";
import exhibitionSlice from "./exhibitionSlice";
import applicationSlice from "./applicationSlice";
import meritSlice from "./finalMeritSlice";
import membershipSlice from "./membershipSlice";

export const store = configureStore({
  reducer: {
    application: applicationSlice,
    personalInfo: personalInfo,
    experience: experienceSlice,
    authorship: authorshipSlice,
    visa: visaSlice,
    education: educationSlice,
    awards: awardsSlice,
    scholarships: scholarshipSlice,
    pressRelease: pressReleaseSlice,
    judging: judgingSlice,
    exhibition: exhibitionSlice,
    finalMerits: meritSlice,
    membership: membershipSlice,
  },
});
