import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategories: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(cat => cat !== category);
      } else {
        state.selectedCategories.push(category);
      }
    },
  },
});

export const { toggleCategory } = filterSlice.actions;

export default filterSlice.reducer;
