import React from 'react';

import useInput from '../../hooks/useInput';

import styles from './Input.module.scss';

interface IInputProps {
    placeholder: string;
    type: 'password' | 'text';
    name: string;
    labelText: string;
    value: string;
    setValue: ReturnType<typeof useInput>[1]
}

const Input: React.FC<IInputProps> = ({placeholder, type, name, labelText, value, setValue}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {labelText}
      </label>
      <input
        value={value}
        onChange={setValue}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
