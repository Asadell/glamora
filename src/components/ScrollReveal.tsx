import { useEffect } from "react";

const ScrollReveal: React.FC = () => {
  useEffect(() => {
    const reveal = () => {
      const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
      const windowHeight = window.innerHeight;
      const revealPoint = 0;

      revealElements.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);

    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return null;
};

export default ScrollReveal;
