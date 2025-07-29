import configuredGsap from "../config";

const animateEthiqueSection = () => {
  configuredGsap.from(
    ".ethique-section h2, .ethique-section .w-32, .ethique-section p, .ethique-section a, .ethique-section span",
    {
      scrollTrigger: {
        trigger: ".ethique-section",
        start: "top 80%",
      },
      x: -60,
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.18,
      ease: "power2.out",
    }
  );
};

export default animateEthiqueSection;
