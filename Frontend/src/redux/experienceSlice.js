import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experiences: [], // Array to store multiple experience objects
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience: (state, action) => {
      state.experiences.push(action.payload); // Add the new experience to the array
    },
  },
});

export const { addExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
