import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [], // Stores the experience form data
  currentForm: {
    title: "",
    deliverables: "",
    contribution: "",
    benefitToCompany: "",
    userImpact: "",
    nicheImpact: "",
    evidenceType: "",
    evidence : null,
  }, // Stores the currently edited form data
};

const CriticalRoleSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
    },
    addProjects: (state) => {
      state.projects.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        title: "",
        deliverables: "",
        contribution: "",
        benefitToCompany: "",
        userImpact: "",
        nicheImpact: "",
        evidenceType: "",
        evidence : null,
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
  },
});

export const { setFormField, addProjects, resetForm } =
CriticalRoleSlice.actions;
export default CriticalRoleSlice.reducer;