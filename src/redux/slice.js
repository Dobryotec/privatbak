import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './thunk';

const initialState = {
  baseCurrency: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducer: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});

export const currencyReducer = currencySlice.reducer;

export const { setBaseCurrency } = currencySlice.actions;
