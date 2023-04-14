export interface IExerciseRecordsResponse {
  data: {
    createdAt: Date,
    reps: number[];
    weight: number[];
    mood: string[];
  }[];
  maxReps: number;
  maxWeight: number;
}

export type IGetAllExercisesResponse = {
  user: {
    id: number;
    exerciseId: number;
    date: Date;
    moods: string[];
    reps: number[];
    weights: number[];
  } | null;
  exerciseName: string;
  exerciseImage: string;
}[]