import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
  scholarships: [], // Stores the experience form data
  currentForm: {
    name: "",
    organisation: "",
    startDate: "",
    endDate: "",
  }, // Stores the currently edited form data
};

const scholarshipSlice = createSlice({
  name: "scholarships",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
      state.isEdited = true;
    },
    addscholarships: (state) => {
      state.scholarships.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        name: "",
        organisation: "",
        startDate: "",
        endDate: "",
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
    setScholarship: (state, action) => {
      const scholarship = action.payload;
      // Ensure that the incoming visa data is an array and set it to forms
      state.scholarships = Array.isArray(scholarship)
        ? scholarship
        : [scholarship];
      state.isEdited = false;
    },
    setIsScholarshipEdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const {
  setFormField,
  addscholarships,
  resetForm,
  setScholarship,
  setIsScholarshipEdited,
} = scholarshipSlice.actions;
export default scholarshipSlice.reducer;
