import React from "react";
import useNavIconButton from "./hooks/useNavIconButton";

import { NavIconButtonSt } from "./Nav.style";

const NavIconButton = ({ classes, onToggleMenu }) => {
  const { _classes, isHidden } = useNavIconButton({ classes });

  if (isHidden) return null;

  return (
    <NavIconButtonSt className={_classes.join(" ")} onClick={onToggleMenu}>
      <div className="top line" />
      <div className="middle line" />
      <div className="bottom line" />
    </NavIconButtonSt>
  );
};

export default React.memo(NavIconButton);
