import React from "react";

import { TextCoverSt } from "./TextReveal.style";

const TextCover = ({ blinker }) => {
  return <TextCoverSt className="text-cover">{blinker}</TextCoverSt>;
};

export default TextCover;
