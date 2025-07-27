import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const useAnimation = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        const tl2 = gsap.timeline({ defaults: { ease: "power2.out" } });
        const tl3 = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.from(".header", {
            y: -400,
            opacity: 0,
            duration: 1,
            delay: 0.6
        });

        tl2.from(".hero-image", {
            scale: 0.6,
            x: -400,
            opacity: 0,
            duration: 1,
            delay: 0.6
        });

        tl3.from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 0.6
        })
        .from(".hero-subtext", {
            y: 60,
            opacity: 0,
            duration: 0.8,
        }, "-=0.6")
        .from(".hero-description", {
            y: 40,
            opacity: 0,
            duration: 0.8,
        }, "-=0.6")
        .from(".hero-button", {
            scale: 0.9,
            opacity: 0,
            duration: 0.6
        }, "-=0.4");
    }, []);


    return { gsap };
}

export default useAnimation;