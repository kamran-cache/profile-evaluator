// membershipSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdited: false,
  forms: [],
};

export const membershipSlice = createSlice({
  name: "membership",
  initialState,
  reducers: {
    setMembershipCount: (state, action) => {
      const count = action.payload;
      state.forms = Array(count).fill({});
      state.isEdited = true;
    },
    setMembershipName: (state, action) => {
      const { index, name } = action.payload;
      if (index < 20) {
        state.forms[index] = { name };
        state.isEdited = true;
      }
    },
    setMemberships: (state, action) => {
      const memberships = action.payload;
      state.forms = Array.isArray(memberships) ? memberships : [memberships];
    },
  },
});

export const { setMembershipCount, setMembershipName, setMemberships } =
  membershipSlice.actions;
export default membershipSlice.reducer;
