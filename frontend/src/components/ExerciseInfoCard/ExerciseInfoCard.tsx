import React from 'react';

import styles from './ExerciseInfoCard.module.scss';

interface IExerciseInfoCartProps {
    exerciseName: string;
    lastCount: number;
    img: string;
    weight?: number
}

const ExerciseInfoCard: React.FC<IExerciseInfoCartProps> = ({exerciseName, lastCount, img, weight}) => {
  return (
    <li className={styles.container}>
      <ul className={styles.info}>
        <li><img src={img} alt=""/></li>
        <li data-tooltip="Наименование" className={styles.exerciseName}>{exerciseName}</li>
        {weight && <li data-tooltip="Вес" className={styles.maxWeight}>{weight}кг</li>}
        <li data-tooltip="Количество">{lastCount}</li>
      </ul>
    </li>
  );
};

export default ExerciseInfoCard;