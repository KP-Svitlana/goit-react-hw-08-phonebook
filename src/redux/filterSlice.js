import { createSlice } from '@reduxjs/toolkit';

const filterInitialSttate = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialSttate,
  reducers: {
    addFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
