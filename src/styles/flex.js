import styled, { css } from "styled-components";

export const flexCss = css`
  display: flex;
  gap: 1rem;

  &.full-width {
    width: 100%;
  }

  &.gap-2 {
    gap: 2rem;
  }
  &.gap-3 {
    gap: 3rem;
  }
`;

const FlexSt = styled.div`
  ${flexCss}
`;

export default FlexSt;
