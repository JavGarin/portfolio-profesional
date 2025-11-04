import React from "react";
import { Icon } from "@iconify/react";
import { useLenis } from "lenis/react";

const ScrollToTopButton = ({ isVisible }) => {
  const lenis = useLenis();

  const scrollToTop = () => {
    lenis.scrollTo(0, { duration: 1.5, easing: (t) => t * (2 - t) }); // Smooth ease-out
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-black text-white rounded-full shadow-lg transition-opacity duration-300 z-50 cursor-pointer ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}

      aria-label="Volver arriba"
    >
      <Icon icon="lucide:arrow-up" className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
