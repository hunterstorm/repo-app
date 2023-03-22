import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: [],
};

export const getRepoSlice = createSlice({
  name: 'getRepo',
  initialState,
  reducers: {
    getUsername: (state, action) => {
      state.username = action.payload.username;
      console.log(action.payload.username)
    },
  },
});

export const { getUsername } = getRepoSlice.actions;

export default getRepoSlice.reducer;