import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from '../model/inputsSlice';

export default configureStore({
  reducer: {
    inputs: inputsReducer,
  },
});
