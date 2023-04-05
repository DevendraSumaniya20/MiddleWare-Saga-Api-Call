import {createSlice} from '@reduxjs/toolkit';

export const ApiSlice = createSlice({
  name: 'Api',
  initialState: {
    data: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    getFetch: state => {
      state.isLoading = true;
    },
    getSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {getFetch, getSuccess, getFail} = ApiSlice.actions;

export default ApiSlice.reducer;
