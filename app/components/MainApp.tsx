"use client";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import Projects from "./Projects";

export default function MainApp() {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!showLoading && (
        <>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}
