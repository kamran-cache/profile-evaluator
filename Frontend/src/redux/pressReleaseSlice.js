// redux/pressReleaseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentForm: {
    title: "",
    publication: "",
    articleType: "Online", // Default value for articleType
  },
  pressReleases: [], // Array to store all press releases
};

const pressReleaseSlice = createSlice({
  name: "pressRelease",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state.currentForm[name] = value;
    },
    addPressRelease: (state) => {
      if (state.currentForm.title.trim() !== "") {
        state.pressReleases.push(state.currentForm);
        state.currentForm = initialState.currentForm; // Reset the currentForm after adding
      }
    },
  },
});

export const { setFormField, addPressRelease } = pressReleaseSlice.actions;
export default pressReleaseSlice.reducer;
