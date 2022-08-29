import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { positions } from "../Nav";

const useNav = ({ isShown, position, showDelay = 1000 }) => {
  const [isShownDelayed, setIsShownDelayed] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsShownDelayed(isShown);
    }, showDelay);

    return () => clearTimeout(handler);
  }, [isShown, showDelay]);

  const { hash, pathname } = useLocation();

  const getActiveClassName = useCallback(
    (path) => {
      if (path !== pathname + hash) return "";
      return "active";
    },
    [pathname, hash]
  );

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (position === positions.left) {
      setIsHidden(true);
    }
  }, [position]);

  const onClickOutside = useCallback((e) => {
    if (e.target.tagName === "NAV") {
      setIsHidden(true);
    }
  }, []);

  const onToggleMenu = useCallback((e) => {
    e.stopPropagation();
    setIsHidden((curr) => !curr);
  }, []);

  const classes = [];
  if (position) classes.push(position);
  if (isHidden) classes.push("hidden");

  return {
    classes,
    isShownDelayed,
    getActiveClassName,
    onClickOutside,
    onToggleMenu,
  };
};

export default useNav;
