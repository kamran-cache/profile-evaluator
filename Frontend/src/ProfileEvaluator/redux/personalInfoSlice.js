import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {},
  isEdited: false,
};

const personalInfoSlice = createSlice({
  name: "personalDetail",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      const { target, value } = action.payload;
      state.personalInfo[target] = value;
      state.isEdited = true;
    },
    setPersonalInfo: (state, action) => {
      const personalData = action.payload;
      state.personalInfo = { ...personalData };
      state.isEdited = false;
    },
  },
});

export const { addInfo, setPersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
