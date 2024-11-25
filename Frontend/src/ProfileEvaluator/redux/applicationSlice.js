import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  id: "",
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
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { nextStep, prevStep, setId } = applicationSlice.actions;
export default applicationSlice.reducer;
