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
            Ahamed Shahon
          </div>
          <div id={styles.personal_description}>Software Artisan & Codemancer.<br />Weaving Magic with Logic.</div>
          <MagnifyingGlassCursor></MagnifyingGlassCursor>
        </div>
      </div>
      <div className={styles.Grp_Button}>
        <a href="#Projects"><button>Works</button></a>
        <a href="#Skills"><button>Skills</button></a>
        <a href="#Blogs"><button>Blogs</button></a>
        <a href="/files/Sakib_Ahamed-Shahon_Resume.pdf" download><button>Resume</button></a>
      </div>
    </div>
  );
};

export default HomepageHero;
