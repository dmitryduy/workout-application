import React from 'react';

import styles from './ExerciseInfoCard.module.scss';

interface IExerciseInfoCartProps {
    exerciseName: string;
    lastCount: number;
    maxCount: number;
    img: string;
}

const ExerciseInfoCard: React.FC<IExerciseInfoCartProps> = ({exerciseName, maxCount, lastCount, img}) => {
  return (
    <li className={styles.container}>
      <ul className={styles.info}>
        <li><img src={img} alt=""/></li>
        <li data-tooltip="Наименование" className={styles.exerciseName}>{exerciseName}</li>
        <li data-tooltip="Макс." className={styles.maxCount}>{maxCount}</li>
        <li data-tooltip="Последнее">{lastCount}</li>
      </ul>
    </li>
  );
};

export default ExerciseInfoCard;