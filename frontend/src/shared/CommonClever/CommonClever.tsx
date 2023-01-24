import React from 'react';
import cn from 'classnames';

import { ILeafInfo } from '../../typings/global';

import styles from './CommonClever.module.scss';

interface ICommonCleverProps {
  rotate?: number;
  setType?: (type: keyof ILeafInfo) => void;
  small?: boolean;
  isActive?: boolean;
}

const CommonClever: React.FC<ICommonCleverProps> = ({rotate = 0, setType, small = false, isActive = false}) => {

  const showLeaf = (e: React.MouseEvent<HTMLSpanElement>) => {
    const element = e.target as HTMLSpanElement;
    const leafType = element.dataset.leaf as keyof ILeafInfo;
    if (leafType) {
      setType && setType(leafType);
    }
  };
  return (
    <div
      className={cn(styles.mainClover, {[styles.small]: small, [styles.active]: isActive})}
      style={{transform: `rotate(${rotate}deg)`}}
      onClick={showLeaf}>
      <span className={cn({[styles.activeLeaf]: rotate === 45})} data-leaf="reps"/>
      <span className={cn({[styles.activeLeaf]: rotate === -45})} data-leaf="weight"/>
      <span className={cn({[styles.activeLeaf]: rotate === 135})} data-leaf="mood"/>
      <span className={cn({[styles.activeLeaf]: rotate === -135})} data-leaf="approach"/>
    </div>
  );
};

export default CommonClever;