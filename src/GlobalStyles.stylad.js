import { Global, css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = props => (
  <Global
    {...props}
    styles={css`
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
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        color: #212121;
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #e6f2f2;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      ul {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: black;
        & {
          :hover {
            color: red;
          }
        }
      }
    `}
  />
);
