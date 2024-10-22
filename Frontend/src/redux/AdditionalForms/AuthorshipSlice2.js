import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorships: [], // Stores the experience form data
  currentForm: {
    title: "",
    publisher: "",
    link: "",
    dateOfPublishing: "",
    authors: "",
    evidenceType: "",
    evidence : null,
    patentTitle: "",
    patentRegistry: "",
    patentDate: "",
    keyFeatures: "",
    summary: "",
    impact: "",
    useCases: "",
  }, // Stores the currently edited form data
};

const authorshipsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
    },
    addAuthorships: (state) => {
      state.authorships.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        title: "",
        publisher: "",
        link: "",
        dateOfPublishing: "",
        authors: "",
        evidenceType: "",
        evidence : null,
        patentTitle: "",
        patentRegistry: "",
        patentDate: "",
        keyFeatures: "",
        summary: "",
        impact: "",
        useCases: "",
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
  },
});

export const { setFormField, addAuthorships, resetForm } =
authorshipsSlice.actions;
export default authorshipsSlice.reducer;