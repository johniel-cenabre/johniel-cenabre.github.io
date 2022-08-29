import { useEffect, useMemo, useState } from "react";

const useWindowSize = ({ mobile, tablet } = {}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const isMobile = useMemo(() => {
    return width <= mobile;
  }, [mobile, width]);

  const isTablet = useMemo(() => {
    return width <= tablet;
  }, [tablet, width]);

  const isDesktop = !isMobile && !isTablet;

  return {
    width,
    isDesktop,
    isMobile,
    isTablet,
  };
};

export default useWindowSize;
