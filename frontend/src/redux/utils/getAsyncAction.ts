import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { apiFunctionMutation, apiFunctionQuery, QueryConfig } from '../../api';

export type IMutationFunction<Request, Response> = ReturnType<typeof apiFunctionMutation<Request, Response>>;
export type IQueryFunction<Response> = ReturnType<typeof apiFunctionQuery<Response>>;

interface AsyncThunkConfig {
  rejectValue: string;
}

export const getAsyncActionQuery = <TRes>(name: string, func: IQueryFunction<TRes>) =>
  createAsyncThunk<TRes, QueryConfig | undefined, AsyncThunkConfig>(name, async (config, thunkApi) => {
    try {
      const response = await func(config);
      return response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const response = e as AxiosError<{ message: string }>;
        const message = response.response?.data?.message;
        const error = typeof message === 'string' ? message : message && message[0];
        return thunkApi.rejectWithValue(error || 'Ошибка');
      }
      return thunkApi.rejectWithValue('Ошибка');
    }
  });

export const getAsyncActionMutation = <TReq, TRes>(name: string, func: IMutationFunction<TReq, TRes>) =>
  createAsyncThunk<TRes, TReq, AsyncThunkConfig>(name, async (data, thunkApi) => {
    try {
      const response = await func(data);
      return response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const response = e as AxiosError<{ message: string | string[] }>;
        const message = response.response?.data?.message;
        const error = typeof message === 'string' ? message : message && message[0];
        return thunkApi.rejectWithValue(error || 'Ошибка');
      }
      return thunkApi.rejectWithValue('Ошибка');
    }
  });