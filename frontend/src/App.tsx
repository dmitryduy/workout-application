import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import styles from './App.module.scss';
import StatisticPage from './pages/StatisticPage/StatisticPage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  return <div className={styles.container}>
    <div className={styles.content}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/statistic" element={<StatisticPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </div>;
};
export default App;
