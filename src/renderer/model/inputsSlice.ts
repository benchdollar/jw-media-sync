import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { CodeItem } from './CodeItem';
import { languages, filetypes } from './Data';

// type of the slice state
export interface InputsState {
  publicationSymbol: CodeItem | null;
  filetype: string;
  language: CodeItem;
  folder: string;
}

const initialState: InputsState = {
  publicationSymbol: null,
  filetype: filetypes[0],
  language: languages[0],
  folder: '',
};

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    update: (_state, action: PayloadAction<InputsState>) => {
      return action.payload;
    },
    setPublicationSymbol: (state, action: PayloadAction<CodeItem>) => {
      return {
        ...state,
        publicationSymbol: action.payload,
      };
    },
    setFiletype: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        filetype: action.payload,
      };
    },
    setLanguageMepsCode: (state, action: PayloadAction<CodeItem>) => {
      return {
        ...state,
        language: action.payload,
      };
    },
    setFolder: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        folder: action.payload,
      };
    },
  },
});

export const {
  update,
  setPublicationSymbol,
  setFiletype,
  setLanguageMepsCode,
  setFolder,
} = inputsSlice.actions;

export default inputsSlice.reducer;
