export type Point = [number, number, number];
export interface RFToolsCoordinate {
  dim: Point;
  offset: Point;
}
export function calc(builderPos: Point, p1: Point, p2: Point): RFToolsCoordinate {
  const center = [Math.ceil((p1[0] + p2[0]) / 2), Math.ceil((p1[1] + p2[1]) / 2), Math.ceil((p1[2] + p2[2]) / 2)];
  return {
    dim: [Math.abs(p1[0] - p2[0]) + 1, Math.abs(p1[1] - p2[1]) + 1, Math.abs(p1[2] - p2[2]) + 1],
    offset: [center[0] - builderPos[0], center[1] - builderPos[1], center[2] - builderPos[2]],
  };
}
