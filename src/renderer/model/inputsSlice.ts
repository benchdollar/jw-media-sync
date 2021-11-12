import { createSlice } from '@reduxjs/toolkit';
import { CodeItem } from './CodeItem';

export interface InputsState {
  publicationSymbol: CodeItem;
  filetype: CodeItem;
  language: CodeItem;
  folder: string;
}

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState: {
    publicationSymbol: null,
    filetype: null,
    language: null,
    folder: 'Please select a folder',
  },
  reducers: {
    update: (state, action) => {
      state = action.payload;
    },
  },
});

export const { update } = inputsSlice.actions;

export default inputsSlice.reducer;
