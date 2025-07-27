import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TIMELINEFILES } from "./constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const loadTimelines = async () => {
    return Promise.all(TIMELINEFILES.map(path => 
        import(`./timelines/${path}`))
    ).then(modules => 
        modules.map(mod => mod.default
    ));
}

export { gsap, loadTimelines };