import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
  educations: [], // Stores the education form data
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
      state.isEdited = true;
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
    setEducation: (state, action) => {
      const education = action.payload;
      // Ensure that the incoming visa data is an array and set it to forms
      state.educations = Array.isArray(education) ? education : [education];
      state.isEdited = false;
    },
    setIsEducationEdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const {
  setFormField,
  addEducation,
  resetForm,
  setEducation,
  setIsEducationEdited,
} = educationSlice.actions;
export default educationSlice.reducer;
