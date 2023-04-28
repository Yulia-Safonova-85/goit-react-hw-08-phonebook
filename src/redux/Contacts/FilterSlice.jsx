import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterValue(_, action) {
        return action.payload;
    },
  }
});

export const { setFilterValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;