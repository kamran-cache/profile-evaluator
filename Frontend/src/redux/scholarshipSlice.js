import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { setFormField, addscholarships, resetForm } =
scholarshipSlice.actions;
export default scholarshipSlice.reducer;
