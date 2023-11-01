import Link from "next/link";
import styles from "./Header.module.scss";
import { ROUTES } from "../../../constants";
import { getServerSession } from "next-auth";
import MenuItem from "../MenuItem/MenuItem";

const Header = async () => {
  const session = await getServerSession();
  console.log(session, "session");

  const MENU_ITEMS = [
    { title: "Login", route: ROUTES.LOGIN },
    { title: "Register", route: ROUTES.REGISTER },
    { title: "Logout", isAuth: session?.user },
  ];

  return (
    <header className={styles.header}>
      {MENU_ITEMS.map(({ title, route, isAuth }) => (
        <MenuItem title={title} route={route} isAuth={isAuth} />
      ))}
      {/* <Link href={ROUTES.LOGIN}>
        <div className={styles.menuItem}>Login</div>
      </Link>
      <Link href={ROUTES.REGISTER}>
        <div className={styles.menuItem}>Register</div>
      </Link>
      {session?.user && <div className={styles.menuItemLogout}>Logout</div>} */}
    </header>
  );
};

export default Header;
