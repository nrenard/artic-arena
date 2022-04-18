import { createGlobalStyle } from "styled-components";

import FugazOne from "assets/fonts/FugazOne-Regular.ttf";
import Anthu from "assets/fonts/anthu-regular.otf";
import eot from "assets/fonts/montserrat-v18-latin-regular.eot";
import woff2 from "assets/fonts/montserrat-v18-latin-regular.woff2";
import woff from "assets/fonts/montserrat-v18-latin-regular.woff";
import ttf from "assets/fonts/montserrat-v18-latin-regular.ttf";
import svg from "assets/fonts/montserrat-v18-latin-regular.svg";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff5e1;

    --yellow-500: #FFD260;
    --yellow-800: #9C791C;

    --pink-500: #E01974;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    word-break: break-word;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }

  @font-face {
    font-family: 'FugazOne';
    src: url(${FugazOne});
  }

  @font-face {
    font-family: 'Anthu';
    src: url(${Anthu});
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${eot});
    src: local(''),
        url(${eot}?#iefix) format('embedded-opentype'),
        url(${woff2}) format('woff2'),
        url(${woff}) format('woff'),
        url(${ttf}) format('truetype'),
        url(${svg}#Montserrat) format('svg');
  }

  a {
    transition: 0.3s ease filter;

    &:hover {
      filter: brightness(.8);
    }
  }

  h1, h2, h3, h4, h5, h6, strong, a{ 
    font-family: "FugazOne";
    text-transform: uppercase;
  }

  p, span { 
    font-family: "Montserrat";
  }

  img {
    max-width: 100%;
  }
`;
