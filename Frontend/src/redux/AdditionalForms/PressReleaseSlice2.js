import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  press: [], // Stores the experience form data
  currentForm: {
    title: "",
    publisher: "",
    date: "",
    link: "",
    author: "",
    industry: "",
    type: "",
  }, // Stores the currently edited form data
};

const pressSlice = createSlice({
  name: "pressRelease",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
    },
    addPress: (state) => {
      state.press.push(state.currentForm);
      // Reset the form
      state.currentForm = {
        title: "",
        publisher: "",
        date: "",
        link: "",
        author: "",
        industry: "",
        type: "",
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm;
    },
  },
});

export const { setFormField, addPress, resetForm } =
pressSlice.actions;
export default pressSlice.reducer;