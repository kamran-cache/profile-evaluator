import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experiences: [], // Stores the experience form data
  currentForm: {
    role: "",
    startDate: "",
    endDate: "",
    company: "",
    location: "",
    summary: "",
  }, // Stores the currently edited form data
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
    },
    addExperience: (state) => {
      state.experiences.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        role: "",
        startDate: "",
        endDate: "",
        company: "",
        location: "",
        summary: "",
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
  },
});

export const { setFormField, addExperience, resetForm } =
  experienceSlice.actions;
export default experienceSlice.reducer;
