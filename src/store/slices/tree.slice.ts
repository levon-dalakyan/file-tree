import { getTreeData } from './../../utils/firebase.utils';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type Branch = IFile & IDir;

export interface IFile {
  key: string;
  title: string;
  score: number;
  createdAt: string;
  size: string;
  isLeaf: boolean;
}

export interface IDir extends IFile {
  children: Branch[];
}

export interface IUserState {
  treeData: Branch[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

const initialState: IUserState = {
  treeData: [],
  status: 'idle',
  error: '',
};

export const fetchTreeData = createAsyncThunk('tree/fetchTreeData', async () =>
  getTreeData()
);

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    // updateTree: (state, action) => {
    //   state.treeData = action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTreeData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTreeData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.treeData = action.payload;
      })
      .addCase(fetchTreeData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const { updateTree } = treeSlice.actions;

export default treeSlice.reducer;
