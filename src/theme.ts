import palette from "./palette";

export type PaletteInterface = typeof palette;
export interface ThemeInterface extends PaletteInterface {
  primary: string;
  primaryLighter: string;
}

const defaultTheme: ThemeInterface = {
  ...palette,
  primary: palette.belizeHole,
  primaryLighter: palette.peterRiver,
};

export default defaultTheme;
