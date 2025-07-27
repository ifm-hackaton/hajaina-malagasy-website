import configuredGsap from "../config";

const animateCollectionsSection = () => {
  configuredGsap.from(".collections-section h2, .collections-section .separator, .collections-section p, .collections-section .w-full", {
    scrollTrigger: {
      trigger: ".collections-section",
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
  });
};

export default animateCollectionsSection;