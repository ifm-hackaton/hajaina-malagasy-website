import configuredGsap from "../config";

export const createHeaderTimeline = (pathname: string) => {
    const tl = configuredGsap.timeline();
    
    if (pathname === "/") {
        tl.from(".header", {
            y: -400,
            autoAlpha: 0,
            ease: "power2.out",
            duration: 0.8,
            delay: 0.4,
        });
    } else {
        tl.from(".header", {
            autoAlpha: 0,
            duration: 0
        });
    }
};

export default createHeaderTimeline;
