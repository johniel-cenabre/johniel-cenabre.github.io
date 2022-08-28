import React from "react";

import useNav from "./hooks/useNav";
import NavSt from "./Nav.style";

const Nav = ({ className, getLinks, isShown, position, showDelay }) => {
  const { classes, isShownDelayed, ...navProps } = useNav({
    isShown,
    position,
    showDelay,
  });

  if (!isShownDelayed) return null;

  return (
    <NavSt className={[className, ...classes].join(" ")}>
      {getLinks?.(navProps)}
    </NavSt>
  );
};

export const positions = {
  top: "top",
  bot: "bot",
  top: "left",
  top: "right",
};

export default React.memo(Nav);
