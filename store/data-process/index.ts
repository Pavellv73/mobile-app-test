import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    message: 'Initial data',
  },
  reducers: {
    setData(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const {setData} = dataSlice.actions;
export default dataSlice.reducer;
