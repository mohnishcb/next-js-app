import { MantineThemeOverride } from '@mantine/core';

const tailwindColors: Record<
  string,
  [string, string, string, string, string, string, string, string, string, string]
> = {
  blue: [
    '#E8F0FE', // 50
    '#D2E3FC', // 100
    '#A9CBF9', // 200
    '#76AAEE', // 300
    '#4285F4', // 400
    '#1A73E8', // 500
    '#1765CB', // 600
    '#144DA8', // 700
    '#123B85', // 800
    '#102B67', // 900
  ],
  black: [
    '#E6E6E6', // 50
    '#CCCCCC', // 100
    '#999999', // 200
    '#666666', // 300
    '#333333', // 400
    '#000000', // 500
    '#000000', // 600
    '#000000', // 700
    '#000000', // 800
    '#000000', // 900
  ],
  red: [
    '#FFE9E8', // 50
    '#FFC1C0', // 100
    '#FF8F8D', // 200
    '#FF5E5C', // 300
    '#E53935', // 400
    '#C62828', // 500
    '#B71C1C', // 600
    '#A11717', // 700
    '#8C1212', // 800
    '#750D0D', // 900
  ],
  green: [
    '#E7F6E8', // 50
    '#C3E8C5', // 100
    '#93D69B', // 200
    '#62C572', // 300
    '#43A047', // 400
    '#388E3C', // 500
    '#2E7D32', // 600
    '#246E28', // 700
    '#1A5C20', // 800
    '#124418', // 900
  ],
  white: [
    '#FFFFFF', // 50
    '#FFFFFF', // 100
    '#FFFFFF', // 200
    '#FFFFFF', // 300
    '#FFFFFF', // 400
    '#FFFFFF', // 500
    '#E6E6E6', // 600
    '#CCCCCC', // 700
    '#B3B3B3', // 800
    '#999999', // 900
  ],
};

const theme: MantineThemeOverride = {
  colors: tailwindColors,
  fontFamily: 'Inter, sans-serif',
};

export default theme;
