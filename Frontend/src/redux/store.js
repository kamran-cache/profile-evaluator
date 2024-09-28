import { configureStore } from "@reduxjs/toolkit";
import personalInfo from "./personalInfoSlice";
import experienceSlice from "./experienceSlice";
import authorshipSlice from "./authorshipSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfo,
    experience: experienceSlice,
    authorship: authorshipSlice,
  },
});
