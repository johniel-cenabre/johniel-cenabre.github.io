import styled from "styled-components";

const TextRevealSt = styled.p`
  position: relative;
`;

export const TextCoverSt = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: shortenRight 2s;
  transform: scaleX(0);
  transform-origin: 100% 50%;

  > * {
    width: 1.3rem;
    height: 110%;
    filter: brightness(1.3);
    animation: blink 0.3s linear infinite;
  }
`;

export default TextRevealSt;
