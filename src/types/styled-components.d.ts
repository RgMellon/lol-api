import theme from "../styles";

type Theme = typeof theme.main;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
