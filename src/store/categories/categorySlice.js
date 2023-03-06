import { createSlice } from '@reduxjs/toolkit';
import { getCategory } from './actions';

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: 'error',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: {
    [getCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default categorySlice.reducer;
