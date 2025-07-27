"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
    const [showCursor, setShowCursor] = useState(true);
    const [hasMoved, setHasMoved] = useState(false);
    const ballRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const isMouseDevice = () => window.matchMedia("(pointer: fine)").matches;
      const updateCursorVisibility = () => {
        setShowCursor(isMouseDevice());
      };
      updateCursorVisibility();
      window.addEventListener("resize", updateCursorVisibility);
      return () => window.removeEventListener("resize", updateCursorVisibility);
    }, []);

    useEffect(() => {
        if (!ballRef.current) return;
        gsap.set(ballRef.current, { scale: 0 });

        const onMouseMove = (e: MouseEvent) => {
          if (!ballRef.current) return;

          if (!hasMoved) {
            gsap.to(ballRef.current, { duration: 0.3, scale: 1 });
            setHasMoved(true);
          }

          gsap.to(ballRef.current, {
            duration: 0.2,
            x: e.clientX - 15,
            y: e.clientY - 15,
          });
      };

      document.body.addEventListener("mousemove", onMouseMove);

      return () => {
        document.body.removeEventListener("mousemove", onMouseMove);
      };
    }, [hasMoved]);

    useEffect(() => {
      if (!ballRef.current) return;

      const onMouseHover = () => {
          gsap.to(ballRef.current, { duration: 0.3, scale: 1.6 });
      };
      const onMouseHoverOut = () => {
          gsap.to(ballRef.current, { duration: 0.3, scale: 1 });
      };

      const hoverables = document.querySelectorAll("button, a");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseHover);
        el.addEventListener("mouseleave", onMouseHoverOut);
      });

      return () => {
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseHover);
          el.removeEventListener("mouseleave", onMouseHoverOut);
        });
      };
    }, []);

    return (
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[1000] mix-blend-difference ${
          !showCursor ? "opacity-0" : ""
        }`}
      >
        <div
          ref={ballRef}
          className="cursor__ball cursor__ball--big fixed top-0 left-0 z-[1000] scale-0"
        >
          <svg className="overflow-visible" height="60" width="60">
            <circle cx="20" cy="20" r="30" fill="#f7f8fa" />
          </svg>
        </div>
      </div>
    );
}
