import styles from './Header.module.scss';
import { ROUTES } from '../../../constants';
import { getServerSession } from 'next-auth';
import MenuItem from '../MenuItem/MenuItem';

const Header = async () => {
	let session;
	try {
		session = await getServerSession();
	} catch (error) {
		console.error(error);
	}

	const MENU_ITEMS = [
		{ title: 'Login', route: ROUTES.LOGIN },
		{ title: 'Register', route: ROUTES.REGISTER },
		{ title: 'Logout', isAuth: !!session },
	];

	return (
		<header className={styles.header}>
			{MENU_ITEMS.map(({ title, route, isAuth }) => (
				<MenuItem
					key={title}
					title={title}
					route={route}
					isAuth={isAuth}
				/>
			))}
		</header>
	);
};

export default Header;
