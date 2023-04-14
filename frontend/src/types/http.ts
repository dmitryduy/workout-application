export enum HTTP {
  getExerciseRecords= '/get-exercise-data',
  signIn='/auth/login',
  getAllExercises='exercises',
}

export type QueryParams = { [key in string]: string };
