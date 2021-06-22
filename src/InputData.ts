import { isArray, hasProperty } from '../lib/util';

export type InputData = {
  builder: [number, number, number];
  p1: [number, number, number];
  p2: [number, number, number];
};
export function isInputData(x: unknown): x is InputData {
  return (
    !hasProperty(x, 'builder', 'p1', 'p2') ||
    !isArray(x.builder) ||
    !x.builder.every((e): e is number => typeof e === 'number') ||
    !isArray(x.p1) ||
    !x.p1.every((e): e is number => typeof e === 'number') ||
    !isArray(x.p2) ||
    !x.p2.every((e): e is number => typeof e === 'number')
  );
}
