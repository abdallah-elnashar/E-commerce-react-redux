import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "decoration",
  },
  reducers: {
    selectCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
