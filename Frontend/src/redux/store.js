import { configureStore } from "@reduxjs/toolkit";
import personalInfo from "./personalInfoSlice";
import experienceSlice from "./experienceSlice";
import authorshipSlice from "./authorshipSlice";
import visaSlice from "./visaSlice";
import educationSlice from "./educationSlice";
import pressReleaseSlice from "./pressReleaseSlice";
import judgingSlice from "./judgingSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfo,
    experience: experienceSlice,
    authorship: authorshipSlice,
    visa: visaSlice,
    education: educationSlice,
    pressRelease: pressReleaseSlice,
    judging: judgingSlice,
  },
});
