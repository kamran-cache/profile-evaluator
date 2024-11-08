import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
  status: "todo",
  experiences: [], // Stores the experience form data
  currentForm: {
    company: "",
    location: "",
    roles: [{ jobTitle: "", startDate: "", endDate: "" }],
  },
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;

      if (name.startsWith("roles")) {
        // Parse index and field name for roles (e.g., roles[0].jobTitle)
        const [_, index, field] = name.match(/roles\[(\d+)\]\.(\w+)/);
        state.currentForm.roles[index][field] = value;
      } else {
        // Handle other fields like company and location
        state.currentForm[name] = value;
      }
      state.isEdited = true;
    },
    addExperience: (state) => {
      state.experiences.push(state.currentForm);
      // Reset the form with an empty roles array
      state.currentForm = {
        company: "",
        location: "",
        roles: [{ jobTitle: "", startDate: "", endDate: "" }],
        summary: "",
      };
    },
    resetForm: (state) => {
      state.currentForm = initialState.currentForm; // Reset to initial state
    },
    setExperience: (state, action) => {
      const experience = action.payload;
      // Ensure that the incoming experience data is an array and set it
      state.experiences = Array.isArray(experience) ? experience : [experience];
      state.isEdited = false;
    },
    setIsExperienceEdited: (state, action) => {
      state.isEdited = action.payload;
    },
    addRole: (state) => {
      // Add a new empty role object to the roles array in currentForm
      state.currentForm.roles.push({
        jobTitle: "",
        startDate: "",
        endDate: "",
      });
      state.isEdited = true; // Mark as edited after adding a role
    },
    removeRole: (state, action) => {
      // Remove a role from the roles array by index
      const index = action.payload;
      if (index > -1 && index < state.currentForm.roles.length) {
        state.currentForm.roles.splice(index, 1);
        state.isEdited = true; // Mark as edited after removing a role
      }
    },
  },
});

export const {
  setFormField,
  addExperience,
  resetForm,
  setExperience,
  setIsExperienceEdited,
  addRole,
  removeRole,
} = experienceSlice.actions;
export default experienceSlice.reducer;
