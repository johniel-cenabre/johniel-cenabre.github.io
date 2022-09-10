import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const CarouselSt = styled.div`
  &&& {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #container {
      margin: 0 auto;
      width: ${({ childCount }) =>
        childCount * 40 * (window.innerWidth / 500)}px;
      height: 400px;
      position: relative;
      perspective: 1000px;

      #carousel {
        height: 100%;
        width: 100%;
        position: absolute;
        transform: rotateY(${({ currDeg }) => currDeg}deg);
        transform-style: preserve-3d;
        transition: transform 1s ease-in-out;
        animation: tornado 3s ease-out;

        > * {
          position: absolute;
          background: rgba(0, 0, 0, 0.88);
          padding: 1rem;
          width: ${({ childCount }) =>
            childCount * 40 * (window.innerWidth / 500)}px;
          height: 400px;
          text-align: center;
          color: #fff;
          border-radius: 10px;
          border: 1px solid rgba(240, 46, 170, 0.7);
          overflow: hidden;

          * {
            font-size: 10px;
            letter-spacing: 1px;
          }
        }

        ${({ childCount, degrees }) =>
          new Array(childCount).fill(null).map((_, i) => {
            return `> :nth-child(${i + 1}) {
              transform: rotateY(${i * degrees}deg) translateZ(${
              childCount * 40 * (window.innerWidth / 500)
            }px);
            }`;
          })}
      }
    }

    @media (${breakpoints.tablet}) {
      #container {
        width: ${({ childCount }) =>
          childCount * 40 * (window.innerWidth / 700)}px;

        #carousel {
          > * {
            border-width: 2px;
            width: ${({ childCount }) =>
              childCount * 40 * (window.innerWidth / 700)}px;
          }

          ${({ childCount, degrees }) =>
            new Array(childCount).fill(null).map((_, i) => {
              return `> :nth-child(${i + 1}) {
                transform: rotateY(${i * degrees}deg) translateZ(${
                childCount * 40 * (window.innerWidth / 700)
              }px);
              }`;
            })}
        }
      }
    }

    @media (${breakpoints.desktop}) {
      #container {
        width: ${({ childCount }) =>
          childCount * 40 * (window.innerWidth / 900)}px;

        #carousel {
          > * {
            width: ${({ childCount }) =>
              childCount * 40 * (window.innerWidth / 900)}px;
          }

          ${({ childCount, degrees }) =>
            new Array(childCount).fill(null).map((_, i) => {
              return `> :nth-child(${i + 1}) {
                transform: rotateY(${i * degrees}deg) translateZ(${
                childCount * 40 * (window.innerWidth / 800)
              }px);
              }`;
            })}
        }
      }
    }
  }
`;

export const CarouselButtonSt = styled.button`
  z-index: 999;
  font-size: 77px;
  color: rgba(240, 46, 170, 0.77);
  filter: brightness(1.3);
  background: none;
  border: none;
  cursor: pointer;
  transition: filter, transform 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.7);
    transform: scale(1.3);
  }
`;

export default CarouselSt;
