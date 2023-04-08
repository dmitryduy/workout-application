import { apiFunctionQuery } from '../index';
import { HTTP } from '../../types/http';

import { IExerciseRecordsResponse } from './exerciseApi.typings';


export const exerciseApi = {
  getExerciseRecords: apiFunctionQuery<IExerciseRecordsResponse>(HTTP.getExerciseRecords)
};