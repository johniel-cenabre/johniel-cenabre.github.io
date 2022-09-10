import React from "react";
import useImageLoader from "./hooks/useImageLoader";

import ImageLoaderSt from "./ImageLoader.style";

const ImageLoader = ({
  className,
  image,
  isError,
  isLoading,
  size = "lg",
  text,
  loadImage,
  autoLoadImage,
}) => {
  const { classes } = useImageLoader({
    image,
    isError,
    isLoading,
    autoLoadImage,
  });

  return (
    <ImageLoaderSt
      className={[className, ...classes].join(" ")}
      size={size}
      onClick={loadImage}
    >
      {image ? (
        <img src={image} />
      ) : isLoading ? (
        "Loading"
      ) : text ? (
        text
      ) : (
        "Error"
      )}
    </ImageLoaderSt>
  );
};

export default ImageLoader;
