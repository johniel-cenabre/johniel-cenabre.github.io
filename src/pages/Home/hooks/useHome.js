import { useEffect, useState } from "react";
import { positions } from "../../../layouts/Nav/Nav";

const useHome = ({ isDesktop }) => {
  const [navPosition, setNavPosition] = useState(positions.top);

  useEffect(() => {
    setNavPosition(isDesktop ? positions.top : positions.left);
  }, [isDesktop]);

  return { navPosition };
};

export default useHome;
