import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./heroBanner.module.scss";
import images from "@/constants/images";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.imageWrapper}>
        <Link href="/menu">
          <Image
            src={images.donut}
            layout="fill"
            className={styles.image}
            priority
            // objectFit="cover"
            alt="Donut banner"
          />
        </Link>
      </div>
      <div className={styles.btn}>
        <button>Menu</button>
      </div>
    </div>
  );
};

export default Hero;
