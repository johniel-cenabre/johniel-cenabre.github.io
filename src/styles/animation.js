import { css } from "styled-components";

export const slideRightInCss = css`
  @keyframes slideRightIn {
    0% {
      transform: translateX(-100%);
    }
    40% {
      transform: translateX(-3%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const shortenRightCss = css`
  @keyframes shortenRight {
    0% {
      transform: scaleX(1);
    }
  }
`;

export const rightCss = css`
  @-webkit-keyframes right {
    0% {
      -webkit-transform: translate(-1.7rem);
    }
    50% {
      -webkit-transform: translate(1.7rem);
    }
    100% {
      -webkit-transform: translate(-1.7rem);
    }
  }

  @keyframes right {
    0% {
      transform: translate(-1.7rem);
    }
    50% {
      transform: translate(1.7rem);
    }
    100% {
      transform: translate(-1.7rem);
    }
  }

  @-moz-keyframes right {
    0% {
      -moz-transform: translate(-1.7rem);
    }
    50% {
      -moz-transform: translate(1.7rem);
    }
    100% {
      -moz-transform: translate(-1.7rem);
    }
  }
`;

export const leftCss = css`
  @-webkit-keyframes left {
    0% {
      -webkit-transform: translate(1.7rem);
    }
    50% {
      -webkit-transform: translate(-1.7rem);
    }
    100% {
      -webkit-transform: translate(1.7rem);
    }
  }

  @-moz-keyframes left {
    0% {
      -moz-transform: translate(1.7rem);
    }
    50% {
      -moz-transform: translate(-1.7rem);
    }
    100% {
      -moz-transform: translate(1.7rem);
    }
  }

  @keyframes left {
    0% {
      transform: translate(1.7rem);
    }
    50% {
      transform: translate(-1.7rem);
    }
    100% {
      transform: translate(1.7rem);
    }
  }
`;

export const rotateCss = css`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const blinkCss = css`
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
