import { injectGlobal } from '@emotion/css';
import 'modern-normalize';

injectGlobal`
  html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
    background-color: ${p => p.theme.colors.backgroundColor};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}

h1, h2, h3, h4, p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
`;

export default injectGlobal;
