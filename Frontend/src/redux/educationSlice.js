import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  educations: [], // Stores the experience form data
  currentForm: {
    degree: "",
    university: "",
    completionDate: "",
    location: "",
    information: "",
  }, // Stores the currently edited form data
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
    },
    addEducation: (state) => {
      state.educations.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        degree: "",
        university: "",
        completionDate: "",
        location: "",
        information: "",
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
  },
});

export const { setFormField, addEducation, resetForm } =
  educationSlice.actions;
export default educationSlice.reducer;
