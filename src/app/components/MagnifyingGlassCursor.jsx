"use client";
import React, { useRef, useEffect } from "react";
import styles from "../styles/HomepageHero.module.css";

const MagnifyingGlassCursor = () => {
  //code for cursor will go here
  const cursorRef = useRef(null);

  useEffect(() => {
    if (cursorRef.current) {
      const handleMouseMove = (e) => {
        cursorRef.current.style.left = e.pageX + "px";
        cursorRef.current.style.top = e.pageY + "px";
      };
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [cursorRef]);

  return <div ref={cursorRef} id={styles.cursor}></div>;
};

export default MagnifyingGlassCursor;
