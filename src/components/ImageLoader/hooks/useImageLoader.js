const useImageLoader = ({ image, isLoading, isError }) => {
  const classes = [];
  if (image) classes.push("ok");
  if (isError) classes.push("danger");
  if (isLoading) classes.push("loading");

  return {
    classes,
  };
};

export default useImageLoader;
