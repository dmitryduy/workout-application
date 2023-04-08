import React, { useEffect, useState } from 'react';

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
  approach: {
    title: 'Количество подходов',
    unit: null,
    deg: -135
  }
};



interface ICloverProps {
  mood: {
    current: string[];
  };
  reps: {
    current: number[];
    max: number;
  };
  weight: {
    current: number[];
    max: number;
  };
  approach: {
    current: [number];
  };
}

const Clover: React.FC<ICloverProps> = props => {
  const [type, setType] = useState<keyof ILeafInfo | null>(null);
  const rotate = type ? leafInfo[type].deg : 0;

  useEffect(() => {
    setType(null);
  }, [props.reps]);

  return (
    <div className={styles.container}>
      <CommonClever rotate={rotate} setType={setType}/>
      <div className={styles.infoClover}>
        <div className={styles.colorInfo}>
          <span>Количество</span><span>Вес(кг)</span><span>Настроение</span><span>Подходы</span>
        </div>
        {type && <div className={styles.moreInfo}>
          <h4>{leafInfo[type].title}:</h4>
          {props[type].current.map((number, idx) => <p key={idx}>
            {props[type].current[idx]}
            {(type === 'reps' || type === 'weight') &&
            <span className={styles.maxValue}>/{props[type].max}&nbsp;</span>}
            {leafInfo[type].unit}
          </p>) }
        </div>}
      </div>
    </div>
  );
};

export default Clover;