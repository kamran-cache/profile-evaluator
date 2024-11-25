// redux/pressReleaseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
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
      state.isEdited = true;
    },
    addPressRelease: (state) => {
      if (state.currentForm.title.trim() !== "") {
        state.pressReleases.push(state.currentForm);
        state.currentForm = initialState.currentForm; // Reset the currentForm after adding
      }
    },
    setPressRelease: (state, action) => {
      const pressRelease = action.payload;
      state.pressReleases = Array.isArray(pressRelease)
        ? pressRelease
        : [pressRelease];
      state.isEdited = false;
    },
    setIsPREdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const { setFormField, addPressRelease, setIsPREdited, setPressRelease } =
  pressReleaseSlice.actions;
export default pressReleaseSlice.reducer;
