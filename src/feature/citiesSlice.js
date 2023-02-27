import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncCities = createAsyncThunk(
  'cities/getAsyncCities',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:9001/cities');
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// store state
const initialState = {
  cities: [],
  error: null,
  loading: false,
};

// reducers
const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: {
    [getAsyncCities.fulfilled]: (state, action) => {
      return { ...state, cities: action.payload, loading: false, error: null };
    },
    [getAsyncCities.pending]: (state) => {
      return { ...state, cities: [], loading: true, error: null };
    },
    [getAsyncCities.rejected]: (state, { payload }) => {
      return { ...state, cities: [], loading: false, error: payload.message };
    },
  },
});

export default citiesSlice.reducer;
