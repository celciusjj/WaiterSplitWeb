import { createGlobalStyle } from "styled-components";
import sofiapro from '../assets/fonts/SofiaPro.ttf';

export const theme = {
  primaryBlue: "#009BFF",
  primaryOrange: "#F09819",
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: sofiapro;
    src: url(${sofiapro}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-family: sofiapro;
  }
`;
export default GlobalStyle;