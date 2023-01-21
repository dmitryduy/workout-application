import React from 'react';
import cn from 'classnames';

import {ReactComponent as StatisticSvg} from '../../assets/icons/statistic.svg';
import {ReactComponent as MainSvg} from '../../assets/icons/main.svg';
import {ReactComponent as FireSvg} from '../../assets/icons/fire.svg';
import {ReactComponent as EatingSvg} from '../../assets/icons/eating.svg';
import {ReactComponent as SettingsSvg} from '../../assets/icons/settings.svg';

import styles from './BottomMenu.module.scss';


const BottomMenu: React.FC = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li className={styles.item}><MainSvg/></li>
        <li className={styles.item}><StatisticSvg/></li>
        <li className={cn(styles.item, styles.mainIcon)}><FireSvg/></li>
        <li className={styles.item}><EatingSvg/></li>
        <li className={styles.item}><SettingsSvg/></li>
      </ul>
    </nav>
  );
};

export default BottomMenu;