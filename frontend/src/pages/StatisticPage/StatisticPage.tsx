import React, { useEffect, useState } from 'react';
import { ScriptableContext } from 'chart.js';
import cn from 'classnames';
import dayjs from 'dayjs';

import Layout from '../../shared/Layout/Layout';
import Subtitle from '../../shared/Subtitle/Subtitle';
import LinearChart from '../../shared/LinearChart/LinearChart';
import { drawGridLinearGradient, drawLineLinearGradient } from '../../utils/drawLinearGradient';
import ExerciseInfoCard from '../../components/ExerciseInfoCard/ExerciseInfoCard';
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';
import ExtraStatisticInfo from '../../components/ExtraStatisticInfo/ExtraStatisticInfo';
import { numberToUnitNumber } from '../../utils/numberToUnitNumber';
import { useAppDispatch } from '../../hooks/useRedux';
import { getAllExerciseAction, getExerciseRecordsAction } from '../../redux/reducers/rootReducer';
import { IExerciseRecordsResponse, IGetAllExercisesResponse } from '../../api/exerciseApi/exerciseApi.typings';
import BottomMenu from '../../components/BottomMenu/BottomMenu';

import styles from './StatisticPage.module.scss';


export interface IExerciseResponse {
  id: string;
  title: string;
  image: string;
  lastWeight: number;
  lastReps: number;
  chartData: {
    date: Date;
    reps: number;
  }[];
}


const StatisticPage: React.FC = () => {
  const [isExtraStatistic, setIsExtraStatistic] = useState(false);
  const [progress, setProgress] = useState<null | 'done' | 'error' | 'loading'>(null);
  const [activeExercise, setActiveExercise] = useState<IExerciseResponse | null>(null);
  const [data, setData] = useState<IGetAllExercisesResponse | null>(null);
  const [exerciseRecords, setExerciseRecords] = useState<IGetAllExercisesResponse | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setProgress('loading');
    dispatch(getAllExerciseAction())
      .unwrap()
      .then(data => {
        setData(data);
        setProgress('done');
      })
      .catch(e => console.log(e));
  }, []);

  if (progress === 'error') {
    return <div>Error</div>;
  }
  if (progress !== 'done') {
    return <div>loading</div>;
  }

  const chartData = activeExercise?.chartData
    .map(d => ({
      label: dayjs(d.date).format('D MMM'),
      reps: d.reps
    }));

  /*const openExtendedInfo = () => {
    dispatch(getExerciseRecordsAction({params: {id: activeExercise?.id || ''}}))
      .unwrap()
      .then(setExerciseRecords)
      .catch(alert);
    setIsExtraStatistic(true);
  };*/
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

                beginAtZero: true,
                grid: {
                  display: false
                }
              },
            }
            }
            labels={chartData ? chartData.map(data => data.label) : []}
            dataSettings={{
              datasets: [{
                backgroundColor: (ctx: ScriptableContext<'line'>) => {
                  return drawLineLinearGradient(ctx, [
                    {offset: 0, color: 'rgba(243,146,86, .3)'},
                    {offset: .6, color: 'rgba(243,146,86, .1)'},
                    {offset: 1, color: 'rgba(230,230,230, .1)'}]);
                },
                data: chartData ? chartData.map(data => data.reps) : [],
              }]
            }}/>
          <ul className={styles.exerciseInfo} onClick={() => 3}>
            <li data-tooltip="Наименование" className={styles.exerciseItem}>{activeExercise?.title}</li>
            <li data-tooltip="Вес" className={styles.exerciseItem}>
              {numberToUnitNumber(activeExercise?.lastWeight, 'weight')}
            </li>
            <li data-tooltip="Количество" className={styles.exerciseItem}>
              {numberToUnitNumber(activeExercise?.lastReps, 'count')}
            </li>
            <li className={styles.exerciseItem}><ArrowIcon/></li>
          </ul>

          <Subtitle text="Все упражнения"/>
          <ul className={styles.exerciseCards}>
            {data?.map(info => <ExerciseInfoCard
              key={info.user?.id}
              exerciseName={info.exerciseName}
              weight={info.user?.weights[0]}
              reps={info.user?.reps[0]}
              img={info.exerciseImage}
            />
            )}
          </ul>
        </div>
        <div className={styles.rightSide}>
          {/*<ExtraStatisticInfo
            data={exerciseRecords?.data}
            maxReps={exerciseRecords?.maxReps}
            maxWeight={exerciseRecords?.maxWeight}
            title={activeExercise?.title || ''}
            onBack={() => setIsExtraStatistic(false)}
          />*/}
        </div>
      </div>
      <BottomMenu/>
    </Layout>
  );
};

export default StatisticPage;