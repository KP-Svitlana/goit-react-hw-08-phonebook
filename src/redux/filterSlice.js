import { createSlice } from '@reduxjs/toolkit';

const filterInitialSttate = '';

const filterSloce = createSlice({
  name: 'filter',
  initialState: filterInitialSttate,
  reducers: {
    filterContacts(state, action) {},
  },
});
