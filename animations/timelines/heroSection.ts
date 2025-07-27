import { gsap } from "../config";

export const createHeroTimeline = () => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(".hero-image", {
        scale: 0.8,
        x: -400,
        opacity: 0,
        autoAlpha: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.6
    });

    tl2.from(".hero-title", {
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 1,
        delay: 0.6
    })
    .from(".hero-subtext", {
        y: 60,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".hero-description", {
        y: 40,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".hero-button", {
        scale: 0.9,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.6
    }, "-=0.4");
};

export default createHeroTimeline;