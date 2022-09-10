import { useEffect, useState } from "react";

const useTextReveal = ({ isShown = true, showDelay = 500 }) => {
  const [isShownDelayed, setIsShownDelayed] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsShownDelayed(isShown);
    }, showDelay);

    return () => clearTimeout(handler);
  }, [isShown, showDelay]);

  const classes = [];

  return {
    classes,
    isShownDelayed,
  };
};

export default useTextReveal;
