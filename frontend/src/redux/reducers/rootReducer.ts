import { combineReducers } from '@reduxjs/toolkit';

import { getAsyncActionQuery } from '../utils/getAsyncAction';
import { exerciseApi } from '../../api/exerciseApi/exerciseApi';

export const getExerciseRecordsAction = getAsyncActionQuery('getExerciseRecords', exerciseApi.getExerciseRecords);

export const rootReducer = combineReducers({
});