import { useEffect, useState } from "react";

const useExperience = ({ loadDelay = 0 } = {}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsLoading(false);
    }, loadDelay);

    return () => clearTimeout(handler);
  }, [loadDelay]);

  const classes = [];

  return {
    classes,
    isLoading,
  };
};

export default useExperience;
