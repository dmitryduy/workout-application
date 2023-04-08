import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import Clover from '../../shared/Clover/Clover';
import CommonClever from '../../shared/CommonClever/CommonClever';
import ApproachSetup from '../ApproachSetup/ApproachSetup';
import { IDataWithDate } from '../../typings/global';

import styles from './ExtraStatisticInfo.module.scss';


interface IExtraStatisticInfoProps {
  onBack: () => void;
  title: string;
  data?: IDataWithDate[];
  maxReps?: number;
  maxWeight?: number;
}

const ExtraStatisticInfo: React.FC<IExtraStatisticInfoProps> = ({onBack, title, data, maxReps, maxWeight}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [title]);

  if (!data) {
    return <div>Loading</div>;
  }

  const currentRecord = data[activeIndex];

  return (
    <>
      <div className={styles.title} onClick={onBack}>
        <ArrowIcon/>
        <h3>{title}</h3>
      </div>
      <h4 className={styles.date}>{dayjs(currentRecord.createdAt).locale('ru').format('dddd, D MMMM YYYY')}</h4>
      <ul className={styles.dataList}>
        {data.map((_, index) =>
          <li className={styles.dataItem} key={index} onClick={() => setActiveIndex(index)}>
            <p>{dayjs(data[activeIndex].createdAt).locale('ru').format('D.MM.YY')}</p>
            <CommonClever small isActive={activeIndex === index}/>
          </li>)}
      </ul>
      <Clover
        weight={{max: maxWeight!, current: currentRecord.weight}}
        mood={{current: currentRecord.mood}}
        reps={{max: maxReps!, current: currentRecord.reps}}
        approach={{current: [Math.max(currentRecord.reps.length, currentRecord.weight.length)]}}
      />
      <ApproachSetup prop="3"/>
    </>
  );
};

export default ExtraStatisticInfo;