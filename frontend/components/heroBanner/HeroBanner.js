import React from "react";
import Image from "next/image";
import styles from "./heroBanner.module.scss";
import images from "@/constants/images";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={images.donut}
          layout="fill"
          className={styles.image}
          priority
          objectFit="cover"
          objectPosition="center"
          alt="Donut banner"
        />
      </div>
      <div className={styles.btn}>
        <button className={`p__opensans`}>View Menu</button>
      </div>
    </div>
  );
};

export default Hero;
