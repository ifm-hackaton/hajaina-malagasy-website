import configuredGsap from "../config";

export const createHeroTimeline = () => {
    const tl = configuredGsap.timeline();
    const tl2 = configuredGsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(".hero-image", {
        scale: 0.8,
        x: -400,
        autoAlpha: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.6
    });

    tl2.from(".hero-title", {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        delay: 0.6
    })
    .from(".hero-subtext", {
        y: 60,
        autoAlpha: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".hero-description", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".hero-button", {
        scale: 0.9,
        autoAlpha: 0,
        duration: 0.6
    }, "-=0.4");
};

export default createHeroTimeline;