import React from "react";

import useExperience from "./hooks/useExperience";
import ExperienceSt from "./Experience.style";
import Company from "./Experience.company";
import Carousel from "../../../../components/Carousel/Carousel";
import casual from "../../../../../public/icons/formal.jpg";

const EXPERIENCE = [
  {
    company: "Fullspeed Technologies Inc",
    image: casual,
    position: "Junior Software Engineer",
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
  const { classes } = useExperience();
  return (
    <ExperienceSt className={classes.join(" ")} id="experience">
      <div id="experience-container">
        <Carousel>
          {EXPERIENCE.map((e, i) => (
            <Company
              key={`${e.company}${i}`}
              experience={e}
              index={i}
              showDelay={(i + 4) * 1000}
            />
          ))}
        </Carousel>
      </div>
    </ExperienceSt>
  );
};

export default Experience;
