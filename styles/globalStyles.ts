import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  font-family: "poppins";
  background-color: #101217;
}

* {
  box-sizing: border-box;
}

#__next {
  height: 100vh;
  width: 100vw;
}

:root{
    --bg: white;
    --blue:#355FE3;
    --white:rgba(233, 233, 233, 1);
}
`;
