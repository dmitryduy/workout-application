import { ActiveElement, Chart, ChartEvent } from 'chart.js';

export type onHoverType = 'tick highlight';

export type onHoverCallbackType = (event: ChartEvent, elements: ActiveElement[], chart: Chart) => void;