"use client";
import Image from "next/image";
import styles from "./SocialButton.module.scss";

// export const METHOD_TYPES = {};
const SocialButton = ({ method, loginTitle, logo }) => {
  const login = () => {
    console.log("LOGIN");
  };

  return (
    <div className={styles.socialButton} onClick={login}>
      <Image src={logo} width={40} height={40} />
      <p>{loginTitle}</p>
    </div>
  );
};

export default SocialButton;
