"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { ROUTES } from "../../../constants";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();

  return (
    <header className={styles.header}>
      <Link href={ROUTES.LOGIN}>
        <div className={styles.menuItem}>Login</div>
      </Link>
      <Link href={ROUTES.REGISTER}>
        <div className={styles.menuItem}>Register</div>
      </Link>
      {session?.data && (
        <div className={styles.menuItemLogout} onClick={signOut}>
          Logout
        </div>
      )}
    </header>
  );
};

export default Header;
