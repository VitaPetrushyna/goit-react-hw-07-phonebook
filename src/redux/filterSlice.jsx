import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';
const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, { payload }) => payload,
  },
});

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
