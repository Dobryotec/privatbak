import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchChangeCurrensy } from './thunk';

const initialState = {
  baseCurrency: '',
  result: 0,
  query: {
    to: '',
    from: '',
    amount: '',
  },
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
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchChangeCurrensy.fulfilled, (state, action) => {
        state.result = action.payload.result;
        state.query = action.payload.query;
      });
  },
});

export const currencyReducer = currencySlice.reducer;

export const { setBaseCurrency } = currencySlice.actions;
