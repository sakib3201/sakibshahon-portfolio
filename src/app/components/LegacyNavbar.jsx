"use client";
import React from "react";
import style from "../styles/LegacyNavbar.module.css";
import Link from "next/link";

const LegacyNavbar = () => {
  return (
    <div className={style.total_navbar}>
      <nav className={style.Main_menu}>
        <ul className={style.Main_menu_list}>
          <li className={style.Main_menu_link}>
            <Link href="/"> Home </Link>
          </li>
          <li className={style.Main_menu_link}>
            Contact
          </li>
          <li className={style.Main_menu_link}>
            <Link href="/"> Projects </Link>
          </li>
          <li className={style.Main_menu_link}>
            <Link href="https://dev.to/sakib3201"> Blog </Link>
          </li>
          <li className={style.Main_menu_link}>
            <Link href="/about"> About Me </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LegacyNavbar;
