import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  /* Breakpoint para telas menores que 768px */
  @media (max-width: 768px) {
    
  }
`;

export default GlobalStyle;
