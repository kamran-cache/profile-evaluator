import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  judging: [], // Stores the experience form data
  currentForm: {
    organizationName: "",
    startDate: "",
    endDate: "",
    link: "",
    criteria: "",
    evidenceType: "",
    evidence : null,
  }, // Stores the currently edited form data
};

const judgingSlice = createSlice({
  name: "judging",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
    },
    addJudging: (state) => {
      state.judging.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        organizationName: "",
        startDate: "",
        endDate: "",
        link: "",
        criteria: "",
        evidenceType: "",
        evidence : null,
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
  },
});

export const { setFormField, addJudging, resetForm } =
judgingSlice.actions;
export default judgingSlice.reducer;