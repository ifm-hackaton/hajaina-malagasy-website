import configuredGsap from "../config";

export const createHeroTimeline = () => {
    configuredGsap.timeline().fromTo(
        ".main-logo",
        {
            autoAlpha: 0,
            scale: 0.6,
            duration: 2,
            ease: "power2.out",
            delay: 1
        },
        {
            autoAlpha: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
        }
    ).to(
        ".main-logo",
        {
            autoAlpha: 0,
            scale: 0.8,
            top: -50,
            duration: 0.8,
            ease: "power2.in"
        },
        "+=0.5"
    ).from(".hero-image", {
        scale: 0.8,
        x: -400,
        autoAlpha: 0,
        duration: 1,
        ease: "power2.out",
    }).from(".hero-title", {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        delay: 1.4
    }, "-=2.2")
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