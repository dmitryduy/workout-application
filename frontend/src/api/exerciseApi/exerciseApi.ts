import { apiFunctionQuery } from '../index';
import { HTTP } from '../../types/http';

import { IExerciseRecordsResponse, IGetAllExercisesResponse } from './exerciseApi.typings';


export const exerciseApi = {
  getExerciseRecords: apiFunctionQuery<IExerciseRecordsResponse>(HTTP.getExerciseRecords),
  getAllExercises: apiFunctionQuery<IGetAllExercisesResponse>(HTTP.getAllExercises)
};