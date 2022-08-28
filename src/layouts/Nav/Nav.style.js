import styled from "styled-components";
import { flexCss } from "../../styles/flex";

const NavSt = styled.nav`
  z-index: 9999;
  padding: 0.5rem 2rem;
  background: linear-gradient(to right, #050101, #110303);
  box-shadow: rgba(240, 46, 170, 0.4) 0px 4px, rgba(240, 46, 170, 0.3) 0px 8px,
    rgba(240, 46, 170, 0.2) 0px 12px, rgba(240, 46, 170, 0.1) 0px 16px,
    rgba(240, 46, 170, 0.05) 0px 20px;
  color: darkgray;
  animation: slideRightIn 2s;

  &.top {
    position: sticky;
    top: 0;
    ${flexCss};
  }

  &.bot {
    position: sticky;
    bottom: 0;
    ${flexCss};
  }

  a {
    transition: filter 0.3s ease-in-out;

    &:hover,
    &:active,
    &.active {
      filter: brightness(1.3);
    }
  }
`;

export default NavSt;
