import palette, { theme } from "./palette";

export type PaletteInterface = typeof palette;
export interface ThemeInterface extends PaletteInterface {
  primary: string;
  primaryLighter: string;
}

export default theme;
