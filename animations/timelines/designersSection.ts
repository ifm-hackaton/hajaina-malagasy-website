import configuredGsap from "../config";

const animateDesignersSection = () => {
  configuredGsap.from(
    ".designers-section h2, .designers-section .w-32, .designers-section p, .designers-section .rotating-star, .designers-section .designer-card",
    {
      scrollTrigger: {
        trigger: ".designers-section",
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

export default animateDesignersSection;
