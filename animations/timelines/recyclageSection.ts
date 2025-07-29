import configuredGsap from "../config";

const animateRecyclageSection = () => {
  configuredGsap.from(
    ".recyclage-section h2, .recyclage-section h3, .recyclage-section p, .flex.items-start, .recyclage-section button",
    {
      scrollTrigger: {
        trigger: ".recyclage-section",
        start: "top 80%",
      },
      x: -60,
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
    }
  );
};

export default animateRecyclageSection;
