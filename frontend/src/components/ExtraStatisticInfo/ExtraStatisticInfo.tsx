import React, { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import Clover from '../../shared/Clover/Clover';
import CommonClever from '../../shared/CommonClever/CommonClever';
import ApproachSetup from '../ApproachSetup/ApproachSetup';

import styles from './ExtraStatisticInfo.module.scss';


interface IExtraStatisticInfoProps {
  onBack: () => void;
}

const ExtraStatisticInfo: React.FC<IExtraStatisticInfoProps> = ({onBack}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={styles.title} onClick={onBack}>
        <ArrowIcon/>
        <h3>Наименование упражнения</h3>
      </div>
      <h4 className={styles.date}>Понедельник, 23 января 2023</h4>
      <ul className={styles.dataList}>
        {Array(10).fill(0).map((_, index) =>
          <li className={styles.dataItem} key={index} onClick={() => setActiveIndex(index)}>
            <p>20.20.2022</p>
            <CommonClever small isActive={activeIndex === index}/>
          </li>)}
      </ul>
      <Clover
        weight={{max: 100, current: [40, 4, 5]}}
        mood={{current: ['Крутой', 'dkj', 'kjdf']}}
        reps={{max: 20, current: [10, 12, 12]}}
        approach={{current: [4]}}
      />
      <ApproachSetup prop="3"/>
    </>
  );
};

export default ExtraStatisticInfo;