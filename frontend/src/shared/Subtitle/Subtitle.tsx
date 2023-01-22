import React from 'react';

import styles from './Subtitle.module.scss';

interface ISubtitleProps {
    text: string;
}

const Subtitle: React.FC<ISubtitleProps> = ({text}) => {
  return (
    <h2 className={styles.heading}>
      {text}
    </h2>
  );
};

export default Subtitle;