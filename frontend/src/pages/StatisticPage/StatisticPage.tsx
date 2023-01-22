import React from 'react';
import { ScriptableContext } from 'chart.js';

import Layout from '../../shared/Layout/Layout';
import Subtitle from '../../shared/Subtitle/Subtitle';
import LinearChart from '../../shared/LinearChart/LinearChart';
import { drawGridLinearGradient, drawLineLinearGradient } from '../../utils/drawLinearGradient';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const StatisticPage: React.FC = () => {
  return (
    <Layout title="Статистика">
      <Subtitle text="Последняя активность"/>
      <LinearChart onHoverType="tick highlight"
        tooltipSettings={{
          yAlign: 'bottom',
          displayColors: false,
          callbacks: {
            title: () => '',
            label: label => `Количество: ${label.formattedValue}`
          }
        }}
        scalesSettings={
          {
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
        } labels={labels} dataSettings={{
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
    </Layout>
  );
};

export default StatisticPage;