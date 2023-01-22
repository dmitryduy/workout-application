import React from 'react';

import styles from './App.module.scss';
import BottomMenu from './components/BottomMenu/BottomMenu';
import StatisticPage from './pages/StatisticPage/StatisticPage';

const App = () => {
  return <div className={styles.container}>
    <div className={styles.content}>
      <StatisticPage/>
    </div>
    <BottomMenu/>
  </div>;
};
export default App;
