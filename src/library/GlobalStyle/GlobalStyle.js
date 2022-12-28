import { createGlobalStyle } from 'styled-components';
import { COLOR_BACKGROUND } from '../../constants/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${COLOR_BACKGROUND};
  }
  ,
`;
