import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useNav = ({ isShown, position, showDelay = 1000 }) => {
  const classes = [];
  if (position) classes.push(position);

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

  return {
    classes,
    isShownDelayed,
    getActiveClassName,
  };
};

export default useNav;
