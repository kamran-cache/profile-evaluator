import { configureStore } from "@reduxjs/toolkit";
import personalInfo from "./personalInfoSlice";
import experienceSlice from "./experienceSlice";
import authorshipSlice from "./authorshipSlice";
import visaSlice from "./visaSlice";
import educationSlice from "./educationSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfo,
    experience: experienceSlice,
    authorship: authorshipSlice,
    visa: visaSlice,
    education: educationSlice,
  },
});
