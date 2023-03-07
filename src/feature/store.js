import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import citiesReducer from './citiesSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    cities: citiesReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
