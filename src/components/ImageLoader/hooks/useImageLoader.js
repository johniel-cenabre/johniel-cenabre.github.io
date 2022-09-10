import { useEffect } from "react";

const useImageLoader = ({ autoLoadImage, image, isLoading, isError }) => {
  const classes = [];
  if (image) classes.push("ok");
  if (isError) classes.push("danger");
  if (isLoading) classes.push("loading");

  useEffect(() => {
    autoLoadImage?.();
  }, []);

  return {
    classes,
  };
};

export default useImageLoader;
