import { useEffect, useState } from "react";

const useScroll = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return {
    hasScrolled,
  };
};

export default useScroll;
