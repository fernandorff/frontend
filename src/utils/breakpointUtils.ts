type BreakpointSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined;

const breakpointsOrder: BreakpointSizes[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
];

export function isBreakpointUp(
  breakpoint: BreakpointSizes,
  currentBreakpoint: BreakpointSizes,
): boolean {
  const breakpointIndex = breakpointsOrder.indexOf(breakpoint);
  const currentBreakpointIndex = breakpointsOrder.indexOf(currentBreakpoint);

  return currentBreakpointIndex >= breakpointIndex;
}

export function isBreakpointDown(
  breakpoint: BreakpointSizes,
  currentBreakpoint: BreakpointSizes,
): boolean {
  const breakpointIndex = breakpointsOrder.indexOf(breakpoint);
  const currentBreakpointIndex = breakpointsOrder.indexOf(currentBreakpoint);

  return currentBreakpointIndex <= breakpointIndex;
}
