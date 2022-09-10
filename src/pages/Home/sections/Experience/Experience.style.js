import styled from "styled-components";

const ExperienceSt = styled.section`
  && {
    min-height: 110vh;
  }

  #experience-container {
    width: 100%;
    display: grid;
    justify-items: center;

    .text-cover {
      animation: shortenRight 1.7s;

      .blinker {
        background: rgba(240, 46, 170, 0.7);
      }
    }
  }
`;

export const CompanySt = styled.div`
  display: grid;
  align-content: stretch;
  justify-items: center;
`;

export default ExperienceSt;
