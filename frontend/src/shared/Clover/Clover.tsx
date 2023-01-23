import React, { useState } from 'react';

import CommonClever from '../CommonClever/CommonClever';
import { ILeafInfo } from '../../typings/global';

import styles from './Clover.module.scss';

const leafInfo: ILeafInfo = {
  reps: {
    title: 'Количество',
    unit: 'раз',
    deg: 45
  },
  weight: {
    title: 'Вес',
    unit: 'Кг',
    deg: -45,
  },
  mood: {
    title: 'Настроение',
    unit: null,
    deg: 135
  },
  smth: {
    title: 'Что то',
    unit: null,
    deg: -135
  }
};



interface ICloverProps {
  mood: {
    current: string;
  };
  reps: {
    current: number;
    max: number;
  };
  weight: {
    current: number;
    max: number;
  };
  smth: {
    current: string;
  };
}

const Clover: React.FC<ICloverProps> = props => {
  const [type, setType] = useState<keyof ILeafInfo>();
  const rotate = type ? leafInfo[type].deg : 0;

  return (
    <div className={styles.container}>
      <CommonClever rotate={rotate} setType={setType}/>
      <div className={styles.infoClover}>
        <div className={styles.colorInfo}>
          <span>Количество</span><span>Вес(кг)</span><span>Настроение</span><span>Еще что-то</span>
        </div>
        {type && <div className={styles.moreInfo}>
          <h4>{leafInfo[type].title}:</h4>
          <p>
            <span className={styles.currentValue}>{props[type].current}</span>
            {(type === 'reps' || type === 'weight') &&
            <span className={styles.maxValue}>/{props[type].max}&nbsp;</span>}
            {leafInfo[type].unit}
          </p>
        </div>}
      </div>
    </div>
  );
};

export default Clover;