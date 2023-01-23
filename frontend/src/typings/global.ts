export interface ILeaf {
  title: string;
  unit: string | null;
  deg: number;
}

export type ILeafInfo = Record<'reps' | 'weight' | 'mood' | 'smth', ILeaf>