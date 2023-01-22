import React from 'react';
import { ChartProps, Line } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement, ScaleChartOptions,
  Tooltip, TooltipOptions
} from 'chart.js';
import { DeepPartial } from 'chart.js/dist/types/utils';

import { DEFAULT_DATASET_SETTINGS, DEFAULT_OPTIONS } from './LnearChart.constant';
import { onHoverType } from './LinearChart.typings';
import { onHoverCallback } from './helpers/onHoverCallback';

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

interface ILinearChartProps {
  onHoverType: onHoverType;
  hideLegend?: boolean;
  tooltipSettings?: DeepPartial<TooltipOptions>;
  scalesSettings?: DeepPartial<ScaleChartOptions['scales']>;
  labels: string[];
  dataSettings: Omit<ChartProps['data'], 'labels'>;
}

const LinearChart: React.FC<ILinearChartProps> = ({
  labels,
  dataSettings,
  onHoverType,
  hideLegend = true,
  tooltipSettings = {},
  scalesSettings = {}
}) => {
  return (
    <Line options={{
      ...DEFAULT_OPTIONS,
      onHover: onHoverCallback(onHoverType),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      scales: scalesSettings,
      plugins: {
        legend: {
          display: !hideLegend,
        },
        tooltip: tooltipSettings
      }
    }} data={{
      labels,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      datasets: [{...DEFAULT_DATASET_SETTINGS, ...dataSettings.datasets[0]}]
    }}/>
  );
};

export default LinearChart;