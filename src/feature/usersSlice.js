import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// get users
export const getAsyncUsers = createAsyncThunk(
  'users/getAsyncUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:9002/users');
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// create async add user
export const signupAsyncUsers = createAsyncThunk(
  'users/signupAsyncUsers',
  async (payload, { rejectWithValue }) => {
    try {
      localStorage.setItem('authState', JSON.stringify(payload));
      const response = await axios.post('http://localhost:9002/users', {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        password: payload.password,
        profileImage: payload.profileImage,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// store state
const initialState = {
  users: [],
  error: null,
  loading: false,
};

// reducers
const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getAsyncUsers.fulfilled]: (state, action) => {
      return { ...state, users: action.payload };
    },
    [signupAsyncUsers.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
