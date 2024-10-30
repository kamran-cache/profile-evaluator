import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [], // Stores the experience form data
  currentForm: {
    projectTitle: "",
    deliverables: "",
    contribution: "",
    benefitToCompany: "",
    userImpact: "",
    nicheImpact: "",
    evidenceType: "",
    evidence: null,
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
        projectTitle: "",
        deliverables: "",
        contribution: "",
        benefitToCompany: "",
        userImpact: "",
        nicheImpact: "",
        evidenceType: "",
        evidence: null,
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
    setProjects: (state, action) => {
      const data = action.payload;
      state.projects = Array.isArray(data) ? data : [data];
    },
  },
});

export const { setFormField, addProjects, resetForm, setProjects } =
  CriticalRoleSlice.actions;
export default CriticalRoleSlice.reducer;
