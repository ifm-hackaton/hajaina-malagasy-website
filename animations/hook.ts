import { useEffect, useState } from "react";
import { loadTimelines } from "./utils";
import { DEFAULT_NAMESPACES } from "./constants";

export const useAnimationHook = (namespaces:string[]) => {
    const [timelines, setTimelines] = useState<any[]>([]);

    useEffect(() => {
        let mounted = true;
        namespaces = namespaces ? namespaces : DEFAULT_NAMESPACES;
        loadTimelines(namespaces).then((loaded) => {
            if (mounted) setTimelines(loaded);
        });
        return () => { mounted = false; };
    }, []);

    return { timelines };
}