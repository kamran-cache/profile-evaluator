import { configureStore } from "@reduxjs/toolkit";
import personalInfo from "./personlInfoSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfo,
  },
});
