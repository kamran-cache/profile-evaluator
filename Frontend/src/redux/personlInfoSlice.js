import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const personalInfoSlice = createSlice({
  name: "personalDetail",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      const { target, value } = action.payload;
      state[target] = value;
    },
  },
});

export const { addInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
