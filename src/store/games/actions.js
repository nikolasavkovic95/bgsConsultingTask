import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGame = createAsyncThunk('user/getGames', async (game, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://cdn-cms.igp.cloud/bto/static/files/games/desktop.json`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
