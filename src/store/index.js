import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categorySlice';
import gamesReducer from './games/gameSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    games: gamesReducer,
  },
});
