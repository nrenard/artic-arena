import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      yellow: string;
      purple: string;
      mediumPurple: string;
    };
    gradientText: FlattenSimpleInterpolation;
    typography: {
      heading1: FlattenSimpleInterpolation;
      heading2: FlattenSimpleInterpolation;
    };
  }
}
