import { useGSAP } from "@gsap/react";
import { useAnimationHook } from "./hook";
import { usePathname } from "next/navigation";

export const useAnimation = (namespaces:string[]) => {
    const { timelines } = useAnimationHook(namespaces);
    const pathname = usePathname();

    useGSAP(() => {
        timelines.forEach(createTimeline => {
            createTimeline(pathname);
        });
    }, [timelines, pathname]);
};