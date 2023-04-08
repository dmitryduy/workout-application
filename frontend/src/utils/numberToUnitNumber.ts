type IUnit = 'weight' | 'count';

const unitObj: Record<IUnit, string> = {
  weight: 'кг',
  count: ''
};

export const numberToUnitNumber = (number: number | null | undefined, unit: IUnit) => {
  return number ? number + unitObj[unit] : '-';
};
