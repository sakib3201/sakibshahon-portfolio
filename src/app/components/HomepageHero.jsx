import React from "react";
import styles from "../styles/HomepageHero.module.css";
import MagnifyingGlassCursor from "./MagnifyingGlassCursor";

const HomepageHero = () => {
  return (
    <div>
      <div className={styles.Outer_homepage}>
        <div className={styles.Homepage}>
          <div className={styles.Home_page_name}>
            <span id="Letter_S">S</span>
            <span id="Letter_a">a</span>
            <span id="Letter_k">k</span>
            <span id="Letter_i">i</span>
            <span id="Letter_b">b</span>
            <span id="Letter_A">A</span>
            <span id="Letter_h">h</span>
            <span id="Letter_a2">a</span>
            <span id="Letter_m">m</span>
            <span id="Letter_e">e</span>
            <span id="Letter_d">d</span>
            <span id="Letter_Space"> </span>
            <span id="Letter_S2">S</span>
            <span id="Letter_h2">h</span>
            <span id="Letter_a3">a</span>
            <span id="Letter_h3">h</span>
            <span id="Letter_o">o</span>
            <span id="Letter_n">n</span>
          </div>
          <div id={styles.personal_description}>The <span className="text-accent"><b>&quot;CAN DO&quot;</b></span> Software Artisan<br /></div>
          <MagnifyingGlassCursor></MagnifyingGlassCursor>
        </div>
      </div>
      <div className={styles.Grp_Button}>
        <a href="#Projects"><button>Works</button></a>
        <a href="#Skills"><button>Skills</button></a>
        <a href="https://dev.to/sakib3201" target="_blank"><button>Blogs</button></a>
        <a href="/files/Sakib_Ahamed-Shahon_Resume.pdf" download><button>Resume</button></a>
      </div>
    </div>
  );
};

export default HomepageHero;
