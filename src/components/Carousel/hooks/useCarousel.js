import { useCallback, useMemo, useState } from "react";

const useCarousel = ({ children, isLoading }) => {
  const classes = [];
  if (isLoading) classes.push("loading");

  const degrees = useMemo(() => {
    return 360 / children.length;
  }, [children]);

  const [currDeg, setCurrDeg] = useState(0);

  const onPrev = useCallback(() => {
    setCurrDeg((curr) => curr + degrees);
  }, [degrees]);

  const onNext = useCallback(() => {
    setCurrDeg((curr) => curr - degrees);
  }, [degrees]);

  return {
    childCount: children.length,
    classes,
    currDeg,
    degrees,
    onPrev,
    onNext,
  };
};

export default useCarousel;
