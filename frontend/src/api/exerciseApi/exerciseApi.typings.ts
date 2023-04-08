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