"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

let lenis: Lenis;

export function scrollToId(id: string) {
  if (!lenis) return;

  const element = document.getElementById(id);
  if (!element) return;

  lenis.scrollTo(element, { offset: 0, duration: 1.2 });
}

export default function SmoothScroll() {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
