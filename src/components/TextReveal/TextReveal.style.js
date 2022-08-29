import styled from "styled-components";

const TextRevealSt = styled.div`
  position: relative;
  margin: 0.5rem 0;
`;

export const TextCoverSt = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: shortenRight 2s;
  transform: scaleX(0);
  transform-origin: 100% 50%;
  background: linear-gradient(to right, #0d0404, #150c0c);

  > * {
    width: 1.3rem;
    height: 110%;
    filter: brightness(1.3);
    animation: fadeIn 0.3s linear infinite;
  }
`;

export default TextRevealSt;
