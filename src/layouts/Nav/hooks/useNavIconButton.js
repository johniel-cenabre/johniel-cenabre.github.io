const useNavIconButton = ({ classes }) => {
  const _classes = [];
  if (!classes.includes("hidden")) _classes.push("open");

  const isHidden = classes.includes("top");

  return {
    isHidden,
    _classes,
  };
};

export default useNavIconButton;
