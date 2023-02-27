import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import citiesReducer from './citiesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    cities: citiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
