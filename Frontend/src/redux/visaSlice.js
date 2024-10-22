import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
  forms: [], // Stores all form submissions
};

const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    addVisaForm: (state, action) => {
      state.forms.push(action.payload); // Add the submitted form to the state
      state.isEdited = true;
    },
    setVisa: (state, action) => {
      const visa = action.payload;
      // Ensure that the incoming visa data is an array and set it to forms
      state.forms = Array.isArray(visa) ? visa : [visa];
      state.isEdited = false;
    },
    setIsVisaEdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const { addVisaForm, setVisa, setIsVisaEdited } = visaSlice.actions;

export default visaSlice.reducer;
