import React, { useState } from 'react';
import { ScriptableContext } from 'chart.js';
import cn from 'classnames';

import Layout from '../../shared/Layout/Layout';
import Subtitle from '../../shared/Subtitle/Subtitle';
import LinearChart from '../../shared/LinearChart/LinearChart';
import { drawGridLinearGradient, drawLineLinearGradient } from '../../utils/drawLinearGradient';
import ExerciseInfoCard from '../../components/ExerciseInfoCard/ExerciseInfoCard';
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';
import ExtraStatisticInfo from '../../components/ExtraStatisticInfo/ExtraStatisticInfo';

import styles from './StatisticPage.module.scss';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const StatisticPage: React.FC = () => {
  const [isExtraStatistic, setIsExtraStatistic] = useState(false);
  return (
    <Layout title="Статистика">
      <div className={cn(styles.sides, {[styles.scrollToRight]: isExtraStatistic})}>
        <div className={styles.leftSide}>
          <Subtitle text="Последняя активность"/>
          <LinearChart
            onHoverType="tick highlight"
            tooltipSettings={{
              yAlign: 'bottom',
              displayColors: false,
              callbacks: {
                title: () => '',
                label: label => `Количество: ${label.formattedValue}`
              }
            }}
            scalesSettings={{
              x: {
                ticks: {
                  maxRotation: 0,
                  autoSkip: false,
                  color: '#ababb3',
                  padding: 10,
                  font: {weight: '600'}
                },
                grid: {
                  drawTicks: false,
                  lineWidth: 2,
                  color: ctx => {
                    return drawGridLinearGradient(ctx, [
                      {offset: 0, color: 'rgba(230,230,230, .05)'},
                      {offset: .5, color: 'rgba(230,230,230, .3)'},
                      {offset: 1, color: 'rgba(230,230,230, .5)'},
                    ]);
                  },

                }
              },
              y: {
                border: {
                  display: false
                },
                ticks: {
                  display: false
                },
                beginAtZero: true,
                grid: {
                  display: false
                }
              },
            }
            }
            labels={labels}
            dataSettings={{
              datasets: [{
                backgroundColor: (ctx: ScriptableContext<'line'>) => {
                  return drawLineLinearGradient(ctx, [
                    {offset: 0, color: 'rgba(243,146,86, .3)'},
                    {offset: .6, color: 'rgba(243,146,86, .1)'},
                    {offset: 1, color: 'rgba(230,230,230, .1)'}]);
                },
                data: [20, 15, 21, 17, 18, 14, 23],
              }]
            }}/>
          <ul className={styles.exerciseInfo} onClick={() => setIsExtraStatistic(true)}>
            <li data-tooltip="Наименование" className={styles.exerciseItem}>Какое-то jxtym ckj;yjt ghzvj jxtym</li>
            <li data-tooltip="Вес" className={styles.exerciseItem}>20</li>
            <li data-tooltip="Количество" className={styles.exerciseItem}>20</li>
            <li className={styles.exerciseItem}><ArrowIcon/></li>
          </ul>

          <Subtitle text="Все упражнения"/>
          <ul className={styles.exerciseCards}>
            <ExerciseInfoCard
              exerciseName="какое" weight={10} lastCount={20} img="https://cdn.lifehacker.ru/wp-content/uploads/2020/09/Trenirovka-dnya-4-vida-otzhimanij-dlya-polnoj-prokachki-ruk-i-grudi_1599604970.jpg"/>
            <ExerciseInfoCard
              exerciseName="Отжимания" weight={10} lastCount={20} img="https://cdn.lifehacker.ru/wp-content/uploads/2020/09/Trenirovka-dnya-4-vida-otzhimanij-dlya-polnoj-prokachki-ruk-i-grudi_1599604970.jpg"/>
            <ExerciseInfoCard
              exerciseName="Отжимания С обратным хватом"  lastCount={20} img="https://cdn.lifehacker.ru/wp-content/uploads/2020/09/Trenirovka-dnya-4-vida-otzhimanij-dlya-polnoj-prokachki-ruk-i-grudi_1599604970.jpg"/>

          </ul>
        </div>
        <div className={styles.rightSide}>
          <ExtraStatisticInfo onBack={() => setIsExtraStatistic(false)}/>
        </div>
      </div>
    </Layout>
  );
};

export default StatisticPage;