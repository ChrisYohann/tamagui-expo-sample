import { shorthands } from '@tamagui/shorthands';
import { color, radius, zIndex, size } from '@tamagui/theme-base';
import { createTamagui, createTokens, createFont } from 'tamagui';

const typography = {
  letterSpacing: {
    '2xs': -0.6,
    xs: -0.6,
    sm: -0.35,
    md: 0,
    lg: 0.45,
    xl: 1,
    '2xl': 2.4,
    '3xl': 3,
    '4xl': 3.6,
    '5xl': 4.8,
    '6xl': 6,
    '7xl': 7,
    '8xl': 10,
    '9xl': 12,
  },
  lineHeight: {
    '2xs': 10,
    xs: 13.5,
    sm: 17.5,
    md: 22,
    lg: 24,
    xl: 35,
    '2xl': 48,
    '3xl': 75,
    '4xl': 108,
    '5xl': 192,
    '6xl': 240,
    '7xl': 288,
    '8xl': 384,
    '9xl': 400,
  },
  weight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    extraBlack: '950',
  },
  size: {
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
};

const sofiaRegularFont = createFont({
  family: 'Sofia-Regular',
  ...typography,
});

const sofiaMediumFont = createFont({
  family: 'Sofia-Medium',
  ...typography,
});

const sofiaBoldFont = createFont({
  family: 'Sofia-Bold',
  ...typography,
});

export const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  color,
  radius,
  zIndex,
});

const config = createTamagui({
  fonts: {
    heading: sofiaBoldFont,
    body: sofiaMediumFont,
    thin: sofiaRegularFont,
  },
  tokens,
  themes: {
    light: {
      background: '#fff',
      backgroundHover: tokens.color.gray2,
      backgroundPress: tokens.color.gray4,
      backgroundFocus: tokens.color.gray5,
      backgroundTransparent: tokens.color.grayA1,
      borderColor: tokens.color.gray4,
      borderColorHover: tokens.color.gray6,
      borderColorPress: tokens.color.gray12,
      borderColorFocus: tokens.color.gray11,
      color: tokens.color.gray10,
      colorHover: tokens.color.gray9,
      colorPress: tokens.color.gray8,
      colorFocus: tokens.color.gray8,
      shadowColor: tokens.color.grayA4,
      shadowColorHover: tokens.color.grayA6,
      shadowColorPress: tokens.color.grayA8,
      shadowColorFocus: tokens.color.grayA8,
    },
  },
  shorthands,
});

export type Conf = typeof config;

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
