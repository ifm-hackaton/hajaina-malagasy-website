import configuredGsap from "../config";


const animateQRCodeSection = () => {
  configuredGsap.from(
    ".qrcode-section h2, .qrcode-section .w-32, .qrcode-section p, .qrcode-section button, .qrcode-section h4",
    {
      scrollTrigger: {
        trigger: ".qrcode-section",
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

export default animateQRCodeSection;