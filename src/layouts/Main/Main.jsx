import React from "react";
import MainSt from "./Main.style";

const Main = ({ children }) => {
  return <MainSt>{children}</MainSt>;
};

export default React.memo(Main);
