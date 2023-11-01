"use client";
import Link from "next/link";
import styles from "./MenuItem.module.scss";
import { signOut } from "next-auth/react";

const MenuItem = ({ route, title, isAuth }) => {
  return (
    <>
      {route && (
        <Link href={route}>
          <div className={styles.menuItem}>{title}</div>
        </Link>
      )}
      {isAuth && (
        <div className={styles.menuItemLogout} onClick={signOut}>
          Logout
        </div>
      )}
    </>
  );
};

export default MenuItem;
