import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../HomeSection/Home";
import About from "../AboutSection/About";
import Service from "../ServiceSection/Service";
import Contact from "../ContactSection/Contact";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RouteComponent;
