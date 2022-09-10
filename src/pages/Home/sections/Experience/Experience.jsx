import React from "react";

import ImageLoader from "../../../../components/ImageLoader";
import TextReveal from "../../../../components/TextReveal";

import useExperience from "./hooks/useExperience";
import ExperienceSt from "./Experience.style";
import Carousel from "../../../../components/Carousel/Carousel";

const EXPERIENCE = [
  {
    company: "Fullspeed Technologies Inc",
    image: null,
    position: "Software Engineer",
    status: "Full Time",
    stack: "React | Node | Laravel | MySql",
  },
  {
    company: "Panteum",
    image: null,
    position: "Software Developer",
    status: "Contractual",
    stack: "React | Node | NoSql",
  },
  {
    company: "Station Five",
    image: null,
    position: "Fullstack Developer",
    status: "Part Time",
    stack: "React | Node | Laravel | PostgreSql",
  },
  {
    company: "Offshorly",
    image: null,
    position: "Software Developer",
    status: "Full Time",
    stack: "React | Node | NoSql",
  },
  {
    company: "Accenture",
    image: null,
    position: "React Developer",
    status: "Part Time",
    stack: "React | Node | AWS",
  },
];

const Experience = () => {
  const { classes, image, isError, isLoading, loadImage, isShownMyInfo } =
    useExperience();
  return (
    <ExperienceSt className={classes.join(" ")} id="experience">
      <div id="experience-container">
        <Carousel>
          {EXPERIENCE.map((e, i) => (
            <div key={`${e.company}${i}`}>
              <h1>
                <TextReveal>{e.company}</TextReveal>
              </h1>
              <TextReveal>{e.position}</TextReveal>
              <TextReveal>{e.status}</TextReveal>
              <TextReveal>{e.stack}</TextReveal>
            </div>
          ))}
        </Carousel>
      </div>
    </ExperienceSt>
  );
};

export default Experience;
