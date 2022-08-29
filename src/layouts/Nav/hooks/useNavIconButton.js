const useNavIconButton = ({ classes }) => {
  const newClasses = [];
  if (!classes.includes("hidden")) newClasses.push("open");

  const isShown = !classes.includes("top");

  return {
    isShown,
    newClasses,
  };
};

export default useNavIconButton;
