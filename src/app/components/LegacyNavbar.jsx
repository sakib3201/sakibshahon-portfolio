"use client"
import React, { useRef, useEffect } from 'react';
import style from "../styles/LegacyNavbar.module.css";
import Link from "next/link";
import { gsap } from "gsap";

const LegacyNavbar = () => {
  const activatorRef = useRef(null);
  const [toggle, setToggle] = React.useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
      },
    });

    tl.to('.custom_icon_menu', {
      background: 'tomato',
      'borderRadius': '5em 0 0 5em',
    });
    tl.to('nav', {
      'clipPath': 'ellipse(100% 100% at 50% 50%)',
    }, "-=.5");
    tl.to('nav i', {
      opacity: 1,
      transform: 'translateX(0)',
      stagger: .05,
    }, "-=.5");
    tl.pause();

    activatorRef.current.addEventListener('click', () => {
      setToggle(!toggle);
      toggle ? tl.play() : tl.reverse();
    });

    // Cleanup function to pause the timeline when the component unmounts
    return () => tl.pause();
  }, []);

  return (
    <div className={style.total_navbar}>
    <i className={style.custom_icon_menu} id={style.Activator} ref={activatorRef}>Menu</i>
    <nav className={style.Main_menu}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Home</Link></li>
      </ul>
    </nav>
  </div>
  );
};

export default LegacyNavbar;
