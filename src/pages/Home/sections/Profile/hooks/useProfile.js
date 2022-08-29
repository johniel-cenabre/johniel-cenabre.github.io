import { useCallback, useEffect, useState } from "react";

import casual from "../../../../../../public/icons/formal.jpg";

const useProfile = ({ showDelay = 3000 } = {}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isShownMyInfo, setIsShownMyInfo] = useState(false);
  const [image, setImage] = useState(null);

  const loadImage = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsError(true);
    }, showDelay / 2);
    setTimeout(() => {
      setImage(casual);
      setIsLoading(false);
    }, showDelay);
  }, [showDelay]);

  useEffect(() => {
    if (image) {
      const handler = setTimeout(() => {
        setIsShownMyInfo(true);
      });

      return () => clearTimeout(handler);
    }
  }, [image]);

  const classes = [];
  if (isShownMyInfo) classes.push("light");

  return {
    classes,
    image,
    isError,
    isLoading,
    isShownMyInfo,
    loadImage,
  };
};

export default useProfile;
