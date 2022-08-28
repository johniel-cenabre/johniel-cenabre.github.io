import React from "react";
import useImageLoader from "./hooks/useImageLoader";

import ImageLoaderSt from "./ImageLoader.style";

const ImageLoader = ({
  className,
  image,
  isError,
  isLoading,
  text,
  loadImage,
}) => {
  const { classes } = useImageLoader({ image, isError, isLoading });

  return (
    <ImageLoaderSt
      className={[className, ...classes].join(" ")}
      onClick={loadImage}
    >
      {image ? <img src={image} /> : isLoading ? "Loading Profile" : text}
    </ImageLoaderSt>
  );
};

export default ImageLoader;
