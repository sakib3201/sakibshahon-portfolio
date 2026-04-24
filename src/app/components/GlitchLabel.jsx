"use client";
import { useRef, useState, useEffect } from "react";

export default function GlitchLabel({ children, className = "" }) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`${className} ${triggered ? "animate-glitch" : "opacity-0"}`}
    >
      {children}
    </span>
  );
}
