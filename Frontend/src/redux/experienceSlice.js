import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
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
      state.isEdited = true;
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
    setExperience: (state, action) => {
      const experience = action.payload;
      // Ensure that the incoming visa data is an array and set it to forms
      state.experiences = Array.isArray(experience) ? experience : [experience];
      state.isEdited = false;
    },
    setIsExperienceEdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const {
  setFormField,
  addExperience,
  resetForm,
  setExperience,
  setIsExperienceEdited,
} = experienceSlice.actions;
export default experienceSlice.reducer;
