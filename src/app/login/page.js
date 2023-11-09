'use client';
import AuthForm from '../../components/AuthForm/AuthForm';
import googleLogo from 'src/assets/images/google-logo.svg';
import emailLogo from 'src/assets/images/email-logo.svg';
import SocialButton from '../../components/SocialButton/SocialButton';
import Link from 'next/link';
import { ROUTES } from '../../../constants';
import styles from './page.module.css';
import { signIn } from 'next-auth/react';

export const SOCIAL_METHODS = {
	GOOGLE: {
		method: 'Login',
		provider: 'Google',
		loginTitle: 'Login with Google',
		logo: googleLogo,
	},
	EMAIL: {
		method: 'Email',
		provider: 'Email',
		loginTitle: 'Login with Email',
		logo: emailLogo,
	},
};

const Login = () => {
	const loginWithGoogle = async () => {
		try {
			await signIn('google', { redirect: false });
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<AuthForm>
			<h1>Login</h1>
			<section className={styles.socialContainer}>
				<SocialButton
					{...SOCIAL_METHODS.GOOGLE}
					handleClick={loginWithGoogle}
				/>
				<Link href={ROUTES.LOGIN_EMAIL}>
					<SocialButton {...SOCIAL_METHODS.EMAIL} />
				</Link>
			</section>
		</AuthForm>
	);
};

export default Login;
