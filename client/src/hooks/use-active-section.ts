import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        if (!sectionId) return;

        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop <= 200) {
          current = sectionId;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};
