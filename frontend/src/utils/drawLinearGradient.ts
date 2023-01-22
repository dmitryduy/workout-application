import { ScriptableContext, ScriptableScaleContext } from 'chart.js';

type gradientSettingsType = { offset: number, color: string }[];

export const drawLineLinearGradient = (ctx: ScriptableContext<'line'>, settings: gradientSettingsType) => {
  const height = ctx.chart.height;

  const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, height);

  for (const {offset, color} of settings) {
    gradient.addColorStop(offset, color);
  }

  return gradient;
};

export const drawGridLinearGradient = (
  ctx: ScriptableScaleContext,
  settings: gradientSettingsType,
  direction?: 'x' | 'y') => {

  if (!direction) {
    direction = 'y';
  }

  const shapeOfGridLine = direction === 'y' ? ctx.scale.maxHeight : ctx.scale.maxWidth;

  const gradient = ctx.scale.ctx.createLinearGradient(
    0,
    0,
    direction === 'x' ? shapeOfGridLine : 0,
    direction === 'y' ? shapeOfGridLine : 0
  );

  for (const {offset, color} of settings) {
    gradient.addColorStop(offset, color);
  }

  return gradient;
};
