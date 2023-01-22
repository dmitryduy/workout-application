import React from 'react';

import styles from './ExerciseInfoCard.module.scss';

interface IExerciseInfoCartProps {
    exerciseName: string;
    firstDate: string;
    lastDate: string;
    firstDateCount: number;
    lastDateCount: number;
    maxCount: number;
}

const ExerciseInfoCard: React.FC<IExerciseInfoCartProps> = ({
  exerciseName,
  maxCount,
  lastDateCount,
  firstDateCount,
  lastDate,
  firstDate}) => {
  return (
    <li className={styles.container}>
      <h3>{exerciseName}</h3>
      <ul className={styles.info}>
        <li>Старт: {firstDate}</li>
        <li>Количество: {firstDateCount}</li>
        <li>Текущий: {lastDate}</li>
        <li>Количество: {lastDateCount}</li>
        <li>Макс.: {maxCount}</li>
      </ul>
    </li>
  );
};

export default ExerciseInfoCard;