import { onHoverCallbackType, onHoverType } from '../LinearChart.typings';
import { DEFAULT_LINE_COLOR, DEFAULT_TICK_FONT_COLOR } from '../LnearChart.constant';

const highlightTick: onHoverCallbackType = (event, elements, chart) => {
  if (!chart.options.scales?.x?.ticks) {
    return;
  }

  if (!elements.length) {
    chart.options.scales.x.ticks.color = DEFAULT_TICK_FONT_COLOR;
    chart.update();
    return;
  }

  const length = chart.data.datasets[0].data.length;
  const activeIndex = elements[0].index;

  chart.options.scales.x.ticks.color =
    Array(length)
      .fill(DEFAULT_TICK_FONT_COLOR)
      .map((color, idx) => (idx === activeIndex ? DEFAULT_LINE_COLOR : color));

  chart.update();
};

export const onHoverCallback = (type: onHoverType): onHoverCallbackType => {
  switch (type) {
  case 'tick highlight':
    return highlightTick;
  }
};