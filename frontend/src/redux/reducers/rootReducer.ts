import { combineReducers } from '@reduxjs/toolkit';

import { getAsyncActionQuery } from '../utils/getAsyncAction';
import { exerciseApi } from '../../api/exerciseApi/exerciseApi';

import { userReducer } from './userReducer';

export const getExerciseRecordsAction = getAsyncActionQuery('getExerciseRecords', exerciseApi.getExerciseRecords);
export const getAllExerciseAction = getAsyncActionQuery('getAll', exerciseApi.getAllExercises);

export const rootReducer = combineReducers({
  userReducer
});