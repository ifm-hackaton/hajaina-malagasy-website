import configuredGsap from "../config";

export const createHeaderTimeline = (pathname: string) => {
    if (pathname === "/") {
        configuredGsap.timeline().from(".header", {
            y: -400,
            autoAlpha: 0,
            ease: "power2.out",
            duration: 0.8,
            delay: 2.2,
        });
    } else {
        configuredGsap.timeline().from(".header", {
            autoAlpha: 0,
            duration: 0
        });
    }
};

export default createHeaderTimeline;
