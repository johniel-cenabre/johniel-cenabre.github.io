import React from "react";

import LoaderSt, { LoadingTextSt } from "./Loader.style";

const Loader = ({ text }) => {
  return (
    <LoaderSt>
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      {text && <LoadingTextSt>{text}</LoadingTextSt>}
    </LoaderSt>
  );
};

export default Loader;
