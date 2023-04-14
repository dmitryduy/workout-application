import React from 'react';

import styles from './Delimiter.module.scss';

interface IDelimiterProps {
    text: string;
}

const Delimiter: React.FC<IDelimiterProps> = ({text}) => {
  return (
    <div className={styles.delimiter}>
      {text}
    </div>
  );
};

export default Delimiter;