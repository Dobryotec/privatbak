import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeCurrency, fetchUserInfo } from 'services/api';

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

export const fetchChangeCurrensy = createAsyncThunk(
  'currency/changeCurrency',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await changeCurrency(credentials);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
