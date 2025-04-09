import "styled-components";
import { defaultTheme } from "../styles/theme/default.js";

export type ThemeType = typeof defaultTheme;

// this says to the Styled Components that the themes will follow this format
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
