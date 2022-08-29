import React from "react";
import { HashLink } from "react-router-hash-link";

import Nav from "../../layouts/Nav";
import Main from "../../layouts/Main";
import useScroll from "../../hooks/useScroll";
import useWindowSize from "../../hooks/useWindowSize";

import Intro from "./sections/Intro";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import useHome from "./hooks/useHome";

const Home = () => {
  const { hasScrolled } = useScroll();
  const { isDesktop } = useWindowSize({ mobile: 400, tablet: 700 });
  const { navPosition } = useHome({ isDesktop });

  return (
    <>
      <Nav
        className="gap-3"
        position={navPosition}
        isShown={hasScrolled}
        getLinks={({ getActiveClassName }) => (
          <>
            <HashLink
              className={`${getActiveClassName("/#profile")}`}
              smooth
              to="#profile"
            >
              profile
            </HashLink>
            <HashLink
              className={`${getActiveClassName("/#experience")}`}
              smooth
              to="#experience"
            >
              experience
            </HashLink>
            <HashLink
              className={`${getActiveClassName("/#projects")}`}
              smooth
              to="#projects"
            >
              projects
            </HashLink>
            <HashLink
              className={`${getActiveClassName("/#blog")}`}
              smooth
              to="#blog"
            >
              blog
            </HashLink>
            <HashLink
              className={`${getActiveClassName("/#contact")}`}
              smooth
              to="#contact"
            >
              contact
            </HashLink>
          </>
        )}
      />
      <Main>
        <Intro />
        <Profile />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </Main>
    </>
  );
};

export default Home;
