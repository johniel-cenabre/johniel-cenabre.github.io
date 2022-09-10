import styled from "styled-components";

import {
  slideRightInCss,
  shortenRightCss,
  rightCss,
  leftCss,
  rotateCss,
  fadeInCss,
  slideLeftOutCss,
  rightInCss,
  leftInCss,
  topInCss,
  bottomInCss,
  tornadoCss,
} from "./animation";

const ThemeSt = styled.div`
  background: linear-gradient(to right, #0d0404, #150c0c);

  * {
    font-size: 1.7vh;
    letter-spacing: 3px;
  }

  a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }

  section {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ${slideRightInCss}
  ${slideLeftOutCss}
  ${shortenRightCss}
  ${rightCss}
  ${leftCss}
  ${rotateCss}
  ${fadeInCss}
  ${rightInCss}
  ${leftInCss}
  ${topInCss}
  ${bottomInCss}
  ${tornadoCss}
`;

export default ThemeSt;
