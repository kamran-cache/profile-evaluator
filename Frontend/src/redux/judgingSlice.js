// // redux/judgingSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   judgingRecords: [],
//   currentForm: {},

//   // Array to store all judging records
// };

// const judgingSlice = createSlice({
//   name: "judging",
//   initialState,
//   reducers: {
//     setFormField: (state, action) => {
//       const { name, value } = action.payload; // Destructure the field name and value
//       state.currentForm[name] = value;
//     },
//     addJudgingRecord: (state) => {
//       if (state.currentForm.isJudge) {
//         state.judgingRecords.push(state.currentForm);
//         state.currentForm = initialState.currentForm; // Reset the currentForm after adding
//       }
//     },
//   },
// });

// export const { setFormField, addJudgingRecord } = judgingSlice.actions;
// export default judgingSlice.reducer;

// demo2
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  judgingRecords: [],
  currentForm: {
    isJudge: false, // Assuming this is a boolean to indicate if the person is a judge
    judgedCategories: [], // Array to store selected checkbox values
  },
};

const judgingSlice = createSlice({
  name: "judging",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload; // Destructure the field name and value
      if (name === "judgedCategories") {
        // If the name is 'judgedCategories', update the array of selected checkboxes
        if (state.currentForm.judgedCategories.includes(value)) {
          // If the value is already in the array, remove it (uncheck)
          state.currentForm.judgedCategories =
            state.currentForm.judgedCategories.filter(
              (category) => category !== value
            );
        } else {
          // If the value is not in the array, add it (check)
          state.currentForm.judgedCategories.push(value);
        }
      } else {
        // For other fields, update normally
        state.currentForm[name] = value;
      }
    },
    addJudgingRecord: (state) => {
      if (state.currentForm.judgedCategories.length > 0) {
        state.judgingRecords.push(state.currentForm);
        state.currentForm = initialState.currentForm; // Reset the currentForm after adding
      }
    },
  },
});

export const { setFormField, addJudgingRecord } = judgingSlice.actions;
export default judgingSlice.reducer;
