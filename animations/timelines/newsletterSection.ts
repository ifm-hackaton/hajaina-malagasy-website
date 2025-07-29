import configuredGsap from "../config";

const animateNewsletterSection = () => {
  configuredGsap.from(
    ".newsletter-section h2, .newsletter-section .w-32, .newsletter-section p",
    {
      scrollTrigger: {
        trigger: ".newsletter-section",
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

export default animateNewsletterSection;
