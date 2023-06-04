import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 3.9,
    easing: (t) => Math.min(3, 2.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    smooth: true,
  });

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
};
