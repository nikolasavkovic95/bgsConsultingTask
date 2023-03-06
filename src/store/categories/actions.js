import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategory = createAsyncThunk('user/getCategory', async (category, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://cdn-cms.igp.cloud/bto/static/files/game-categories/extended.json`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
