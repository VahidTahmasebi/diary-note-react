import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// get the data of all the notes
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
        createAt: new Date().toLocaleString(),
        subject: payload.subject,
        textarea: payload.textarea,
        checklist: payload.checklist,
        progress: payload.progress,
        cover: payload.cover,
        date: payload.date,
        time: payload.time,
        place: payload.place,
        tags: payload.tags,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// delete async note from note list
export const deleteAsyncNote = createAsyncThunk(
  'notes/deleteAsyncNote',
  async (payload, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:9000/notes/${payload.id}`);

      return { id: payload.id };
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// get the desired note
export const getAsyncOneNote = createAsyncThunk(
  'notes/getAsyncOneNote',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/notes/${payload.id}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// edit the desired note
export const editAsyncNote = createAsyncThunk(
  'notes/editAsyncNote',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/notes/${payload.id}`,
        {
          id: payload.id,
          createAt: payload.createAt,
          subject: payload.subject,
          textarea: payload.textarea,
          checklist: payload.checklist,
          progress: payload.progress,
          cover: payload.cover,
          date: payload.date,
          time: payload.time,
          place: payload.place,
          tags: payload.tags,
        }
      );

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
const notesSlice = createSlice({
  name: 'notes',
  initialState,
  extraReducers: {
    [getAsyncNotes.fulfilled]: (state, action) => {
      return { ...state, notes: action.payload, loading: false, error: null };
    },
    [getAsyncNotes.pending]: (state) => {
      return { ...state, notes: [], loading: true, error: null };
    },
    [getAsyncNotes.rejected]: (state, { payload }) => {
      return { ...state, notes: [], loading: false, error: payload.message };
    },
    [addAsyncNotes.fulfilled]: (state, action) => {
      state.notes.push(action.payload);
    },
    [deleteAsyncNote.fulfilled]: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    [getAsyncOneNote.fulfilled]: (state, action) => {
      return { ...state, notes: action.payload, loading: false, error: null };
    },
    [editAsyncNote.fulfilled]: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export default notesSlice.reducer;
