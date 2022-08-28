import React from "react";

import useTextReveal from "./hooks/useTextReveal";
import TextCover from "./TextCover";
import TextRevealSt from "./TextReveal.style";

const TextReveal = ({ blinker, children, className, isShown, showDelay }) => {
  const { classes, isShownDelayed } = useTextReveal({
    isShown,
    showDelay,
  });

  if (!isShownDelayed) return null;

  return (
    <TextRevealSt className={[className, ...classes].join(" ")}>
      <TextCover blinker={blinker} />
      {children}
    </TextRevealSt>
  );
};

export default TextReveal;
