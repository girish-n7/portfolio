// import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import ProjectsPage from "./ProjectsPage";
import Error from "./Error";

const SwitchPage = () => {
  return (
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/projects" element={<ProjectsPage />}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default SwitchPage;

// NOTE: in future use Routes instead of Switch
// also use element instead of component in Route properties
