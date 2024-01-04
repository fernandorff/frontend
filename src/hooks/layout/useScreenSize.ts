import { useBreakpoint } from '@ant-design/pro-utils';

export type ScreenSize = 'small' | 'medium' | 'large';

export const SMALL: ScreenSize = 'small';
export const MEDIUM: ScreenSize = 'medium';
export const LARGE: ScreenSize = 'large';

export function useScreenSize(): ScreenSize {
  const breakpoint = useBreakpoint() as string;

  if (['xs', 'sm'].includes(breakpoint)) {
    return SMALL;
  }

  if (['md', 'lg'].includes(breakpoint)) {
    return MEDIUM;
  }

  return LARGE;
}
