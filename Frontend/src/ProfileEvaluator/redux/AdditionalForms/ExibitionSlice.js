import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exibition: [], // Stores the experience form data
  currentForm: {
    title: "",
    organization: "",
    link: "",
    criteria: "",
    description: "",
    evidenceType: "",
    evidence : null,
  }, // Stores the currently edited form data
};

const exibitionSlice = createSlice({
  name: "pressRelease",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
    },
    addExibition: (state) => {
      state.exibition.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        title: "",
        organization: "",
        link: "",
        criteria: "",
        description: "",
        evidenceType: "",
        evidence : null,
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
  },
});

export const { setFormField, addExibition, resetForm } =
exibitionSlice.actions;
export default exibitionSlice.reducer;