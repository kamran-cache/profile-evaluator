import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
  hasExhibition: false,
  selectedRole: "",
  roleCount: "",
  forms: [],
  isFormVisible: true,
};

const exhibitionsSlice = createSlice({
  name: "exhibitions",
  initialState,
  reducers: {
    setHasExhibition: (state, action) => {
      state.hasExhibition = action.payload;
    },
    setSelectedRole: (state, action) => {
      state.selectedRole = action.payload;
    },
    setRoleCount: (state, action) => {
      state.roleCount = action.payload;
    },
    addRole: (state) => {
      const newRole = { role: state.selectedRole, count: state.roleCount };
      state.forms.push(newRole);
      state.isEdited = true;
      state.selectedRole = "";
      state.roleCount = "";
      state.isFormVisible = false; // Collapse the form after adding
    },
    setIsFormVisible: (state, action) => {
      state.isFormVisible = action.payload;
    },
    resetSubmittedRoles: (state) => {
      state.submittedRoles = [];
    },
    setExhibition: (state, action) => {
      const form = action.payload;
      // Ensure that the incoming visa data is an array and set it to forms
      state.forms = Array.isArray(form) ? form : [form];
      state.isEdited = false;
    },
    setIsExhibitonEdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const {
  setExhibition,
  setIsExhibitonEdited,
  setHasExhibition,
  setSelectedRole,
  setRoleCount,
  addRole,
  setIsFormVisible,
  resetSubmittedRoles,
} = exhibitionsSlice.actions;

export default exhibitionsSlice.reducer;
