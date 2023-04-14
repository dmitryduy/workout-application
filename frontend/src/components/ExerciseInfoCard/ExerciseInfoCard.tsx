import React from 'react';

import { numberToUnitNumber } from '../../utils/numberToUnitNumber';

import styles from './ExerciseInfoCard.module.scss';

interface IExerciseInfoCartProps {
    exerciseName: string;
    reps?: number;
    img: string;
    weight?: number
}

const ExerciseInfoCard: React.FC<IExerciseInfoCartProps> = ({exerciseName, reps, img, weight}) => {

  return (
    <li className={styles.container}>
      <ul className={styles.info}>
        <li><img src={img} alt=""/></li>
        <li data-tooltip="Наименование" className={styles.exerciseName}>{exerciseName}</li>
        <li data-tooltip="Вес" className={styles.maxWeight}>{numberToUnitNumber(weight, 'weight')}</li>
        <li data-tooltip="Количество">{numberToUnitNumber(reps, 'count')}</li>
      </ul>
    </li>
  );
};

export default ExerciseInfoCard;