import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  merits: [], // Stores the experience form data
  currentForm: {
    type: "",
    name: "",
    linkedIn: "",
    designation: "",
    topic: "",
    relationship: "",
    industry: "",
    evidenceType: "",
    evidence : null,
    organization: "",
    link: "",
    position: "",
    impact: "",
    relationship: "",
  }, // Stores the currently edited form data
};

const meritsSlice = createSlice({
  name: "merits",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
    },
    addMerits: (state) => {
      state.merits.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        type: "",
        name: "",
        linkedIn: "",
        designation: "",
        topic: "",
        relationship: "",
        industry: "",
        evidenceType: "",
        evidence : null,
        organization: "",
        link: "",
        position: "",
        impact: "",
        relationship: "",
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
  },
});

export const { setFormField, addMerits, resetForm } =
meritsSlice.actions;
export default meritsSlice.reducer;