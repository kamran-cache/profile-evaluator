import { configureStore } from "@reduxjs/toolkit";
import personalInfo from "./personlInfoSlice";
import experienceSlice from "./experienceSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfo,
    experience: experienceSlice,
  },
});
