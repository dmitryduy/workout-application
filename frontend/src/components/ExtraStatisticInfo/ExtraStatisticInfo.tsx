import React from 'react';
import cn from 'classnames';

import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';

import styles from './ExtraStatisticInfo.module.scss';


interface IExtraStatisticInfoProps {
    onBack: () => void
}

const ExtraStatisticInfo: React.FC<IExtraStatisticInfoProps> = ({onBack}) => {
  return (
    <>
      <div className={styles.title} onClick={onBack}>
        <ArrowIcon/>
        <h3>Наименование упражнения</h3>
      </div>

      <ul className={styles.dataList}>
        <li className={styles.heading}>
          <p className={styles.headingItem}>Дата</p>
          <p className={styles.headingItem}>Количество</p>
          <p className={styles.headingItem}>Вес(кг)</p>
        </li>
        <li className={styles.dataItem}>
          <p className={styles.date}>20.20.2022</p>
          <span className={styles.background}>
            <span style={{width: '50%'}} className={cn(styles.data, styles.reps)}/>
          </span>
          <span className={styles.background}>
            <span style={{width: '50%'}} className={cn(styles.weight, styles.data)}>
              20
            </span>
          </span>
        </li>
        <li className={styles.dataItem}>
          <p className={styles.date}>20.20.2022</p>
          <span className={styles.background}>
            <span style={{width: '50%'}} className={cn(styles.data, styles.reps)}/>
          </span>
          <span className={styles.background}>
            <span style={{width: '50%'}} className={cn(styles.weight, styles.data)}>
              20
            </span>
          </span>
        </li>
        <li className={styles.dataItem}>
          <p className={styles.date}>20.20.2022</p>
          <span className={styles.background}>
            <span style={{width: '50%'}} className={cn(styles.data, styles.reps)}/>
          </span>
          <span className={styles.background}>
            <span style={{width: '50%'}} className={cn(styles.weight, styles.data)}>
              20
            </span>
          </span>
        </li>
        <li className={styles.dataItem}>
          <p className={styles.date}>20.20.2022</p>
          <span className={styles.background}>
            <span style={{width: '50%'}} className={cn(styles.data, styles.reps)}/>
          </span>
          <span className={styles.background}>
            <span style={{width: '50%'}} className={cn(styles.weight, styles.data)}>
              20
            </span>
          </span>
        </li>
      </ul>
    </>
  );
};

export default ExtraStatisticInfo;