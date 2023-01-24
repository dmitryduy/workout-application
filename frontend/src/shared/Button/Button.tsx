import React, { PropsWithChildren } from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
    onClick: () => void;
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({onClick, children}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;