export interface ILeaf {
  title: string;
  unit: string | null;
  deg: number;
}

export type ILeafInfo = Record<'reps' | 'weight' | 'mood' | 'approach', ILeaf>;

export interface IExerciseData {
  reps: number[];
  weight: number[];
  mood: string[];
}


export interface IDataWithDate extends IExerciseData{
  createdAt: Date;
}