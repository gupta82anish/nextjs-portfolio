import { useActiveSectionContext } from "@/app/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75){
    const {ref, inView} = useInView({
        threshold: threshold
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    useEffect(() => {
      if(inView && Date.now() - timeOfLastClick > 850){
          setActiveSection(sectionName)
        }
    },[inView, timeOfLastClick, sectionName])

    return {ref}
}