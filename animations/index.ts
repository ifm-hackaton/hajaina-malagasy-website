import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { loadTimelines } from "./config";

export const useAnimation = () => {
    const [timelines, setTimelines] = useState<any[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        let mounted = true;
        loadTimelines().then((loaded) => {
            if (mounted) setTimelines(loaded);
        });
        return () => { mounted = false; };
    }, []);

    useGSAP(() => {
        timelines.forEach(createTimeline => {
            createTimeline(pathname);
        });
    }, [timelines, pathname]);
};