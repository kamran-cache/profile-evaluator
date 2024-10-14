import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { setFormField, addAward, resetForm } =
awardsSlice.actions;
export default awardsSlice.reducer;
