export type Point = [number, number, number];
export interface RFToolsCoordinate {
  dim: Point;
  offset: Point;
}
export function calc(builderPos: Point, p1: Point, p2: Point): RFToolsCoordinate {
}
