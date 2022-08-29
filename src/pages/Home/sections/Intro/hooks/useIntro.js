import { useEffect, useState } from "react";

const useIntro = ({ loadDelay = 0 } = {}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsLoading(false);
    }, loadDelay);

    return () => clearTimeout(handler);
  }, [loadDelay]);

  return {
    isLoading,
  };
};

export default useIntro;
