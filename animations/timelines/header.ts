import { gsap } from "../config";

export const createHeaderTimeline = (pathname: string) => {
    const tl = gsap.timeline();
    
    if (pathname === "/") {
        tl.from(".header", {
            y: -400,
            autoAlpha: 0,
            ease: "power2.out",
            duration: 0.8,
            delay: 0.4,
        });
    }
};

export default createHeaderTimeline;
