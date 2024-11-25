import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  awards: [],
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
  currentAwardForm: {
    awardName: "",
    issuingOrganization: "",
    date: "",
    scope: "",
    criteria: "",
    nicheImpact: "",
    evidenceType: "",
    evidence: null,
  },
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
    setAwardsForm: (state, action) => {
      const { name, value } = action.payload;
      state.currentAwardForm[name] = value;
    },
    addAwards: (state) => {
      state.awards.push(state.currentAwardForm);
      state.currentAwardForm = { ...initialState.currentAwardForm };
    },
    resetAwardForm: (state) => {
      state.currentAwardForm = { ...initialState.currentAwardForm };
    },
  },
});

export const {
  setFormField,
  addProjects,
  resetForm,
  setProjects,
  setAwardsForm,
  addAwards,
  resetAwardForm,
} = CriticalRoleSlice.actions;
export default CriticalRoleSlice.reducer;
