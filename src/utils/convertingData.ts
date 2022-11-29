import { BaseEntity } from '../types/BaseEntity';

export const convertArrayToMap = <T extends BaseEntity>(
  arr: Array<T>
): Record<string, T> => {
  return arr.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.id]: curr,
    };
  }, {});
};
