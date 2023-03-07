import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create async add user
export const singupAsyncUsers = createAsyncThunk(
  'users/singupAsyncUsers',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:9002/users', {
        id: Date.now(),
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
      console.log(response.data);
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
    [singupAsyncUsers.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
