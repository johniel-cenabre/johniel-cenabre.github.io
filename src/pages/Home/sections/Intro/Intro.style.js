import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const IntroSt = styled.section`
  padding: 0 1.7rem;

  #intro-container {
    width: 100%;
    display: grid;
    justify-items: center;

    .blinker {
      background: white;
    }
  }
`;

export const ClientInfoSt = styled.span`
  color: red;
`;

export const DownEmojiSt = styled(HashLink)`
  &&& {
    color: red;
    font-size: 1.5rem;

    &:hover {
      filter: brightness(1.3);
      transform: scale(1.3);
    }
  }
`;

export default IntroSt;
