import styled from "styled-components";

import { flexCss } from "../../styles/flex";

const NavSt = styled.nav`
  && {
    z-index: 9999;
    position: fixed;
    width: 100vw;
    background: none;
    transition: background 1s ease-in-out;

    #link-wrapper {
      position: absolute;
      align-items: center;
      justify-content: center;
      padding: 1rem 2rem;
      background: linear-gradient(to right, #050101cc, #110303cc);
      box-shadow: rgba(240, 46, 170, 0.4) 0px 3px 7px,
        rgba(240, 46, 170, 0.3) 0px 6px 12px,
        rgba(240, 46, 170, 0.2) 0px 9px 24px,
        rgba(240, 46, 170, 0.1) 0px 12px 30px,
        rgba(240, 46, 170, 0.05) 0px 15px 40px;
      animation: slideRightIn 2s;
      transition: opacity 1s ease-in-out, box-shadow 0.7s ease-in-out;

      a {
        background: none;
        transition: filter 0.3s ease-in-out;
        color: darkgray;

        &:hover,
        &:active,
        &.active {
          filter: brightness(1.7);
        }
      }
    }

    &.top {
      #link-wrapper {
        width: 100%;
        top: 0;
        ${flexCss};
        gap: 3rem;
      }
    }

    &.left {
      height: 100vh;
      background: linear-gradient(
        to right,
        rgba(240, 46, 170, 0.3),
        rgba(240, 46, 170, 0.1)
      );

      #link-wrapper {
        padding-top: 10rem;
        min-height: 100vh;
        left: 0;
        display: grid;
        align-content: start;
        row-gap: 3rem;
        box-shadow: rgba(240, 46, 170, 0.4) 3px 0px 10px,
          rgba(240, 46, 170, 0.3) 7px 0px 12px,
          rgba(240, 46, 170, 0.2) 10px 0px 24px,
          rgba(240, 46, 170, 0.1) 12px 0px 30px,
          rgba(240, 46, 170, 0.05) 24px 0px 40px;
      }

      #nav-menu-icon {
        z-index: 9999;
        width: 3rem;
        height: 3rem;
        top: 2rem;
        left: 2rem;
        background: rgba(240, 46, 170, 0.7);
        pointer-events: all;
        position: absolute;
        cursor: pointer;
      }

      &.hidden {
        pointer-events: none;
        background: none;

        #link-wrapper {
          animation: slideLeftOut 1s ease-out;
          box-shadow: none;
          opacity: 0;
        }
      }
    }
  }
`;

export const NavIconButtonSt = styled.button`
  z-index: 9999;
  height: 3rem;
  width: 3rem;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
  overflow: hidden;
  background: none;
  pointer-events: all;
  position: absolute;
  animation: fadeIn 0.3s ease-in;
  transition: left 0.7s ease-in-out;
  border: 0;

  .line {
    height: 3px;
    width: 35px;
    background: rgba(240, 46, 170, 0.7);
    position: relative;
    top: 0;
    margin: 5px auto 0 auto;
  }

  .bottom {
    transform: rotate(0deg) translateY(0px);
    transition: 0.5s;
  }

  .top {
    transform: rotate(0deg) translateY(0px);
    transition: 0.5s;
  }

  .middle {
    opacity: 1;
    transition: 0.6s;
  }

  &.open {
    left: 6.7rem;

    .bottom {
      transform: translateY(-8px) rotate(-45deg);
      transition: 0.5s;
    }
    .top {
      transform: translateY(8px) rotate(45deg);
      transition: 0.5s;
    }
    .middle {
      opacity: 0;
      transition: 0.6s;
    }
  }

  &:hover {
    .line {
      filter: brightness(1.3);
    }
  }
`;

export default NavSt;
