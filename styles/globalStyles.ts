import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  font-family: "poppins";
  background-color: #101217;
}

#__next {
  height: 100vh;
  width: 100vw;
}

:root{
    --bg: white;
    --red:#B71C1C;
    --white:rgba(233, 233, 233, 1);
}
`;
