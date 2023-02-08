import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import images from "@/constants/images";
import NavLinks from "./NavLinks";
import styles from "./navbar.module.scss";

//react icons
import { GiDonut } from "react-icons/gi";

const navMap = NavLinks.map((val, index) => {
  return (
    <li key={val.title + index} className="p__opensans">
      <Link href={val.link}>{val.title}</Link>
    </li>
  );
});

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Image
          src={images.logo}
          width={80}
          height={70}
          alt="bernie beigne logo"
        />
      </div>
      <ul>{navMap}</ul>
      <div className={styles.navbar_smallscreen}>
        <GiDonut
          className={styles.overlay__open}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div
            className={`${styles.navbar_smallscreen_overlay} flex__center slide-bottom`}
          >
            <GiDonut
              className={styles.overlay__close}
              onClick={() => setToggleMenu(false)}
            />
            <ul>{navMap}</ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
