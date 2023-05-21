import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserInfo } from 'services/api';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/baseCurrency',
  async (crd, { rejectWithValue }) => {
    try {
      return await fetchUserInfo(crd);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
