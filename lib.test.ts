import { calc, Point, RFToolsCoordinate } from './lib';
const builderPos: Point = [-293, 63, 204];
type Input = [Point, Point];
type Case = { input: Input; expected: RFToolsCoordinate };
describe('calc', () => {
  const cases: Case[] = [
    {
      input: [
        [-287, 62, 175],
        [-345, 65, 225],
      ],
      expected: { dim: [59, 4, 51], offset: [-23, 1, -4] },
    },
    {
      input: [
        [-293, 63, 200],
        [-292, 63, 202],
      ],
      expected: { dim: [2, 1, 3], offset: [1, 0, -3] },
    },
    {
      input: [
        [-297, 62, 200],
        [-295, 62, 204],
      ],
      expected: { dim: [3, 1, 5], offset: [-3, -1, -2] },
    },
  ];
  for (const c of cases) {
    const caseNameBase = `[${c.input[0].toString()}] [${c.input[1].toString()}]`;
    it(`${caseNameBase}`, () => {
      const re = calc(builderPos, c.input[0], c.input[1]);
      expect(re).toEqual(c.expected);
    });
    it(`${caseNameBase}-invert`, () => {
      const re = calc(builderPos, c.input[1], c.input[0]);
      expect(re).toEqual(c.expected);
    });
  }
});
