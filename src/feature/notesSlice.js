import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create async add note
export const addAsyncTextarea = createAsyncThunk(
  'notes/addAsyncTextarea',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/notes', {
        id: Date.now(),
        subject: payload.subject,
        textarea: payload.textarea,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// store state
const initialState = {
  notes: [],
  error: null,
  loading: false,
};

// reducers
const noteSlice = createSlice({
  name: 'notes',
  initialState,
  extraReducers: {
    [addAsyncTextarea.fulfilled]: (state, action) => {
      state.notes.push(action.payload);
    },
  },
});

export default noteSlice.reducer;
