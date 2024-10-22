// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isEdited: false,
//   judgingRecords: [],
//   currentForm: {
//     isJudge: false, // Assuming this is a boolean to indicate if the person is a judge
//     judgedCategories: [], // Array to store selected checkbox values
//   },
// };

// const judgingSlice = createSlice({
//   name: "judging",
//   initialState,
//   reducers: {
//     setFormField: (state, action) => {
//       const { name, value } = action.payload; // Destructure the field name and value
//       if (name === "judgedCategories") {
//         // If the name is 'judgedCategories', update the array of selected checkboxes
//         if (state.currentForm.judgedCategories.includes(value)) {
//           // If the value is already in the array, remove it (uncheck)
//           state.currentForm.judgedCategories =
//             state.currentForm.judgedCategories.filter(
//               (category) => category !== value
//             );
//         } else {
//           // If the value is not in the array, add it (check)
//           state.currentForm.judgedCategories.push(value);
//         }
//       } else {
//         // For other fields, update normally
//         state.currentForm[name] = value;
//         state.isEdited = true;
//       }
//     },
//     addJudgingRecord: (state) => {
//       if (state.currentForm.judgedCategories.length > 0) {
//         state.judgingRecords.push(state.currentForm);
//         state.currentForm = initialState.currentForm; // Reset the currentForm after adding
//       }
//     },
//   },
// });

// export const { setFormField, addJudgingRecord } = judgingSlice.actions;
// export default judgingSlice.reducer;

// demo2
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isEdited: false,
//   judgingRecords: [],
//   currentForm: {
//     isJudge: false, // Indicates if the person is a judge
//     judgedCategories: [], // Array to store selected checkbox values
//     judgedCounts: {}, // Object to store count of times judged for each category
//   },
// };

// const judgingSlice = createSlice({
//   name: "judging",
//   initialState,
//   reducers: {
//     setFormField: (state, action) => {
//       const { name, value } = action.payload; // Destructure the field name and value

//       // Handle checkbox changes (judgedCategories)
//       if (name === "judgedCategories") {
//         if (state.currentForm.judgedCategories.includes(value)) {
//           // If the category is already selected, remove it (uncheck)
//           state.currentForm.judgedCategories =
//             state.currentForm.judgedCategories.filter(
//               (category) => category !== value
//             );
//           delete state.currentForm.judgedCounts[value]; // Also remove the associated count
//         } else {
//           // If the category is not selected, add it (check)
//           state.currentForm.judgedCategories.push(value);
//           state.currentForm.judgedCounts[value] = 0; // Initialize count with 0
//         }
//       }

//       // Handle count changes for each category (judgedCounts)
//       else if (name === "judgedCounts") {
//         const { category, count } = value; // Value will have the category and the count
//         state.currentForm.judgedCounts[category] = count;
//       }

//       // Handle other form fields
//       else {
//         state.currentForm[name] = value;
//       }

//       state.isEdited = true;
//     },

//     addJudgingRecord: (state) => {
//       if (state.currentForm.judgedCategories.length > 0) {
//         state.judgingRecords.push(state.currentForm);
//         state.currentForm = initialState.currentForm; // Reset currentForm after adding
//       }
//     },
//   },
// });

// export const { setFormField, addJudgingRecord } = judgingSlice.actions;
// export default judgingSlice.reducer;

// demp3
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
  judgingRecords: [], // This will store {category: count} objects
};

const judgingSlice = createSlice({
  name: "judging",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { category, count } = action.payload; // Expect payload with category and count

      // Find if category already exists in judgingRecords
      const existingCategory = state.judgingRecords.find(
        (record) => record.category === category
      );

      if (existingCategory) {
        // Update count for the existing category
        existingCategory.count = count;
      } else {
        // Add new category with count
        state.judgingRecords.push({ category, count });
      }

      state.isEdited = true;
    },
    setJudging: (state, action) => {
      const judging = action.payload;
      // Ensure that the incoming visa data is an array and set it to forms
      state.judgingRecords = Array.isArray(judging) ? judging : [judging];
      state.isEdited = false;
    },
    setIsJudgingEdited: (state, action) => {
      state.isEdited = action.payload;
    },
  },
});

export const { setFormField, setIsJudgingEdited, setJudging } =
  judgingSlice.actions;
export default judgingSlice.reducer;
