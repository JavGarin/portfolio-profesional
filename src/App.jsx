import React, { useEffect, useRef, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const contactSectionTop = contactRef.current.getBoundingClientRect().top;
        if (contactSectionTop <= window.innerHeight) {
          setShowScrollToTopButton(true);
        } else {
          setShowScrollToTopButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isReady]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact ref={contactRef} />
        <ScrollToTopButton isVisible={showScrollToTopButton} />
      </div>
    </ReactLenis>
  );
};

export default App;