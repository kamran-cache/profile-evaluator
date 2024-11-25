import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
  forms: [
    {
      publicFigure: false,
      nationalInterest: false,
      contributions: [], // This will hold an array of contributions
    },
  ],
};

const meritSlice = createSlice({
  name: "merit",
  initialState,
  reducers: {
    setPublicFigure: (state, action) => {
      // Set publicFigure value for the first form in the array
      state.forms[0].publicFigure = action.payload;
      state.isEdited = true;
    },
    setNationalInterest: (state, action) => {
      // Set nationalInterest value for the first form in the array
      state.forms[0].nationalInterest = action.payload;
      state.isEdited = true;
    },
    setContribution: (state, action) => {
      const contribution = action.payload;
      // Push contribution to contributions array in the first form object
      state.forms[0].contributions.push(contribution);
      state.isEdited = true;
    },
    setMerit: (state, action) => {
      const meritForm = action.payload;
      // Replace forms array with the new meritForm array (ensures array structure)
      state.forms = Array.isArray(meritForm) ? meritForm : [meritForm];
      state.isEdited = false;
    },
    setIsMeritEdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const {
  setPublicFigure,
  setNationalInterest,
  setContribution,
  setMerit,
  setIsMeritEdited,
} = meritSlice.actions;
export default meritSlice.reducer;
