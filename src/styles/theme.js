import styled from "styled-components";

import {
  slideRightInCss,
  shortenRightCss,
  rightCss,
  leftCss,
  rotateCss,
  blinkCss,
} from "./animation";

const ThemeSt = styled.div`
  background: linear-gradient(to right, #0d0404, #150c0c);

  * {
    font-size: 1.7vh;
    letter-spacing: 3px;
    background: inherit;
  }

  a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }

  section {
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${slideRightInCss}
  ${shortenRightCss}
  ${rightCss}
  ${leftCss}
  ${rotateCss}
  ${blinkCss}
`;

export default ThemeSt;
