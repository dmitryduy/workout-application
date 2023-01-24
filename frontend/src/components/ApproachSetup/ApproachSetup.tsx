import React, { useState } from 'react';

import Subtitle from '../../shared/Subtitle/Subtitle';
import Counter from '../../shared/Counter/Counter';
import Button from '../../shared/Button/Button';

import styles from './ApproachSetup.module.scss';
import { MAX_APPROACH_COUNT } from './ApproachSetup.constants';

interface IApproachSetupProps {
    prop: string
}

const ApproachSetup: React.FC<IApproachSetupProps> = ({prop}) => {
  const [approachCount, setApproachCount] = useState(0);

  const addApproach = () => {
    if (approachCount >= MAX_APPROACH_COUNT) {
      return;
    }
    setApproachCount(approachCount + 1);
  };
  return (
    <div className={styles.mainContainer}>
      <Subtitle text="Добавить тренировку"/>
      <div className={styles.container}>
        {Array(approachCount).fill(0).map((_, idx) => <div key={idx} className={styles.approachInfo}>
          <p className={styles.approachTitle}>Подход {idx + 1}</p>
          <div className={styles.counters}>
            <Counter placeholder="Повторения" max={100} min={0} changeCount={() => { console.log(1); }}/>
            <Counter placeholder="Вес(кг)" max={100} min={0} changeCount={() => { console.log(1); }}/>
          </div>
        </div>)}

      </div>
      {approachCount < MAX_APPROACH_COUNT && <Button onClick={addApproach}>Добавить подход</Button>}
      {approachCount > 0 && <Button onClick={() => { console.log(1); }}>Загрузить</Button>}
    </div>
  );
};

export default ApproachSetup;