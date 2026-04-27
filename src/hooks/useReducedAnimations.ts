import { useEffect, useState } from "react";

/**
 * Returns true when animations should be reduced:
 * - user has `prefers-reduced-motion: reduce` set
 * - OR viewport is mobile-sized (<= 768px)
 *
 * Use this to skip heavy effects (canvas particles, orbits, blurs, parallax)
 * and keep scrolling fluid on lower-end devices.
 */
export function useReducedAnimations(mobileBreakpoint = 768) {
  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const prefers = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth <= mobileBreakpoint;
    return prefers || mobile;
  });

  useEffect(() => {
    const motionMql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sizeMql = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);

    const update = () => setReduced(motionMql.matches || sizeMql.matches);

    motionMql.addEventListener("change", update);
    sizeMql.addEventListener("change", update);
    update();

    return () => {
      motionMql.removeEventListener("change", update);
      sizeMql.removeEventListener("change", update);
    };
  }, [mobileBreakpoint]);

  return reduced;
}
