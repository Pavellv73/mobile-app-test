import {configureStore} from '@reduxjs/toolkit';
import dataReducer from './data-process/';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
