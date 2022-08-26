import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import Intro from "./sections/Intro";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import ThemeSt from "./styles/Theme";
import Nav from "./layouts/Nav";
import Main from "./layouts/Main";

const App = () => {
  return (
    <ThemeSt>
      <Nav />
      <Main>
        <Intro />
        <Profile />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </Main>
    </ThemeSt>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
