import React, { useState } from 'react';

import styles from './Counter.module.scss';

interface ICounterProps {
    changeCount: (count: number) => void;
    placeholder: string;
    max: number;
    min: number;
}

const Counter: React.FC<ICounterProps> = ({changeCount, placeholder, min, max}) => {
  const [value, setValue] = useState<string>('');

  const increment = () => {
    const numberValue = +value;
    if (numberValue >= max) {
      return;
    }
    setValue((numberValue + 1).toString());
  };

  const decrement = () => {
    const numberValue = +value;
    if (numberValue <= min + 1) {
      setValue('');
      return;
    }

    setValue((numberValue - 1).toString());
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={decrement}>-</button>
      <input
        value={value}
        onChange={e => setValue(!(+e.target.value > max) && !(+e.target.value < min) ? e.target.value : value)}
        type="number"
        placeholder={placeholder}
        className={styles.counter}
      />
      <button className={styles.button} onClick={increment}>+</button>
    </div>
  );
};

export default Counter;