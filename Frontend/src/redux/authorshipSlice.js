import { createSlice } from "@reduxjs/toolkit";

const authorshipSlice = createSlice({
  name: "authorship",
  initialState: {
    isEdited: false,
    authorshipData: [],
    currentForm: {},
    toggleForm: false,
  },
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload; // Destructure the field name and value
      state.currentForm[name] = value; // Set the field dynamically in the current form
      state.isEdited = true;
    },
    addAuthorship: (state) => {
      state.authorshipData.push(state.currentForm); // Add the current form to the authorship data list
      state.currentForm = {}; // Reset the form after adding
    },
    resetForm: (state) => {
      state.currentForm = {}; // Clear the current form data
    },
    updateAuthorship: (state, action) => {
      const { index, updatedData } = action.payload; // Get the index and the updated data
      state.authorshipData[index] = {
        ...state.authorshipData[index],
        ...updatedData,
      }; // Merge updates
    },
    removeAuthorship: (state, action) => {
      const { index } = action.payload; // Get the index of the item to remove
      state.authorshipData.splice(index, 1); // Remove the item from the array
    },
    handleToggle: (state) => {
      state.toggleForm = !state.toggleForm;
    },
    setAuthorship: (state, action) => {
      const authorship = action.payload;
      // Ensure that the incoming visa data is an array and set it to forms
      state.authorshipData = Array.isArray(authorship)
        ? authorship
        : [authorship];
      state.isEdited = false;
    },
    setIsAuthorshipEdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const {
  setFormField,
  addAuthorship,
  resetForm,
  updateAuthorship,
  removeAuthorship,
  handleToggle,
  setIsAuthorshipEdited,
  setAuthorship,
} = authorshipSlice.actions;
export default authorshipSlice.reducer;
