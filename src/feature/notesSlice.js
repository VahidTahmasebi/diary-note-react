import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncNotes = createAsyncThunk(
  'notes/getAsyncNotes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:9000/notes');
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// create async add note
export const addAsyncNotes = createAsyncThunk(
  'notes/addAsyncNotes',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:9000/notes', {
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
    [getAsyncNotes.fulfilled]: (state, action) => {
      return { ...state, notes: action.payload, loading: false, error: null };
    },
    [getAsyncNotes.pending]: (state, action) => {
      return { ...state, notes: [], loading: true, error: null };
    },
    [getAsyncNotes.rejected]: (state, { payload }) => {
      return { ...state, notes: [], loading: false, error: payload.message };
    },
    [addAsyncNotes.fulfilled]: (state, action) => {
      state.notes.push(action.payload);
    },
  },
});

export default noteSlice.reducer;
