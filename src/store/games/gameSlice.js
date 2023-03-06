import { createSlice } from '@reduxjs/toolkit';
import { getGame } from './actions';

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  extraReducers: {
    [getGame.pending]: (state) => {
      state.isLoading = true;
    },
    [getGame.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getGame.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default gameSlice.reducer;
