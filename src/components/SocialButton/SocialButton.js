'use client';
import Image from 'next/image';
import styles from './SocialButton.module.scss';
import { signIn } from 'next-auth/react';
import { ROUTES } from '../../../constants';

const SocialButton = ({ loginTitle, logo, provider }) => {
	const login = async () => {
		try {
			await signIn('google', { callbackUrl: ROUTES.DASHBOARD });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={styles.socialButton} onClick={login}>
			<Image alt={provider} src={logo} width={40} height={40} />
			<p>{loginTitle}</p>
		</div>
	);
};

export default SocialButton;
