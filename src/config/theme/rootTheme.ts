import { ThemeConfig } from 'antd';
import { blue, cyan } from '@ant-design/colors';

export const rootTheme: ThemeConfig = {
  components: {
    Badge: {
      colorBorderBg: '#00000000', // cor transparente
    },
    DatePicker: {
      controlHeightLG: 50,
    },
    Dropdown: {
      controlItemBgActive: blue[0], // cor azul claro
    },
    Select: {
      controlHeightLG: 50,
    },
    Input: {
      controlHeightLG: 50,
    },
    Layout: {
      headerPadding: '0 1rem',
      headerBg: cyan[7], // cor oficial detran
    },
    Menu: {
      activeBarBorderWidth: 0,
      collapsedIconSize: 18,
      colorFillAlter: 'white',
      darkItemBg: cyan[7],
      iconSize: 18,
      itemBorderRadius: 0, // branco
    },
  },
  token: {
    borderRadius: 4,
  },
};
