import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
  awards: [], // Stores the experience form data
  currentForm: {
    name: "",
    mode: "",
    date: "",
  }, // Stores the currently edited form data
};

const awardsSlice = createSlice({
  name: "awards",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
      state.isEdited = true;
    },
    addAward: (state) => {
      state.awards.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        name: "",
        mode: "",
        date: "",
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
    setAwards: (state, action) => {
      const award = action.payload;
      // Ensure that the incoming visa data is an array and set it to forms
      state.awards = Array.isArray(award) ? award : [award];
      state.isEdited = false;
    },
    setIsAwardEdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const {
  setFormField,
  addAward,
  resetForm,
  setAwards,
  setIsAwardEdited,
} = awardsSlice.actions;
export default awardsSlice.reducer;
