'use client';
import styles from './Header.module.scss';
import { ROUTES } from '../../../constants';
import MenuItem from '../MenuItem/MenuItem';
import { useSession } from 'next-auth/react';

const MENU_ITEMS = [
	{ title: 'Login', route: ROUTES.LOGIN, needSession: false },
	{ title: 'Register', route: ROUTES.REGISTER, needSession: false },
	{ title: 'Logout', needSession: true },
];

const Header = () => {
	const session = useSession();

	return (
		<header className={styles.header}>
			{MENU_ITEMS.map(
				({ title, route, needSession }) =>
					needSession === !!session?.data?.user && (
						<MenuItem
							key={title}
							title={title}
							route={route}
							isAuth={!!session?.data?.user}
						/>
					),
			)}
		</header>
	);
};

export default Header;
