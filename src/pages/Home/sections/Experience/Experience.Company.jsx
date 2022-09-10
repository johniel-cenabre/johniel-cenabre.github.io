import React from "react";

import ImageLoader from "../../../../components/ImageLoader";
import TextReveal from "../../../../components/TextReveal";

import useCompany from "./hooks/useCompany";
import { CompanySt } from "./Experience.style";

const Company = ({ experience, index, showDelay }) => {
  const { image, isError, isLoading, loadImage } = useCompany({
    experience,
    showDelay,
  });
  return (
    <CompanySt>
      <h1>
        <TextReveal
          showDelay={(3000 * (index + 1)) / 2}
          blinker={<div className="blinker" />}
        >
          {experience.company}
        </TextReveal>
      </h1>
      <ImageLoader
        className="image"
        image={image}
        isError={isError}
        isLoading={isLoading}
        size="md"
        autoLoadImage={loadImage}
      />
      <div>
        <TextReveal
          showDelay={(3500 * (index + 1)) / 2}
          blinker={<div className="blinker" />}
        >
          {experience.position}
        </TextReveal>
        <TextReveal
          showDelay={(4000 * (index + 1)) / 2}
          blinker={<div className="blinker" />}
        >
          {experience.status}
        </TextReveal>
        <TextReveal
          showDelay={(4500 * (index + 1)) / 2}
          blinker={<div className="blinker" />}
        >
          {experience.stack}
        </TextReveal>
      </div>
    </CompanySt>
  );
};

export default Company;
