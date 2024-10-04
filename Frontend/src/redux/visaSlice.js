import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forms: [], // Stores all form submissions
};

const visaSlice = createSlice({
  name: 'visa',
  initialState,
  reducers: {
    addVisaForm: (state, action) => {
      state.forms.push(action.payload); // Add the submitted form to the state
    },
  },
});

export const { addVisaForm } = visaSlice.actions;

export default visaSlice.reducer;
