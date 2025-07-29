import configuredGsap from "../config";

const animateCollaborationsSection = () => {
  configuredGsap.from(
    ".collaborations-section .card, .collaborations-section h2, .collaborations-section .w-32, .collaborations-section p, .collaborations-section button",
    {
      scrollTrigger: {
        trigger: ".collaborations-section",
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
    }
  );
};

export default animateCollaborationsSection;
