import { createSlice } from '@reduxjs/toolkit';
import { Branch } from './tree.slice';

const initialState = {
  file: {} as Branch,
};
export const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFileAbout: (state, action) => {
      state.file = action.payload;
    },
  },
});

export const { setFileAbout } = fileSlice.actions;

export default fileSlice.reducer;
