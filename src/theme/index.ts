import { DefaultTheme, css } from "styled-components";

const buildFont = (
  weight: number,
  style: string,
  size: string,
  lineHeight: string,
  decoration = "none"
) => css`
  font-weight: ${weight};
  font-style: ${style};
  line-height: ${lineHeight};
  font-size: ${size};
  text-decoration: ${decoration};
`;

const Theme: DefaultTheme = {
  colors: {
    bg: "#13032A",
    yellow: "#FFD260",
    purple: "#E01974",
  },
  gradientText: css`
    background: -webkit-linear-gradient(
      120deg,
      rgba(224, 25, 116, 1) 37%,
      rgba(255, 210, 96, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  typography: {
    heading1: buildFont(400, "normal", "62px", "62px"),
    heading2: buildFont(400, "normal", "40px", "62px"),
  },
};

export default Theme;
