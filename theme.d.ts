// themed.d.ts
import '@rneui/themed';

interface LineHeights {
  primary: string;
}

interface FontSizes {
  sm: string | number;
  primary: string | number;
  large: string | number;
}

interface FontFamilies {
  primary: string;
  bold: string;
}

interface Font {
  sizes: FontSizes;
  lineHeight: LineHeights;
  weight: 'regular' | 'bold';
  fontFamily: FontFamilies;
}

declare module '@rneui/themed' {
  export interface Theme {
    font: Font;
  }

  export interface Colors {
    readonly blue: string;
    readonly darkBlue: string;
    readonly purple: string;
    readonly darkPurple: string;
    readonly gray100: string;
    readonly gray200: string;
    readonly gray300: string;
    readonly gray400: string;
    readonly gray500: string;
    readonly gray600: string;
    readonly gray700: string;
  }
}
