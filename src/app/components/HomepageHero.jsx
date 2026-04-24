"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tagline = "Agentic Engineer & AI Architect";
const chars = tagline.split("");

const PARTICLE_COLS = 24;
const PARTICLE_ROWS = 14;
const MOUSE_RADIUS = 160;
const ICE_WIRE_RGB = [125, 211, 252];
const PULSE_SPEED = 350;
const PULSE_WIDTH = 100;
const PULSE_DURATION = 2.5;
const TYPING_DELAY_MS = 500;
const TYPING_STAGGER_MS = 40;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: TYPING_STAGGER_MS / 1000,
      delayChildren: TYPING_DELAY_MS / 1000,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, color: "#7dd3fc" },
  visible: {
    opacity: 1,
    color: "#bec8ce",
    transition: {
      opacity: { duration: 0.01 },
      color: { duration: 0.6, delay: 0.15, ease: "easeOut" },
    },
  },
};

const HomepageHero = () => {
  const [typingDone, setTypingDone] = useState(false);
  const [signalAcquired, setSignalAcquired] = useState(false);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const pulseRef = useRef(null);
  const rafRef = useRef(null);
  const sectionRef = useRef(null);
  const timeRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const timer = setTimeout(() => setSignalAcquired(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const initParticles = useCallback((w, h) => {
    const particles = [];
    const sx = w / (PARTICLE_COLS + 1);
    const sy = h / (PARTICLE_ROWS + 1);
    for (let r = 1; r <= PARTICLE_ROWS; r++) {
      for (let c = 1; c <= PARTICLE_COLS; c++) {
        particles.push({
          baseX: c * sx,
          baseY: r * sy,
          x: c * sx,
          y: r * sy,
          baseOpacity: 0.05 + Math.random() * 0.06,
          opacity: 0.05 + Math.random() * 0.06,
          size: 1 + Math.random() * 0.8,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const { width, height } = section.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const loop = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const pulse = pulseRef.current;
      const reduced = reducedMotionRef.current;
      const t = timeRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let tO = p.baseOpacity;
        let tX = p.baseX;
        let tY = p.baseY;

        if (!reduced) {
          const dx = mouse.x - p.baseX;
          const dy = mouse.y - p.baseY;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE_RADIUS) {
            const inf = 1 - d / MOUSE_RADIUS;
            const e = inf * inf;
            tO += e * 0.35;
            if (d > 0.001) {
              tX += (dx / d) * e * 8;
              tY += (dy / d) * e * 8;
            }
          }

          if (pulse) {
            const el = t - pulse.startTime;
            const pr = el * PULSE_SPEED;
            const pd = Math.abs(
              Math.sqrt(
                (p.baseX - pulse.x) ** 2 + (p.baseY - pulse.y) ** 2
              ) - pr
            );
            if (pd < PULSE_WIDTH && el < PULSE_DURATION) {
              tO +=
                (1 - pd / PULSE_WIDTH) *
                (1 - el / PULSE_DURATION) *
                0.5;
            }
          }

          tO += Math.sin(t * 0.8 + p.phase) * 0.012;
        }

        p.x += (tX - p.x) * 0.1;
        p.y += (tY - p.y) * 0.1;
        p.opacity += (tO - p.opacity) * 0.1;

        const a = Math.max(0, Math.min(1, p.opacity));
        ctx.fillStyle = `rgba(${ICE_WIRE_RGB[0]},${ICE_WIRE_RGB[1]},${ICE_WIRE_RGB[2]},${a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      timeRef.current += 1 / 60;
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initParticles]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const total = TYPING_DELAY_MS + chars.length * TYPING_STAGGER_MS;
    const timer = setTimeout(() => {
      setTypingDone(true);
      if (reducedMotionRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      pulseRef.current = {
        x: rect.width * 0.42,
        y: rect.height * 0.5,
        startTime: timeRef.current,
      };
      setTimeout(() => {
        pulseRef.current = null;
      }, PULSE_DURATION * 1000);
    }, total);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-16 min-h-screen flex items-center relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 scanline-overlay pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="border-l-2 border-primary-container pl-lg py-lg">
          <AnimatePresence>
            {signalAcquired && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0.6, 0] }}
                transition={{ duration: 1.2, times: [0, 0.15, 0.7, 1] }}
                className="font-data-mono text-[10px] text-primary-container/40 uppercase tracking-[0.2em] block mb-2"
              >
                SIGNAL ACQUIRED
              </motion.span>
            )}
          </AnimatePresence>
          <span className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest mb-md block animate-glitch">
            {"// IDENTIFICATION"}
          </span>
          <motion.h1
            className="font-display-poetry text-display-poetry text-on-surface mb-md leading-tight"
            initial={{
              opacity: 0,
              textShadow: "0 0 40px rgba(125,211,252,0.5)",
            }}
            animate={{
              opacity: 1,
              textShadow: "0 0 0px rgba(125,211,252,0)",
            }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          >
            Sakib Ahammed Shahon
          </motion.h1>
          <div className="font-headline-lg text-[24px] text-on-surface-variant mb-md flex items-center min-h-[36px]">
            <motion.span
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              aria-label={tagline}
            >
              {chars.map((char, i) => (
                <motion.span key={i} variants={charVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="text-primary-container ml-0.5"
              style={{ textShadow: "0 0 6px rgba(125,211,252,0.4)" }}
              animate={
                typingDone
                  ? { opacity: 0 }
                  : { opacity: [1, 1, 0, 0, 1, 1, 0, 0] }
              }
              transition={
                typingDone
                  ? { duration: 0.4, ease: "easeOut" }
                  : { duration: 0.8, repeat: Infinity }
              }
            >
              |
            </motion.span>
          </div>
          <motion.p
            className="font-body-md text-body-md text-on-surface-variant max-w-[70ch] mb-lg"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
          >
            Building AI-native systems and agentic features that ship fast and
            cost less. Specializing in agentic cost optimization, AI-first
            product design, and intelligent automation that actually works in
            production.
          </motion.p>
          <motion.div
            className="flex gap-sm flex-wrap"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/projects"
              className="font-data-mono text-label-caps uppercase px-md py-sm bg-primary-container text-on-primary rounded-none hover:bg-surface-tint transition-colors duration-200"
            >
              VIEW PROJECTS
            </Link>
            <a
              href="/files/Sakib-Ahamed-Shahon-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-data-mono text-label-caps uppercase px-md py-sm border border-primary-container text-primary-container rounded-none hover:bg-surface-container-low transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-primary-container focus-visible:outline-offset-2"
            >
              VIEW RESUME
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
