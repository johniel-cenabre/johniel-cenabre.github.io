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

export const slideLeftOutCss = css`
  @keyframes slideLeftOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
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

export const fadeInCss = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const rightInCss = css`
  @keyframes rightIn {
    0% {
      left: 50px;
    }
    100% {
      left: 0px;
    }
  }
`;

export const topInCss = css`
  @keyframes topIn {
    0% {
      top: -50px;
    }
    100% {
      top: 0px;
    }
  }
`;

export const leftInCss = css`
  @keyframes leftIn {
    0% {
      left: -50px;
    }
    100% {
      left: 0px;
    }
  }
`;

export const bottomInCss = css`
  @keyframes bottomIn {
    0% {
      top: 50px;
    }
    100% {
      top: 0px;
    }
  }
`;

export const tornadoCss = css`
  @keyframes tornado {
    0% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;
