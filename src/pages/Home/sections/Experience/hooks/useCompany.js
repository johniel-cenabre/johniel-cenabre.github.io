import { useCallback, useState } from "react";

const useCompany = ({ experience, showDelay = 3000 } = {}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);

  const loadImage = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsError(true);
    }, showDelay / 2);
    setTimeout(() => {
      setImage(experience.image);
      setIsLoading(false);
    }, showDelay);
  }, [showDelay, experience]);

  return {
    image,
    isError,
    isLoading,
    loadImage,
  };
};

export default useCompany;
