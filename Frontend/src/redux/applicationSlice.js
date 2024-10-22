import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    nextStep: (state, action) => {
      state.step = action.payload.step + 1;
    },
    prevStep: (state) => {
      state.step = state.step - 1;
    },
  },
});

export const { nextStep, prevStep } = applicationSlice.actions;
export default applicationSlice.reducer;
