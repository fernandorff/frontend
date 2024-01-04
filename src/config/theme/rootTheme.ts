import { ThemeConfig } from 'antd';
import { blue, cyan } from '@ant-design/colors';
import { NEUTRAL_COLORS } from '@/constants/colors/NEUTRAL_COLORS';

export const rootTheme: ThemeConfig = {
  components: {
    Badge: {
      colorBorderBg: NEUTRAL_COLORS.transparent, // cor transparente
    },
    DatePicker: {
      controlHeightLG: 50,
    },
    Dropdown: {
      controlItemBgActive: blue[0],
    },
    Input: {
      controlHeightLG: 50,
    },
    Layout: {
      headerPadding: '0 1rem',
      headerBg: cyan[7],
    },
    Menu: {
      activeBarBorderWidth: 0,
      collapsedIconSize: 18,
      colorFillAlter: 'white',
      darkItemBg: cyan[7],
      iconSize: 18,
      itemBorderRadius: 0,
    },
    Select: {
      controlHeightLG: 50,
    },
    Table: {
      headerBg: NEUTRAL_COLORS.transparent,
      headerSplitColor: NEUTRAL_COLORS.gray4,
      colorBgContainer: NEUTRAL_COLORS.transparent,
      borderColor: NEUTRAL_COLORS.gray4,
    },
    Typography: {
      titleMarginBottom: '',
      titleMarginTop: '',
    },
  },
  token: {
    borderRadius: 1,
  },
};
