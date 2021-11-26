import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store/store';
// import { CodeItem } from './CodeItem';

export enum ApiDataStatus {
  NONE = 'NONE',
  REQUESTED = 'REQUEST',
  RECEIVED = 'FETCHED',
  ERROR = 'ERROR',
}

export interface RequestParameters {
  publicationSymbol: string;
  filetype: string;
  languageCode: string;
}

export interface ApiState {
  status: ApiDataStatus;
  requestUrl: string;
  requestParameters: RequestParameters | null;
  response: string | null;
  errorString: string | null;
}

const initialState: ApiState = {
  status: ApiDataStatus.NONE,
  requestUrl: '',
  requestParameters: null,
  response: null,
  errorString: null,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    submitRequest: (state, action: PayloadAction<RequestParameters>) => {
      return {
        ...state,
        status: ApiDataStatus.REQUESTED,
        requestParameters: action.payload,
      };
    },
    receivedResponse: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        status: ApiDataStatus.RECEIVED,
        response: action.payload,
      };
    },
    receivedError: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        status: ApiDataStatus.ERROR,
        errorString: action.payload,
      };
    },
  },
});

// eslint-disable-next-line prettier/prettier
export const {
  submitRequest,
  receivedResponse,
  receivedError
} = apiSlice.actions;

export default apiSlice.reducer;
