import React from "react";

import useNav from "./hooks/useNav";
import NavSt from "./Nav.style";
import NavIconButton from "./NavIconButton";

const Nav = ({ className, getLinks, isShown, position, showDelay }) => {
  const { classes, isShownDelayed, onClickOutside, onToggleMenu, ...navProps } =
    useNav({
      isShown,
      position,
      showDelay,
    });

  if (!isShownDelayed) return null;

  return (
    <NavSt
      className={[className, ...classes].join(" ")}
      onClick={onClickOutside}
    >
      <NavIconButton classes={classes} onToggleMenu={onToggleMenu} />
      <div id="link-wrapper">{getLinks?.(navProps)}</div>
    </NavSt>
  );
};

export const positions = {
  top: "top",
  bot: "bot",
  left: "left",
  right: "right",
  full: "full",
};

export default React.memo(Nav);
