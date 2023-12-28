// Enum.ts
export const PositionEnum = {
  FRONT_END: 'Front End',
  BACK_END: 'Back End',
  FULL_STACK: 'Full Stack',
} as const;

export type Position = keyof typeof PositionEnum;
export type PositionValue = (typeof PositionEnum)[Position];

export const PositionValueEnum: Record<number, PositionValue> = {
  1: PositionEnum.FRONT_END,
  2: PositionEnum.BACK_END,
  3: PositionEnum.FULL_STACK,
};
