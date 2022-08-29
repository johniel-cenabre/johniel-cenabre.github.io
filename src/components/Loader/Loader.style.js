import styled from "styled-components";
import TextReveal from "../TextReveal";

const LoaderSt = styled.div`
  animation: fadeIn 1s ease-in;

  .ball {
    width: 24px;
    height: 24px;
    margin: 24px auto;
    border-radius: 50px;

    &:nth-child(1) {
      background: purple;
      -webkit-animation: right 1s infinite ease-in-out;
      -moz-animation: right 1s infinite ease-in-out;
      animation: right 1s infinite ease-in-out;
    }

    &:nth-child(2) {
      background: pink;
      -webkit-animation: left 1.1s infinite ease-in-out;
      -moz-animation: left 1.1s infinite ease-in-out;
      animation: left 1.1s infinite ease-in-out;
    }

    &:nth-child(3) {
      background: salmon;
      -webkit-animation: right 1.05s infinite ease-in-out;
      -moz-animation: right 1.05s infinite ease-in-out;
      animation: right 1.05s infinite ease-in-out;
    }

    &:nth-child(4) {
      background: red;
      -webkit-animation: left 1.15s infinite ease-in-out;
      -moz-animation: left 1.15s infinite ease-in-out;
      animation: left 1.15s infinite ease-in-out;
    }

    &:nth-child(5) {
      background: orange;
      -webkit-animation: right 1.1s infinite ease-in-out;
      -moz-animation: right 1.1s infinite ease-in-out;
      animation: right 1.1s infinite ease-in-out;
    }

    &:nth-child(6) {
      background: yellow;
      -webkit-animation: left 1.05s infinite ease-in-out;
      -moz-animation: left 1.05s infinite ease-in-out;
      animation: left 1.05s infinite ease-in-out;
    }

    &:nth-child(7) {
      background: yellowgreen;
      -webkit-animation: right 1s infinite ease-in-out;
      -moz-animation: right 1s infinite ease-in-out;
      animation: right 1s infinite ease-in-out;
    }
  }
`;

export const LoadingTextSt = styled(TextReveal)`
  && {
    margin-top: 3rem;
  }
`;

export default LoaderSt;
