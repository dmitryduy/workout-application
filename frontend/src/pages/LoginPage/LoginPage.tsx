import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Layout from '../../shared/Layout/Layout';
import Input from '../../shared/Input/Input';
import useInput from '../../hooks/useInput';
import Button from '../../shared/Button/Button';
import Delimiter from '../../shared/Delimiter/Delimiter';
import SocialLinks from '../../shared/SocialLinks/SocialLinks';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { signIn } from '../../redux/reducers/userReducer';
import { storage } from '../../utils/storage';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const [login, setLogin] = useInput('');
  const [password, setPassword] = useInput('');
  const dispatch = useAppDispatch();
  const userLogin = useAppSelector(state => state.userReducer.login);
  const navigate = useNavigate();

  const onSignIn = () => {
    dispatch(signIn({login, password}))
      .unwrap()
      .then(({token}) => storage('workout-auth').setItem(token));
  };

  useEffect(() => {
    if (userLogin) {
      navigate('/statistic');
    }
  }, [userLogin]);

  return (
    <Layout title="Вход">
      <div className={styles.container}>
        <Input
          placeholder="Логин"
          type="text"
          name="login"
          labelText="Введите логин"
          value={login}
          setValue={setLogin}
        />
        <Input
          placeholder="Пароль"
          type="password"
          name="password"
          labelText="Введите пароль"
          value={password}
          setValue={setPassword}
        />
        <Button onClick={onSignIn}>Войти</Button>
        <Delimiter text="или"/>
        <SocialLinks/>
        <p className={styles.linkContainer}>Нет аккаунта?&nbsp;
          <Link className={styles.link} to="/register">Создать новый аккаунт</Link>
        </p>
      </div>
    </Layout>
  );
};

export default LoginPage;
