import React from "react";

import useCarousel from "./hooks/useCarousel";
import CarouselSt, { CarouselButtonSt } from "./Carousel.style";

const Carousel = ({ className, isLoading, children }) => {
  const { childCount, classes, currDeg, degrees, onNext, onPrev } = useCarousel(
    {
      children,
      isLoading,
    }
  );

  return (
    <CarouselSt
      className={[className, ...classes].join(" ")}
      childCount={childCount}
      currDeg={currDeg}
      degrees={degrees}
    >
      <CarouselButtonSt onClick={onPrev}>{"<"}</CarouselButtonSt>
      <div id="container">
        <div id="carousel">{children}</div>
      </div>
      <CarouselButtonSt onClick={onNext}>{">"}</CarouselButtonSt>
    </CarouselSt>
  );
};

export default Carousel;
