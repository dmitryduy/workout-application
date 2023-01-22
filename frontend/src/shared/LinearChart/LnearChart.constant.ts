import { ChartOptions } from 'chart.js';

export const DEFAULT_OPTIONS: ChartOptions = {
  interaction: {
    intersect: false
  },
  responsive: true
};

export const DEFAULT_DATASET_SETTINGS = {
  borderColor: '#fe8c3f',
  tension: .25,
  fill: true,
  pointBackgroundColor: 'transparent',
  pointBorderColor: 'transparent',
  pointHoverBackgroundColor: '#ff8b43',
  pointRadius: 10,
  pointHoverRadius: 10,
  pointBorderWidth: 7,
  pointHoverBorderWidth: 7,
  pointHoverBorderColor: '#fff',
  data: []
};

export const DEFAULT_TICK_FONT_COLOR = '#ababb3';
export const DEFAULT_LINE_COLOR = '#fe8c3f';