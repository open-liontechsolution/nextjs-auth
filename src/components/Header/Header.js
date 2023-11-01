import Link from "next/link";
import styles from "./Header.module.scss";
import { ROUTES } from "../../../constants";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={ROUTES.LOGIN}>
        <div className={styles.menuItem}>Login</div>
      </Link>
      <Link href={ROUTES.REGISTER}>
        <div className={styles.menuItem}>Register</div>
      </Link>
    </header>
  );
};

export default Header;
