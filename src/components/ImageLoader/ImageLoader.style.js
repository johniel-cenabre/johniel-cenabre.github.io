import styled from "styled-components";

const sizes = {
  sm: 3,
  md: 5,
  lg: 7,
};
const multi = 1.47;
const multiDanger = 4.7;
const multiOk = 1.3;

const bg = "#17262b";
const glow1 = "#00d8ff";
const glow2 = "#FFAE00";
const glow3 = "#3bff00";

const ImageLoaderSt = styled.button`
  position: relative;
  cursor: pointer;
  font-size: 1em;
  color: ${glow1};
  font-weight: 100;
  width: ${({ size }) => sizes[size] * 1.8}em;
  height: ${({ size }) => sizes[size] * 1.8}em;
  line-height: ${({ size }) => sizes[size] * 1.8}em;
  text-align: center;
  /* margin-left: -${({ size }) => sizes[size] / 2}em;
  margin-top: -${({ size }) => sizes[size] / 2}em; */
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  border: 2px solid ${glow1};
  border-color: ${glow1};
  box-sizing: border-box;
  animation: none;
  background: none;

  img {
    animation: fadeIn 1s ease-in;
  }

  &:hover {
    box-shadow: 0 0 30px 3px ${glow1};
  }

  &:before {
    border-color: ${glow1};
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 100%;

    border-top: 1px solid ${glow3};
    border-bottom: 1px solid ${glow2};
    width: ${({ size }) => sizes[size] * multiDanger}em;
    height: ${({ size }) => sizes[size] * multiDanger}em;
    margin-left: -${({ size }) => (sizes[size] * multiDanger) / 2}em;
    margin-top: -${({ size }) => (sizes[size] * multiDanger) / 2}em;
    transition: opacity 1s ease 0.6s, border 0.4s ease 0s, width 0.4s ease 0.2s,
      height 0.4s ease 0.2s, margin 0.4s ease 0.2s;
  }

  &.loading {
    box-shadow: 0 0 0 0 ${bg}, 0 0 2px 3px ${glow1}, 0 0 4px 25px ${bg},
      0 0 1px 32px ${bg}, 0 0 32px 25px ${glow1}, 0 0 32px 25px ${bg};
    animation: pulse1 1.4s linear infinite;
    cursor: unset;

    &:before {
      content: "";
      opacity: 1;
      animation: rotate 0.45s linear infinite;

      width: ${({ size }) => sizes[size] * multi}em;
      height: ${({ size }) => sizes[size] * multi}em;
      margin-left: -${({ size }) => (sizes[size] * multi) / 2}em;
      margin-top: -${({ size }) => (sizes[size] * multi) / 2}em;
    }
  }

  &.danger {
    color: ${glow2};
    border-color: ${glow2};
    box-shadow: 0 0 10px 2px ${glow2};
    animation: none;
    cursor: unset;

    &:before {
      border-color: ${glow2};
      opacity: 0;
      width: ${({ size }) => sizes[size] * multiDanger}em;
      height: ${({ size }) => sizes[size] * multiDanger}em;
      margin-left: -${({ size }) => (sizes[size] * multiDanger) / 2}em;
      margin-top: -${({ size }) => (sizes[size] * multiDanger) / 2}em;
    }
  }

  &.ok {
    border-color: ${glow3};
    box-shadow: 0 0 0 0 ${bg}, 0 0 2px 3px ${glow3}, 0 0 4px 10px ${bg},
      0 0 1px 15px ${bg}, 0 0 15px 10px ${glow3}, 0 0 15px 10px ${bg};
    animation: pulse3 1.4s linear infinite;
    cursor: unset;

    &:before {
      border-color: ${glow3};
      opacity: 0;

      width: ${({ size }) => sizes[size] * multiOk}em;
      height: ${({ size }) => sizes[size] * multiOk}em;
      margin-left: -${({ size }) => (sizes[size] * multiOk) / 2}em;
      margin-top: -${({ size }) => (sizes[size] * multiOk) / 2}em;
    }
  }

  @keyframes pulse1 {
    0% {
      box-shadow: 0 0 0 0 ${bg}, 0 0 2px 3px ${glow1}, 0 0 1px 32px ${bg},
        0 0 32px 25px ${glow1};
    }

    49.9% {
      box-shadow: 0 0 1px 32px ${bg}, 0 0 32px 25px ${glow1}, 0 0 1px 64px ${bg},
        0 0 60px 25px ${glow1};
    }

    50% {
      box-shadow: 0 0 0 0 ${bg}, 0 0 2px 3px ${glow1}, 0 0 1px 32px ${bg},
        0 0 32px 25px ${glow1};
    }

    100% {
      box-shadow: 0 0 1px 32px ${bg}, 0 0 32px 25px ${glow1}, 0 0 1px 64px ${bg},
        0 0 60px 25px ${glow1};
    }
  }

  @keyframes pulse3 {
    0% {
      box-shadow: 0 0 0 0 ${bg}, 0 0 2px 3px ${glow3}, 0 0 1px 15px ${bg},
        0 0 15px 10px ${glow3};
    }

    49.9% {
      box-shadow: 0 0 1px 15px ${bg}, 0 0 15px 10px ${glow3}, 0 0 1px 25px ${bg},
        0 0 20px 10px ${glow3};
    }

    50% {
      box-shadow: 0 0 0 0 ${bg}, 0 0 2px 3px ${glow3}, 0 0 1px 15px ${bg},
        0 0 15px 10px ${glow3};
    }

    100% {
      box-shadow: 0 0 1px 15px ${bg}, 0 0 15px 10px ${glow3}, 0 0 1px 25px ${bg},
        0 0 20px 10px ${glow3};
    }
  }

  img {
    width: ${({ size }) => sizes[size] * multiOk}em;
    height: auto;
    clip-path: circle();
    transform: scale(1.43);
  }
`;

export default ImageLoaderSt;
